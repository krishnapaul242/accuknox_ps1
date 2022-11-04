import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { Seperator } from "../Shared/Seperator";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px;
  background-color: ${COLORS.secondaryBackground};
`;

interface MockTableProps {
  type: string;
  name: string;
  size: string;
  created_at: string;
  local_path: string;
  file_type: string;
}

const MockTable: MockTableProps[] = [
  {
    type: "file",
    name: "path.js",
    size: "43KB",
    created_at: "Wed Nov 28 2018 15:03:56 GMT+0530 (IST)",
    local_path: "/Users/test/json-dir-tree/",
    file_type: "js",
  },
  {
    type: "file",
    name: "package.json",
    size: "113KB",
    created_at: "Wed Nov 28 2018 15:03:56 GMT+0530 (IST)",
    local_path: "/Users/test/json-dir-tree/",
    file_type: "json",
  },
  {
    type: "file",
    name: "README.md",
    size: "1KB",
    created_at: "Wed Nov 28 2018 15:03:56 GMT+0530 (IST)",
    local_path: "/Users/test/json-dir-tree/",
    file_type: "md",
  },
];

const CustomTable = styled.table`
  width: 100%;
  color: ${COLORS.primaryFontColor};
  margin-top: 20px;
`;

const CustomTH = styled.th`
  padding: 5px;
  border: 1px solid ${COLORS.primaryFontColor};
  background-color: ${COLORS.primaryBackground};
  color: ${COLORS.secondaryFontColor};
  text-align: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const Resizer = styled.div<{ isResizing?: boolean }>`
  position: absolute;
  right: -7px;
  top: 0;
  height: 100%;
  width: 6px;
  background: rgba(0, 0, 0, 0.5);
  cursor: col-resize;
  user-select: none;
  touch-action: none;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  ${({ isResizing }) =>
    isResizing &&
    `
    background: blue;
    opacity: 1;
  `}
`;

const List = () => {
  const columnHelper = createColumnHelper<MockTableProps>();
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: "Name",
      cell: (cell) => {
        return <div>{cell.getValue()}</div>;
      },
    }),
    columnHelper.accessor("size", {
      id: "size",
      header: "Size",
      cell: (cell) => {
        return <div>{cell.getValue()}</div>;
      },
    }),
    columnHelper.accessor("created_at", {
      id: "created_at",
      header: "Created At",
      cell: (cell) => {
        return <div>{cell.getValue()}</div>;
      },
    }),
    columnHelper.accessor("local_path", {
      id: "local_path",
      header: "Local Path",
      cell: (cell) => {
        return <div>{cell.getValue()}</div>;
      },
    }),
    columnHelper.accessor("file_type", {
      id: "file_type",
      header: "File Type",
      cell: (cell) => {
        return <div>{cell.getValue()}</div>;
      },
    }),
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: MockTable,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });
  return (
    <Container>
      <Seperator />
      <CustomTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <CustomTH
                  {...{
                    key: header.id,
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {{
                    asc: " ↑",
                    desc: " ↓",
                  }[header.column.getIsSorted() as string] ?? null}
                  <Resizer
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    isResizing={header.column.getIsResizing()}
                  />
                </CustomTH>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  {...{
                    key: cell.id,
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </Container>
  );
};

export default List;
