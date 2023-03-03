import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'แสดงผลจำนวนลูกค้าย้อนหลัง 15 วัน',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [3510,4320,4521,2100,2354,8456,6541],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      animations: {
        tension: {
          easing: 'linear',
          to: 0.3,
        }
      },
    },
  ],
};

export default function RetrospectChart() {
  return (
    <div className="h-[300px] w-[500px]">
        <Line options={options} data={data} />
    </div>
  );
}
