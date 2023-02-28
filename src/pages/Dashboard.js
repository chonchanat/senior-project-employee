import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { GeneralDashboard } from '../components/Dashboard/GeneralDashboard';

import PieChart from '../components/chart/PieChart';
import CustomerDayChart from '../components/chart/CustomerDayChart';
import PopActivityChart from '../components/chart/PopActivityChart';
import RetrospectChart from '../components/chart/RetrospectChart';

function Dashboard() {

    const date = new Date();

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <GeneralDashboard />
                    <div className="flex-1 overflow-x-hidden">
                        <div className="flex justify-around items-center my-6">
                            <CustomerDayChart />
                            <PieChart />
                        </div>
                        <div className="flex justify-around items-center">
                            <PopActivityChart />
                            <RetrospectChart />
                        </div>
                    </div>
                    <p className="text-end">แสดงข้อมูลวันที่ : {date.toLocaleString()}</p>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Dashboard;