import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  text-align: center;
`;

const LoadingImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
`;

export default function Loader() {
  return (
    <LoadingContainer>
      <LoadingImage src='public/coins-money.svg' alt='Loading' />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
}
