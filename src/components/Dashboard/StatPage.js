import { useEffect, useState } from "react";

import CustomerDayChart from "../chart/CustomerDayChart";
import PieChart from "../chart/PieChart";
import SamplePieDonutChart from "../chart/PieDonutChart";
import RetrospectChart from "../chart/RetrospectChart";

function StatPage() {

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
            // const day = await getCustomerDay(fromDate, toDate);
            // const year = await getCustomerYear(toDate);
            // const group = await getCustomerGroup();
            // setDatasets({ ...datasets, customerDay: day, customerYear: year, customerGroup: group });
        }
        getCustomerDayChart();
    }, [toDate])

    return (
        <div className="pt-2 flex-1 flex flex-col">
            <p>สถิติทั่วไป</p>
            <div className="flex justify-around items-center my-6">
                {datasets.customerDay && <CustomerDayChart />}
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