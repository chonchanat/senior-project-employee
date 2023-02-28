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
            text: 'แสดงผลกิจกรรมยอดนิยม',
        },
    },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [12, 35, 12, 84, 64],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export default function PopActivityChart() {
    return (
        <div className="h-[300px] w-[500px]">
            <Bar options={options} data={data} />
        </div>
    );
}
