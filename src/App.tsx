import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Helmet } from 'react-helmet';
import { MdDarkMode } from 'react-icons/md';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Montserrat", sans-serif;
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

const Aside = styled.aside`
  width: 15vw;
  height: 100vh;
  float: left;
  background-color: #20283a;
`;

const ThemeButton = styled.button``;

function App() {
  return (
    <>
      <Helmet>
        <title>Crypto Tracker</title>
      </Helmet>
      <GlobalStyle />
      <Aside>
        <ThemeButton>
          <MdDarkMode />
        </ThemeButton>
      </Aside>
      <Outlet />
    </>
  );
}

export default App;
