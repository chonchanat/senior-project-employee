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

export const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CustomerDayChart({ datasets }) {

    const data = {
        labels,
        datasets: [
            {
                label: 'จำนวนลูกค้า',
                data: [datasets.sun, datasets.mon, datasets.tue, datasets.wed, datasets.thu, datasets.fri, datasets.sat],
                backgroundColor: [
                    'rgba(255, 80, 80, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 130, 200, 0.5)',
                    'rgba(75, 192, 192, 0.5)', // green
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(150, 200, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 80, 80, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 130, 200, 1)',
                    'rgba(75, 192, 192, 1)', // green
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(150, 200, 255, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        data &&
        <div className="h-[250px] w-[500px]">
            <Bar options={options} data={data} />
        </div>
    );
}
