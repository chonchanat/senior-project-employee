import { useEffect, useState } from "react";

import CustomerDayChart from "../chart/CustomerDayChart";
import PieChart from "../chart/PieChart";
import SamplePieDonutChart from "../chart/PieDonutChart";
import RetrospectChart from "../chart/RetrospectChart";

import { getActivityDay } from "../../api/chartAPI";

function StatPage({ data }) {

    const formattedDate = new Date(new Date()).toISOString().slice(0, 10);
    const [fromDate, setFromDate] = useState("2023-03-01");
    const [toDate, setToDate] = useState(formattedDate);
    const [datasets, setDatasets] = useState({
        customerDay: null,
        customerYear: null,
        customerGroup: null,
    });

    useEffect(() => {
        async function getCustomerDayChart() {
            const day = await getActivityDay(fromDate, toDate, data.code);
            // const year = await getCustomerYear(toDate);
            // const group = await getCustomerGroup();
            // setDatasets({ ...datasets, customerDay: day, customerYear: year, customerGroup: group });
            setDatasets({ ...datasets, customerDay: day });
        }
        getCustomerDayChart();
    }, [toDate])

    function changeIso(e, func) {
        const date = e.target.value;
        func(date);
    }

    return (
        <div className="pt-2 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input className="border-1 border px-2 rounded-md" type="date" value={fromDate} onChange={(e) => changeIso(e, setFromDate)} />
                    <p className="mx-2">to</p>
                    <input className="border-1 border px-2 rounded-md" type="date" value={toDate} onChange={(e) => changeIso(e, setToDate)} />
                </div>
                <p>แสดงข้อมูลวันที่ : {formattedDate}</p>
            </div>
            <div className="flex justify-around items-center my-6">
                {datasets.customerDay && <CustomerDayChart datasets={datasets.customerDay} />}
                {datasets.customerGroup && <PieChart />}
            </div>
            <div className="flex justify-around items-center">
                {datasets.customerYear && <RetrospectChart />}
                <SamplePieDonutChart />
            </div>
        </div>
    );
}

export default StatPage;