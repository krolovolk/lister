import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  * {
    box-sizing: border-box;
  }
`;

export const Main = styled.main`
  /* display: flex; */
  min-height: 100%;
  padding: 0 20px;
  /* flex: 0 0 calc(100vw - 260px); */
`;