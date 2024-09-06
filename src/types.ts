export type IPriceInfo = [number, number, number, number, number];
export type IPriceData = IPriceInfo[];
export interface ICoinDetail {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
  };
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    total_volume: { usd: number };
    market_cap: { usd: number };
    market_cap_rank: number;
    high_24h: { usd: number };
    low_24h: { usd: number };
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
  };
}
