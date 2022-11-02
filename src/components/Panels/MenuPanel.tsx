import React from "react";
import styled from "styled-components";
import Icons, { IconType } from "../../assets/svg";
import { COLORS } from "../../theme/colors";

const Container = styled.div`
  width: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.primaryBackground};
`;

const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const MenuButtonContainer = styled.div<{ spread?: boolean; active?: boolean }>`
  display: flex;
  flex-direction: ${({ spread }) => (!spread ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ active }) =>
    !active ? COLORS.primaryFontColor : COLORS.secondaryFontColor};
`;

const MenuButtonText = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const MenuButton: React.FC<{
  icon: IconType;
  label: string;
  onClick?: () => void;
  active?: boolean;
}> = (props) => {
  return (
    <MenuButtonContainer onClick={props.onClick} active={props.active}>
      <props.icon
        height={30}
        width={30}
        fill={
          !props.active ? COLORS.primaryFontColor : COLORS.secondaryFontColor
        }
        stroke={
          !props.active ? COLORS.primaryFontColor : COLORS.secondaryFontColor
        }
      />
      <MenuButtonText>{props.label}</MenuButtonText>
    </MenuButtonContainer>
  );
};

const MenuPanel = () => {
  return (
    <Container>
      <MenuButtons>
        <MenuButton icon={Icons.HomeIcon} label="Home" active />
        <MenuButton icon={Icons.FolderIcon} label="All Files" />
        <MenuButton icon={Icons.VideoIcon} label="Videos" />
        <MenuButton icon={Icons.ImageIcon} label="Images" />
        <MenuButton icon={Icons.RecentIcon} label="Recent" />
        <MenuButton icon={Icons.GearIcon} label="Settings" />
      </MenuButtons>
    </Container>
  );
};

export default MenuPanel;
