import React from "react";
import styled from "styled-components";
import DescriptionPanel from "../components/Panels/DescriptionPanel";
import MenuPanel from "../components/Panels/MenuPanel";
import { COLORS } from "../theme/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const Filler = styled.div`
    flex: 1;
    background-color: ${COLORS.secondaryBackground}
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Container>
          <MenuPanel />
          <Filler />
          <DescriptionPanel />
    </Container>
  );
};

export default Home;
