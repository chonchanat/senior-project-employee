import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { GeneralDashboard, ActivityCard } from '../components/Dashboard/GeneralDashboard';
import { SampleColumnChart, ActivityColumnChart } from '../components/chart/ColumnChart';
import SamplePieChart from '../components/chart/PieChart';

function Dashboard() {
    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <GeneralDashboard />
                    <div className="flex justify-around my-8">
                        <SampleColumnChart />
                        <SamplePieChart />
                    </div>
                    <div className="flex justify-around items-center">
                        <ActivityCard />
                        <ActivityColumnChart />
                    </div>
                    <p className="flex-1 flex items-end justify-end">แสดงข้อมูลวันที่ : </p>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Dashboard;