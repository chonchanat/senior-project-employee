import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'แสดงผลสัดส่วนจำนวนคิวกิจกรรมต่อทั้งหมด',
        },
    },
};

export default function PieDonutChart({ datasets }) {
    const data = {
        labels: ['Rest', 'Activity'],
        datasets: [
            {
                label: '# of Votes',
                data: [datasets.all - datasets.one, datasets.one],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="h-[250px] w-[500px] flex justify-center">
            <Doughnut data={data} options={options} />
        </div>
    );
}
