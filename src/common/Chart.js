import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Quantity by categories',
              align: 'start',
              font: {
                size: 24,
              },
            },
            autocolors: {
              enabled: false,
            },
          },
          legend: {
            display: true,
            position: 'right',
          },
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
            x: {},
          },
        }}
      />
    </>
  );
};
