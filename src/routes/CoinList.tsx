import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

export default function CoinList() {
  return (
    <>
      <Title>coinlist</Title>
    </>
  );
}
