import React from "react";
import styled from "styled-components";
import Icons, { IconType } from "../../assets/svg";
import { COLORS } from "../../theme/colors";
import { Seperator } from "../Shared/Seperator";

const Container = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${COLORS.primaryBackground};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
`;

const DescriptionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${COLORS.secondaryFontColor};
  }
`;

const DescriptionThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DescriptionThumbnail: React.FC<{ Icon: IconType }> = ({ Icon }) => {
  return (
    <DescriptionThumbnailContainer>
      <Icon
        height={100}
        width={100}
        fill={COLORS.primaryFontColor}
        stroke={COLORS.primaryFontColor}
      />
    </DescriptionThumbnailContainer>
  );
};

const FileName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.secondaryFontColor};
`;

const KeyText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.primaryFontColor};
  width: 100px;
  min-width: 100px;
`;

const ValueText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.secondaryFontColor};
  width: 200px;
  overflow-x: hidden;

  &:hover {
    overflow-x: auto;
  }
`;

const KeyValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const KeyValuePair: React.FC<{ label: string; value: string }> = (props) => {
  return (
    <KeyValueContainer key={props.label}>
      <KeyText>{props.label}</KeyText>
      <ValueText>{props.value}</ValueText>
    </KeyValueContainer>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  border-top: 1px solid ${COLORS.primaryFontColor};
  padding-top: 20px;
`;

const ActionButtonText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.secondaryFontColor};
`;

const ActionButtonIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${COLORS.primaryFontColor};
  cursor: pointer;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ActionButton: React.FC<{
  icon: IconType;
  label: string;
  onClick: () => Promise<void> | void;
}> = (props) => {
  return (
    <ActionButtonContainer>
      <ActionButtonIconContainer>
        <props.icon
          height={20}
          width={20}
          fill={COLORS.secondaryFontColor}
          stroke={COLORS.secondaryFontColor}
        />
      </ActionButtonIconContainer>
      <ActionButtonText>{props.label}</ActionButtonText>
    </ActionButtonContainer>
  );
};

const DescriptionPanel = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionTitle>
          <Icons.FileIcon
            height={15}
            width={15}
            fill={COLORS.primaryFontColor}
            stroke={COLORS.primaryFontColor}
          />
          <p>Description</p>
        </DescriptionTitle>
        <Seperator />
        <DescriptionThumbnail Icon={Icons.PdfIcon} />
        <Seperator />
        <FileName>File Name</FileName>
        <KeyValuePair label="File Type" value="PDF" />
        <KeyValuePair label="File Size" value="1.2 MB" />
        <KeyValuePair
          label="File Path"
          value="C:\Users\user\Documents\dfhsjhfshifebfibi"
        />
        <KeyValuePair label="File Created" value="2021-01-01 12:00:00" />
        <KeyValuePair label="File Modified" value="2021-01-01 12:00:00" />
      </DescriptionContainer>
      <ActionsContainer>
        <ActionButton icon={Icons.ShareIcon} label="Share" onClick={() => {}} />
        <ActionButton
          icon={Icons.DownloadIcon}
          label="Download"
          onClick={() => {}}
        />
        <ActionButton
          icon={Icons.RenameIcon}
          label="Rename"
          onClick={() => {}}
        />
        <ActionButton
          icon={Icons.TrashIcon}
          label="Delete"
          onClick={() => {}}
        />
      </ActionsContainer>
    </Container>
  );
};

export default DescriptionPanel;
