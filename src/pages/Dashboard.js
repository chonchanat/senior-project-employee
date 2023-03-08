import { useEffect, useState } from 'react';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { GeneralDashboard } from '../components/Dashboard/GeneralDashboard';

import PieChart from '../components/chart/PieChart';
import CustomerDayChart from '../components/chart/CustomerDayChart';
import PopActivityChart from '../components/chart/PopActivityChart';
import RetrospectChart from '../components/chart/RetrospectChart';

import { getCustomerDay, getCustomerYear } from '../api/chartAPI';

function Dashboard() {

    // const date = new Date();

    const [fromDate, setFromDate] = useState("2023-03-02");
    const [toDate, setToDate] = useState("2023-03-09");
    const [datasets, setDatasets] = useState({
        customerDay: null,
        customerYear: null,
    });

    function changeIso(e, func) {
        const date = e.target.value;
        func(date);
    }

    useEffect(() => {
        async function getCustomerDayChart() {
            const day = await getCustomerDay(fromDate, toDate);
            const year = await getCustomerYear(toDate);
            setDatasets({...datasets, customerDay: day, customerYear: year});
        }
        getCustomerDayChart();
    }, [toDate])


    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <GeneralDashboard />
                    <div className="flex items-center my-4">
                        <input className="border-1 border px-2 rounded-md" type="date" value={fromDate} onChange={(e) => changeIso(e, setFromDate)} />
                        <p className="mx-2">to</p>
                        <input className="border-1 border px-2 rounded-md" type="date" value={toDate} onChange={(e) => changeIso(e, setToDate)} />
                    </div>
                    <div className="flex-1 overflow-x-hidden">
                        <div className="flex justify-around items-center mb-4">
                            {datasets.customerDay && <CustomerDayChart datasets={datasets.customerDay} />}
                            <PieChart />
                        </div>
                        <div className="flex justify-around items-center">
                            <PopActivityChart />
                            <RetrospectChart />
                        </div>
                    </div>
                    {/* <p className="text-end">แสดงข้อมูลวันที่ : {date.toLocaleString()}</p> */}
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Dashboard;