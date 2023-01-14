import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';

function Template() {
    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กิจกรรมทั้งหมด</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <p>รายชื่อกิจกรรม</p>
                    </HeadContentDesktop>
                    <div>

                    </div>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Template;