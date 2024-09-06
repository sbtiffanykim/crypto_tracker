import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { HelmetProvider } from 'react-helmet-async';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atoms';

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
  right: 30px;
  z-index: 1000;
  background-color: ${(props) => props.theme.buttonBgColor};
  color: ${(props) => props.theme.buttonColor};
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
    background-color: ${(props) => props.theme.buttonHoverBgColor};
    transition: background-color 0.3s ease;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleThemeBtn = () => setDarkAtom((prev) => !prev);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <ThemeButton onClick={toggleThemeBtn}>
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </ThemeButton>
          <HelmetProvider>
            <Outlet />
          </HelmetProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
