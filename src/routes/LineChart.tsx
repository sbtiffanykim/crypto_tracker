import { useParams } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { IPriceData, IPriceInfo } from '../types';
import { fetchCoinHistory } from '../api';
import { isDarkAtom } from '../atoms';

export default function Chart() {
  const { coinId } = useParams();
  const { data, isLoading } = useQuery<IPriceData>({
    queryFn: fetchCoinHistory,
    queryKey: ['coinPrice', coinId],
  });

  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: 'Price',
              data:
                data?.map((price: IPriceInfo) => ({
                  x: new Date(price[0]),
                  y: price[4],
                })) || [],
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
            stroke: {
              curve: 'smooth',
              width: 3,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              type: 'datetime',
              categories: data?.map((value) => new Date(value[0]).toUTCString()),
              labels: {
                datetimeFormatter: {
                  day: 'dd MMM',
                  month: "MMM 'yy",
                },
              },
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
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
