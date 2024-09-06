import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CoinList from './routes/CoinList';
import CoinDetail from './routes/CoinDetail';
import Price from './routes/Price';
import LineChart from './routes/LineChart';
import CandleStickChart from './routes/CandleStickChart';

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
        children: [
          { path: 'price', element: <Price /> },
          { path: 'line-chart', element: <LineChart /> },
          { path: 'stick-chart', element: <CandleStickChart /> },
        ],
      },
    ],
  },
]);

export default router;
