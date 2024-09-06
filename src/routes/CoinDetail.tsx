import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { Link, Outlet, useMatch, useParams } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { FaCoins } from 'react-icons/fa';
import { MdCandlestickChart, MdStackedLineChart } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';
import { fetchCoinDetail } from '../api';
import { ICoinDetail } from '../types';
import Loader from '../Loader';

const Container = styled.div`
  padding: 10px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
`;

const HomeButton = styled.div`
  background-color: ${(props) => props.theme.cardHoverBgColor};
  border-radius: 50%;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const Icon = styled(IoMdHome)`
  font-size: 20px;
  color: white;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.cardHoverBgColor};
  padding: 25px;
  border-radius: 7px;
  margin: 15px 0px;
`;

interface IStackProps {
  justifyContent?: string;
  alignItems?: string;
  mb?: string;
  mt?: string;
  gap?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
}

const Badge = styled.p`
  padding: 5px 7px;
  border: 1px solid;
  border-radius: 5px;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  margin-bottom: 15px;
  font-size: 12px;
  color: ${(props) => props.theme.accentColor};
`;

const HStack = styled.div<IStackProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
  }};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
  }};
  margin-top: ${(props) => {
    if (props.mt) return props.mt;
  }};
  margin-bottom: ${(props) => {
    if (props.mb) return props.mb;
  }};
  padding-top: ${(props) => {
    if (props.pt) return props.pt;
  }};
  padding-bottom: ${(props) => {
    if (props.pb) return props.pb;
  }};
  padding-left: ${(props) => {
    if (props.pl) return props.pl;
  }};
  padding-right: ${(props) => {
    if (props.pr) return props.pr;
  }};
`;

const VStack = styled.div<IStackProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    if (props.gap) return props.gap;
  }};
  margin-top: ${(props) => {
    if (props.mt) return props.mt;
  }};
  margin-bottom: ${(props) => {
    if (props.mb) return props.mb;
  }};
`;

const CardVStack = styled(VStack)`
  gap: 5px;
  height: 100%;
  justify-content: space-between;
`;

interface ITextProps {
  fontWeight?: number;
  fontSize?: string;
  value?: number;
}

const Label = styled.p`
  font-size: 12px;
  opacity: 0.7;
`;

const Text = styled.p<ITextProps>`
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => {
    if (props.value && props.value > 0) return props.theme.priceUpColor;
    if (props.value && props.value === 0) return props.theme.textColor;
    if (props.value && props.value < 0) return props.theme.priceDownColor;
    return props.theme.textColor;
  }};
`;

const Img = styled.img`
  margin-right: 10px;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Card = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Description = styled.p`
  margin-top: 25px;
  line-height: 20px;
  font-size: 14px;
  a {
    text-decoration: underline;
  }
`;

const ChartTabs = styled(HStack)`
  justify-content: space-between;
  font-size: 20px;
`;

const TabList = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;

const Tab = styled.div<{ isactive: string }>`
  background-color: ${(props) =>
    props.isactive ? props.theme.cardHoverBgColor : props.theme.cardBgColor};
  border-radius: 5px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

export default function CoinDetail() {
  const { coinId } = useParams();
  const { data, isLoading } = useQuery<ICoinDetail>({
    queryFn: fetchCoinDetail,
    queryKey: ['coin', coinId],
  });

  const onPriceTab = useMatch('/:coinId/price');
  const onStickChartTab = useMatch('/:coinId/stick-chart');
  const onLineChartTab = useMatch('/:coinId/line-chart');

  const change = parseFloat(
    (data?.market_data.price_change_percentage_24h ?? 0).toFixed(2)
  );
  const formattedChange = change > 0 ? `+ ${change}` : `${change}`;

  return (
    <>
      {isLoading || !data ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Container>
          <Helmet>
            <title>{data?.name}</title>
            <link rel='icon' type='image/png' href={data?.image.thumb} sizes='16x16' />
          </Helmet>
          <Header>
            <Link to={'/'}>
              <HomeButton>
                <Icon />
              </HomeButton>
            </Link>
          </Header>
          <Content>
            <Badge># {data?.market_cap_rank}</Badge>
            <HStack justifyContent='space-between' mt='5px'>
              <VStack>
                <HStack alignItems='center'>
                  <Img src={data?.image.small} />
                  <Text fontWeight={600} fontSize='24px'>
                    {data?.name}
                  </Text>
                </HStack>

                <VStack gap='10px' mt='20px'>
                  <Text fontWeight={600} fontSize='20px'>
                    $ {data?.market_data.current_price.usd?.toLocaleString()}
                  </Text>
                  <Text fontWeight={600} fontSize='16px' value={change}>
                    {formattedChange}%
                  </Text>
                </VStack>
              </VStack>

              <CardList>
                <Card>
                  <CardVStack>
                    <Label>High</Label>
                    <Text>$ {data?.market_data.high_24h.usd?.toLocaleString()}</Text>
                  </CardVStack>
                  <CardVStack mt='20px'>
                    <Label>Low</Label>
                    <Text>$ {data?.market_data.low_24h.usd?.toLocaleString()}</Text>
                  </CardVStack>
                </Card>
                <Card>
                  <CardVStack>
                    <Label>Max Supply</Label>
                    <Text>{data?.market_data.max_supply?.toLocaleString()}</Text>
                  </CardVStack>
                  <CardVStack mt='20px'>
                    <Label>Total Supply</Label>
                    <Text>{data?.market_data.total_supply?.toLocaleString()}</Text>
                  </CardVStack>
                </Card>
                <Card>
                  <CardVStack>
                    <Label>Market Cap</Label>
                    <Text>{data?.market_data.market_cap.usd?.toLocaleString()}</Text>
                  </CardVStack>
                  <CardVStack mt='20px'>
                    <Label>Total Volume</Label>
                    <Text>{data?.market_data.total_volume.usd?.toLocaleString()}</Text>
                  </CardVStack>
                </Card>
              </CardList>
            </HStack>
          </Content>

          {/* price and charts */}
          <Content>
            {/* menu select */}
            <ChartTabs>
              <TabList>
                <Tab isactive={(onLineChartTab !== null).toString()}>
                  <Link to={`/${coinId}/line-chart`}>
                    <MdStackedLineChart />
                  </Link>
                </Tab>
                <Tab isactive={(onStickChartTab !== null).toString()}>
                  <Link to={`/${coinId}/stick-chart`}>
                    <MdCandlestickChart />
                  </Link>
                </Tab>
                <Tab isactive={(onPriceTab !== null).toString()}>
                  <Link to={`/${coinId}/price`}>
                    <FaCoins />
                  </Link>
                </Tab>
              </TabList>
            </ChartTabs>
            <Outlet />
          </Content>

          {/* description */}
          <Content>
            <Text fontWeight={600} fontSize='20px'>
              About {data?.name}
            </Text>
            <Description
              dangerouslySetInnerHTML={{
                __html: data?.description.en ?? 'Description not available.',
              }}
            />
          </Content>
        </Container>
      )}
    </>
  );
}
