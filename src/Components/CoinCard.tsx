import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  atl: number;
  atl_change_percentage: number;
}

const Card = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const CoinImg = styled.img`
  height: 20px;
  width: 20px;
`;

export default function CoinCard({ ...coin }: ICoin) {
  return (
    <Link to={`/${coin.id}`}>
      <Card>
        <CoinImg src={coin.image} />
        <h1>{coin.name}</h1>
        <h2>$ {coin.current_price}</h2>
        <div>{coin.price_change_24h.toFixed(4)}</div>
        <div>{coin.price_change_percentage_24h.toFixed(2)}%</div>
      </Card>
    </Link>
  );
}
