import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { RiCoinsFill } from 'react-icons/ri';
import CoinCard, { ICoin } from '../components/CoinCard';
import { fetchCoins } from '../api';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 10px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.div`
  font-weight: 600;
  padding: 20px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export default function CoinList() {
  const { data, isLoading } = useQuery({
    queryFn: fetchCoins,
    queryKey: ['allCoins'],
  });

  return (
    <>
      {isLoading ? (
        <Title>Loading...</Title>
      ) : (
        <Container>
          <Helmet>
            <title>Crypto Tracker</title>
            <link rel='icon' type='image/svg+xml' href='/coins-money.svg' sizes='16x16' />
          </Helmet>
          <Header>
            <Title>Coin List</Title>
          </Header>
          <ListTitle>Market Trend</ListTitle>
          <List>
            {data?.map((coin: ICoin) => (
              <CoinCard key={coin.id} {...coin} />
            ))}
          </List>
        </Container>
      )}
    </>
  );
}
