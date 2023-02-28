import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'แสดงผลจำนวนลูกค้าในแต่ละวันของสัปดาห์',
    },
  },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,35,12,84,64,52,40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function CustomerDayChart() {
return (
    <div className="h-[250px] w-[500px]">
        <Bar options={options} data={data} />
    </div>
);
}
