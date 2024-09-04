import { useParams } from 'react-router-dom';

export default function CoinDetail() {
  const { coinId } = useParams();

  return (
    <>
      <h1>{coinId}</h1>
    </>
  );
}
