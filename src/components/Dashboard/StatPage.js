import { useEffect, useState } from "react";

import CustomerDayChart from "../chart/CustomerDayChart";
import PieChart from "../chart/PieChart";
import SamplePieDonutChart from "../chart/PieDonutChart";
import RetrospectChart from "../chart/RetrospectChart";

import { getActivityDay, getActivityYear, getActivityGroup, getActivityRatio } from "../../api/chartAPI";

function StatPage({ data }) {

    const formattedDate = new Date(new Date()).toISOString().slice(0, 10);
    const [fromDate, setFromDate] = useState("2023-03-01");
    const [toDate, setToDate] = useState(formattedDate);
    const [datasets, setDatasets] = useState({
        activityDay: null,
        activityYear: null,
        activityGroup: null,
        activityRatio: null,
    });

    useEffect(() => {
        async function getCustomerDayChart() {
            const day = await getActivityDay(fromDate, toDate, data.code);
            const year = await getActivityYear(toDate, data.code);
            const group = await getActivityGroup(data.code);
            const ratio = await getActivityRatio(data.code);
            setDatasets({ ...datasets, activityDay: day, activityYear: year, activityGroup: group, activityRatio: ratio });
        }
        getCustomerDayChart();
    }, [fromDate, toDate, data.code])

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
                {datasets.activityDay && <CustomerDayChart datasets={datasets.activityDay} />}
                {datasets.activityGroup && <PieChart datasets={datasets.activityGroup}/>}
            </div>
            <div className="flex justify-around items-center">
                {datasets.activityYear && <RetrospectChart datasets={datasets.activityYear} />}
                {datasets.activityRatio && <SamplePieDonutChart datasets={datasets.activityRatio} />}
            </div>
        </div>
    );
}

export default StatPage;