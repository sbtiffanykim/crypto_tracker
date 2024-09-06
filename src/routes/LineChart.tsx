import { useParams } from 'react-router-dom';
import ApexChart from 'react-apexcharts';

const data = [
  [1724400000000, 60603.0, 61248.0, 60600.0, 61093.0],
  [1724414400000, 61055.0, 61329.0, 60723.0, 60724.0],
  [1724428800000, 60740.0, 62123.0, 60740.0, 61519.0],
  [1724443200000, 61462.0, 63799.0, 61462.0, 63676.0],
  [1724457600000, 63624.0, 64828.0, 63593.0, 64050.0],
  [1724472000000, 64099.0, 64162.0, 63668.0, 63890.0],
  [1724486400000, 63895.0, 64338.0, 63895.0, 64311.0],
  [1724500800000, 64263.0, 64438.0, 64006.0, 64036.0],
  [1724515200000, 63957.0, 64260.0, 63936.0, 63936.0],
  [1724529600000, 64007.0, 64432.0, 63978.0, 64261.0],
  [1724544000000, 64227.0, 64328.0, 63651.0, 64157.0],
  [1724558400000, 64187.0, 64411.0, 64029.0, 64056.0],
  [1724572800000, 64144.0, 64226.0, 63836.0, 63926.0],
  [1724587200000, 63890.0, 64029.0, 63834.0, 63957.0],
  [1724601600000, 63903.0, 64283.0, 63854.0, 64142.0],
  [1724616000000, 64161.0, 64261.0, 64049.0, 64222.0],
  [1724630400000, 64214.0, 64894.0, 64165.0, 64266.0],
  [1724644800000, 64286.0, 64422.0, 63920.0, 64103.0],
  [1724659200000, 64191.0, 64203.0, 63608.0, 63653.0],
  [1724673600000, 63618.0, 64000.0, 63610.0, 63932.0],
  [1724688000000, 63872.0, 63934.0, 63165.0, 63607.0],
  [1724702400000, 63535.0, 63809.0, 63244.0, 63356.0],
  [1724716800000, 63295.0, 63547.0, 62883.0, 62923.0],
  [1724731200000, 62872.0, 63202.0, 62693.0, 62982.0],
  [1724745600000, 62983.0, 63187.0, 62737.0, 62884.0],
  [1724760000000, 62916.0, 62964.0, 62287.0, 62441.0],
  [1724774400000, 62407.0, 62460.0, 61475.0, 61652.0],
  [1724788800000, 61675.0, 62202.0, 61524.0, 61946.0],
  [1724803200000, 62041.0, 62041.0, 58060.0, 59527.0],
  [1724817600000, 59404.0, 59594.0, 58904.0, 59560.0],
  [1724832000000, 59631.0, 59631.0, 58660.0, 58660.0],
  [1724846400000, 58620.0, 60230.0, 58620.0, 60039.0],
  [1724860800000, 59917.0, 60144.0, 58545.0, 58970.0],
  [1724875200000, 59029.0, 59834.0, 57968.0, 59273.0],
  [1724889600000, 58832.0, 59443.0, 58787.0, 59015.0],
  [1724904000000, 59042.0, 59306.0, 58928.0, 59153.0],
  [1724918400000, 59160.0, 59712.0, 59101.0, 59649.0],
  [1724932800000, 59581.0, 60529.0, 59369.0, 60251.0],
  [1724947200000, 60076.0, 61150.0, 60076.0, 60781.0],
  [1724961600000, 60866.0, 60966.0, 59008.0, 59176.0],
  [1724976000000, 59266.0, 59665.0, 58816.0, 59352.0],
  [1724990400000, 59374.0, 59453.0, 58922.0, 59089.0],
  [1725004800000, 59030.0, 59574.0, 58732.0, 59268.0],
  [1725019200000, 59270.0, 59656.0, 59270.0, 59429.0],
  [1725033600000, 59427.0, 59820.0, 58087.0, 58225.0],
  [1725048000000, 58044.0, 59352.0, 57905.0, 58822.0],
  [1725062400000, 58797.0, 59259.0, 58797.0, 59156.0],
  [1725076800000, 59110.0, 59404.0, 59110.0, 59245.0],
  [1725091200000, 59229.0, 59335.0, 59071.0, 59106.0],
  [1725105600000, 59107.0, 59160.0, 58838.0, 59132.0],
  [1725120000000, 59112.0, 59230.0, 58921.0, 58983.0],
  [1725134400000, 59018.0, 59118.0, 58840.0, 58848.0],
  [1725148800000, 58858.0, 59130.0, 58797.0, 58960.0],
  [1725163200000, 58957.0, 59038.0, 58309.0, 58483.0],
  [1725177600000, 58512.0, 58594.0, 57828.0, 58397.0],
  [1725192000000, 58455.0, 58455.0, 57892.0, 58058.0],
  [1725206400000, 58271.0, 58357.0, 57674.0, 58191.0],
  [1725220800000, 58178.0, 58698.0, 57908.0, 58471.0],
  [1725235200000, 58575.0, 58608.0, 57258.0, 57358.0],
  [1725249600000, 57298.0, 57691.0, 57276.0, 57676.0],
  [1725264000000, 57737.0, 57927.0, 57411.0, 57491.0],
  [1725278400000, 57529.0, 58647.0, 57529.0, 58403.0],
  [1725292800000, 58395.0, 58752.0, 58134.0, 58591.0],
  [1725307200000, 58551.0, 58636.0, 58305.0, 58435.0],
  [1725321600000, 58459.0, 59337.0, 58394.0, 59109.0],
  [1725336000000, 59120.0, 59813.0, 59099.0, 59101.0],
  [1725350400000, 59117.0, 59263.0, 58889.0, 59098.0],
  [1725364800000, 59127.0, 59189.0, 58736.0, 59068.0],
  [1725379200000, 59058.0, 59295.0, 57555.0, 57760.0],
  [1725393600000, 57727.0, 58167.0, 57599.0, 58009.0],
  [1725408000000, 58081.0, 58209.0, 57505.0, 57505.0],
  [1725422400000, 57519.0, 57901.0, 55747.0, 56688.0],
  [1725436800000, 56625.0, 56874.0, 56204.0, 56730.0],
  [1725451200000, 56745.0, 56829.0, 56446.0, 56576.0],
  [1725465600000, 56570.0, 58120.0, 56354.0, 58120.0],
  [1725480000000, 58156.0, 58514.0, 57672.0, 57936.0],
  [1725494400000, 58050.0, 58388.0, 57905.0, 57988.0],
  [1725508800000, 57978.0, 58272.0, 57036.0, 57081.0],
  [1725523200000, 57104.0, 57250.0, 56495.0, 57155.0],
  [1725537600000, 57142.0, 57220.0, 56661.0, 56749.0],
  [1725552000000, 56714.0, 57241.0, 55848.0, 56125.0],
  [1725566400000, 55978.0, 56664.0, 55862.0, 55963.0],
  [1725580800000, 56109.0, 56225.0, 55791.0, 56132.0],
  [1725595200000, 56164.0, 56808.0, 55967.0, 56520.0],
];

// [timestamp, open, high, low, close]
type IPriceData = number[][];

export default function Chart() {
  const { coinId } = useParams();
  return (
    <ApexChart
      type='line'
      series={[
        {
          name: 'Price',
          data: data?.map((price) => price[4]),
        },
      ]}
      options={{
        theme: {
          mode: 'dark',
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
          wdith: 2,
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
          gradient: { gradientToColors: ['#0be881'], stop: [0, 100] },
        },
        colors: ['#0fbcf9'],
        tooltip: {
          y: {
            formatter: (value) => `$ ${value}`,
          },
        },
      }}
    ></ApexChart>
  );

  // {isLoading ? 'loading Chart...' : 'herehere'}
}
