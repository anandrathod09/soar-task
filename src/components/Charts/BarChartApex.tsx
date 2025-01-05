import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import CardLayoutDefault from '../Cards/CardLayoutDefault';

const BarChartApex: React.FC = () => {
  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    series: [
      { name: 'Deposit', data: [300, 400, 500, 700, 600, 800, 700] },
      { name: 'Withdraw', data: [200, 300, 400, 500, 400, 600, 500] },
    ],
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    colors: ['#0040FF', '#000000'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
  };

  return (
    <CardLayoutDefault>
      <ReactApexChart
        options={barChartOptions}
        series={barChartOptions.series}
        type="bar"
        height={250}
      />
    </CardLayoutDefault>
  );
};

export default BarChartApex;
