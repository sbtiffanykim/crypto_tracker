import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CoinList from './routes/CoinList';
import CoinDetail from './routes/CoinDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <CoinList />,
      },
      {
        path: ':coinId',
        element: <CoinDetail />,
      },
    ],
  },
]);

export default router;
