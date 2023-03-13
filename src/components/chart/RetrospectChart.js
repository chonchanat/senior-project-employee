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
            text: 'แสดงผลจำนวนลูกค้าย้อนหลังรายเดือน',
        },
    },
};

export default function RetrospectChart({ datasets }) {

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels,
        datasets: [
            {
                label: 'จำนวนลูกค้า',
                data: [datasets.jan, datasets.feb, datasets.mar, datasets.apr, datasets.may, datasets.jun, datasets.jul, datasets.aug, datasets.sep, datasets.oct, datasets.nov, datasets.dec],
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                animations: {
                    tension: {
                        easing: 'linear',
                        to: 0.4,
                    }
                },
            },
        ],
    };
    return (
        <div className="w-[500px]">
            <Line options={options} data={data} />
        </div>
    );
}
