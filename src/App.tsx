import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { MdDarkMode } from 'react-icons/md';
import { HelmetProvider } from 'react-helmet-async';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  * {
        box-sizing: border-box;
    }
  a {
      text-decoration: none;
      color: inherit;
  }
`;

const Container = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const ThemeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  height: 40px;
  width: 40px;
  border: none;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &:hover {
    opacity: 0.8;
    transition: background-color 0.3s ease;
  }
`;

const theme = {};

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ThemeButton>
          <MdDarkMode />
        </ThemeButton>
        <HelmetProvider>
          <Outlet />
        </HelmetProvider>
      </Container>
    </>
  );
}

export default App;
