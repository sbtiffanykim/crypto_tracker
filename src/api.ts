import { QueryFunctionContext } from '@tanstack/react-query';

const BASE_URL = `https://api.coingecko.com/api/v3/coins`;

export function fetchCoins() {
  return fetch(
    `${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1`
  ).then((response) => response.json());
}

export function fetchCoinDetail({ queryKey }: QueryFunctionContext) {
  const [_, coinId] = queryKey;
  return fetch(`${BASE_URL}/${coinId}?localization=false`).then((response) =>
    response.json()
  );
}
