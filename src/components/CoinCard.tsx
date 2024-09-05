import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ICoin {
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
  padding: 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: block;

  &:hover {
    background-color: ${(props) => props.theme.cardHoverBgColor};
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
`;

const CoinImg = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`;

const CoinId = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  background-color: ${(props) => props.theme.accentColor};
  padding: 3px;
  border-radius: 2px;
  margin-left: 10px;
`;

const CardContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface ITextprops {
  fontWeight?: number;
  fontSize?: string;
  value?: number;
}

const Text = styled.p<ITextprops>`
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => {
    if (props.value && props.value > 0) return props.theme.priceUpColor;
    if (props.value && props.value < 0) return props.theme.priceDownColor;
    return props.theme.textColor;
  }};
`;

export default function CoinCard({ ...coin }: ICoin) {
  return (
    <Link to={`/${coin.id}`}>
      <Card>
        <CardTitle>
          <CoinImg src={coin.image} />
          <Text fontSize={'14px'}>{coin.name}</Text>
          <CoinId>{coin.symbol}</CoinId>
        </CardTitle>
        <CardContent>
          <Text fontWeight={600} fontSize={'20px'}>
            $ {coin.current_price}
          </Text>
          <Text value={coin.price_change_percentage_24h}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
}
