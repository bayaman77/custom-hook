import React from "react";
import styled from "styled-components";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const {  changeTheme, getTheme } = useTheme();

  return (
    <Background style={{ backgroundColor: `${getTheme()}` }}>
      <Container>
        <Increment />
        <Decrement />
        <ThemeBox>
          <button onClick={() => changeTheme((prev) => !prev)}>
            Change Theme
          </button>
        </ThemeBox>
      </Container>
    </Background>
  );
};

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Background = styled.div`
  padding: 30px;
  width: 100wh;
  height: 100vh;
`;

const ThemeBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
