import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { GeneralDashboard } from '../components/Dashboard/GeneralDashboard';
function Dashboard() {
    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <GeneralDashboard />
                    <p className="flex-1 flex items-end justify-end">แสดงข้อมูลวันที่ : </p>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Dashboard;