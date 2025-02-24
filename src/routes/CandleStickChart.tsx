import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { fetchCoinHistory } from '../api';
import { IPriceData, IPriceInfo } from '../types';
import { isDarkAtom } from '../atoms';
import Loader from '../Loader';

export default function CandleStickChart() {
  const { coinId } = useParams();
  const { data: priceData, isLoading } = useQuery<IPriceData>({
    queryFn: fetchCoinHistory,
    queryKey: ['coinPrice', coinId],
  });

  const seriesData = Array.isArray(priceData)
    ? priceData.map((value: IPriceInfo) => ({
        x: new Date(value[0]),
        y: [value[1], value[2], value[3], value[4]],
      }))
    : [];

  const isDark = useRecoilValue(isDarkAtom);
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
        <ApexChart
          type='candlestick'
          series={[
            {
              data: seriesData,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 300,
              width: 300,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: {
              show: false,
            },
            xaxis: {
              type: 'datetime',
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value}`,
              },
            },
          }}
        />
      )}
    </>
  );
}
