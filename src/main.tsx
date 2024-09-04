import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import { RouterProvider } from 'react-router-dom';
import router from './Router.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
