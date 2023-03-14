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
            text: 'แสดงผลสัดส่วนจำนวนคิวกิจกรรมต่อทั้งหมด (%)',
        },
    },
};

export default function PieDonutChart({ datasets }) {

    const labelsArr = [];
    const valueArr = [];
    if (datasets.all === 0) {
        labelsArr.push("ไม่มีข้อมูล");
        valueArr.push(1);
    } else {
        const restPercent = (datasets.all - datasets.one) / datasets.all * 100;
        const onePercent = datasets.one / datasets.all * 100;
        labelsArr.push("คิวกิจกรรมนี้");
        labelsArr.push("คิวที่เหลือ");
        valueArr.push(onePercent);
        valueArr.push(restPercent);
    }

    const data = {
        labels: labelsArr,
        datasets: [
            {
                label: 'เปอร์เซ็นต์',
                data: valueArr,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
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
