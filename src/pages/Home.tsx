import React from "react";
import styled from "styled-components";
import DescriptionPanel from "../components/Panels/DescriptionPanel";
import MenuPanel from "../components/Panels/MenuPanel";
import List from "../components/Views/List";
import { COLORS } from "../theme/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Container>
          <MenuPanel />
          <List />
          <DescriptionPanel />
    </Container>
  );
};

export default Home;
