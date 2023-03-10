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

const labels = ['RollerCoaster', 'Tornado', 'RideCamel', 'Vikings', 'FeedCabybara'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [99, 77, 66, 44, 22],
            backgroundColor: 'rgba(244, 211, 94, 0.5)',
            borderWidth: 2,
            borderColor: 'rgba(244, 211, 94,1)'
        },
    ],
};

export default function PopActivityChart() {
    return (
        <div className="w-[500px]">
            <Bar options={options} data={data} />
        </div>
    );
}
