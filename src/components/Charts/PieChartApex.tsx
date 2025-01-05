import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import CardLayoutDefault from '../Cards/CardLayoutDefault';

const PieChartApex: React.FC = () => {
  const pieChartOptions: ApexOptions = {
    chart: {
      type: 'pie',
    },
    series: [35, 30, 20, 15], // Others, Entertainment, Investment, Bill Expense
    labels: ['Others', 'Entertainment', 'Investment', 'Bill Expense'],
    colors: ['#000000', '#0040FF', '#FF8000', '#FFD700'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      markers: {
        radius: 12, // Circular legend markers
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        // Explicitly cast 'val' to number
        return `${(val as number).toFixed(1)}%`; // Show percentage with 1 decimal place
      },
    },
  };

  return (
    <CardLayoutDefault>
      <ReactApexChart
        options={pieChartOptions}
        series={pieChartOptions.series}
        type="pie"
        height={250}
      />
    </CardLayoutDefault>
  );
};

export default PieChartApex;
