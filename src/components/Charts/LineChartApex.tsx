import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import CardLayoutDefault from '../Cards/CardLayoutDefault';

interface LineChartProps {
  height?: number;
  seriesData: number[];
  categories: string[];
}

const LineChartApex: React.FC<LineChartProps> = ({
  height = 250,
  seriesData,
  categories,
}) => {
  const lineChartOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Balance',
        data: seriesData, // Monthly data
      },
    ],
    xaxis: {
      categories: categories,
    },
    colors: ['#0040FF'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        gradientToColors: ['#ADD8E6'],
        stops: [0, 100],
      },
    },
  };

  return (
    <CardLayoutDefault>
      <ApexCharts
        options={lineChartOptions}
        series={lineChartOptions.series}
        type="line"
        height={height}
      />
    </CardLayoutDefault>
  );
};

export default LineChartApex;
