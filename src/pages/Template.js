import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import { StaticNavbar } from '../components/Navbar'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';

function Template() {
    return (
        <div>
            <StaticNavbar />
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>กิจกรรมทั้งหมด</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <p>รายชื่อกิจกรรม</p>
                        </HeadContentDesktop>
                        <div>

                        </div>
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default Template;