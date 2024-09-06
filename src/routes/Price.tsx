import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IPriceData, IPriceInfo } from '../types';
import { fetchCoinHistory } from '../api';
import Loader from '../Loader';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin: 5px 0;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
`;

const Label = styled.p`
  font-size: 13px;
  opacity: 0.7;
`;

interface ITextProps {
  fontWeight?: number;
  fontSize?: string;
  value?: number;
}
const Text = styled.p<ITextProps>`
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => {
    if (props.value && props.value > 0) return props.theme.priceUpColor;
    if (props.value && props.value < 0) return props.theme.priceDownColor;
    return props.theme.textColor;
  }};
  padding: 5px 3px;
  align-self: center;
`;

const formatDate = (date: Date) => {
  const day = date.getUTCDate();
  const month = date.toLocaleString('en-GB', { month: 'short' });
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
  return formattedDate;
};

export default function Price() {
  const { coinId } = useParams();
  const { data: priceData, isLoading } = useQuery<IPriceData>({
    queryFn: fetchCoinHistory,
    queryKey: ['coinPrice', coinId],
  });
  const LoaderContainer = styled.div`
    height: 400;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
  `;

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ItemList>
          <Title>
            <Label>Date</Label>
            <Label>Open</Label>
            <Label>High</Label>
            <Label>Low</Label>
            <Label>Close</Label>
          </Title>
          {priceData?.map((data: IPriceInfo, index: number) => {
            const date = new Date(data?.[0]);
            return (
              <Item key={index}>
                <Text>{formatDate(date)}</Text>
                <Text>$ {data?.[1]}</Text>
                <Text>$ {data?.[2]}</Text>
                <Text>$ {data?.[3]}</Text>
                <Text>$ {data?.[4]}</Text>
              </Item>
            );
          })}
        </ItemList>
      )}
    </>
  );
}
