import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { General } from '../components/Dashboard/General';
function Dashboard() {
    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <General />
                    <p className="flex-1 flex items-end justify-end">แสดงข้อมูลวันที่ : </p>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Dashboard;