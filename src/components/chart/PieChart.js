import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'แสดงผลจำนวนกลุ่มลูกค้า',
    },
  },
};

export default function PieChart({ datasets }) {
  const labelsArr = [];
  const valueArr = [];
  const backgroundColorArr = [
    'rgba(255, 99, 132, 0.4)',
    'rgba(54, 162, 235, 0.4)',
    'rgba(255, 206, 86, 0.4)',
    'rgba(160, 180, 255, 0.4)',
    'rgba(75, 192, 192, 0.4)',
    'rgba(255, 204, 229,0.4)'
  ];
  const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(160, 180, 255, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 204, 229, 1)'
  ];

  for (let i = 0; i < datasets.length; i++) {
    labelsArr.push(String(datasets[i].member));
    valueArr.push(datasets[i].count);
  }

  const data = {
    labels: labelsArr,
    datasets: [
      {
        label: '# of Votes',
        data: valueArr,
        backgroundColor: backgroundColorArr.slice(0, datasets.length),
        borderColor: borderColor.slice(0, datasets.length),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-[250px] w-[500px] flex justify-center">
      <Pie data={data} options={options} />
    </div>
  );
}