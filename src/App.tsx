import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
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

const Layout = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
`;

const Aside = styled.aside`
  width: 15vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.asideColor};
  margin-right: 15px;
`;

const Container = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const ThemeButton = styled.button``;

const theme = {
  spacing: (value: number) => `${value}px`,
};

function App() {
  return (
    <>
      <Helmet>
        <title>Crypto Tracker</title>
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Aside>
          <ThemeButton>
            <MdDarkMode />
          </ThemeButton>
        </Aside>
        <Container>
          <Outlet />
        </Container>
      </Layout>
    </>
  );
}

export default App;
