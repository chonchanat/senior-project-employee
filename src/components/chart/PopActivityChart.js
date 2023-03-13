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
            text: 'แสดงผลกิจกรรมยอดนิยม (รวมเล่นซ้ำ)',
        },
    },
};

export default function PopActivityChart({ datasets }) {

    const valueArr = [];
    const labelsArr = [];

    for (let i = 0; i < datasets.length; i++) {
        labelsArr.push(String(datasets[i].name[1]));
        valueArr.push(datasets[i].count);
      }

    const data = {
        labels: labelsArr,
        datasets: [
            {
                label: 'จำนวนลูกค้า',
                data: valueArr,
                backgroundColor: 'rgba(244, 211, 94, 0.5)',
                borderWidth: 2,
                borderColor: 'rgba(244, 211, 94,1)'
            },
        ],
    };

    return (
        <div className="w-[500px]">
            <Bar options={options} data={data} />
        </div>
    );
}
