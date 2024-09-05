import styled from 'styled-components';
import CoinCard, { ICoin } from '../components/CoinCard';
import { useQuery } from '@tanstack/react-query';
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
