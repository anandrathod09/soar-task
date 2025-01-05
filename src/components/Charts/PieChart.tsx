import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import CardLayoutDefault from '../Cards/CardLayoutDefault';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartProps {
  data: any;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const total = tooltipItem.chart.data.datasets[0].data.reduce(
              (acc: number, curr: number) => acc + curr,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <CardLayoutDefault className='flex items-center justify-center' height="88%">
      <Pie data={data} options={options} height={250} />
    </CardLayoutDefault>
  );
};

export default PieChart;
