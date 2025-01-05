import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import CardLayoutDefault from '../Cards/CardLayoutDefault';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  seriesData: number[];
  categories: string[];
}

const LineChart: React.FC<LineChartProps> = ({
  seriesData,
  categories,
}) => {
  // Chart.js data configuration
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Balance',
        data: seriesData,
        borderColor: '#0040FF',
        backgroundColor: 'rgba(0, 64, 255, 0.1)',
        fill: true, // Gradient fill
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.raw} USD`; // Customize tooltips
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (USD)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <CardLayoutDefault className='flex items-center justify-center' height="80%">
      <Line data={data} options={options} height='100%' width='220px' />
    </CardLayoutDefault>
  );
};

export default LineChart;
