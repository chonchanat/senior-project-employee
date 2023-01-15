import { useParams } from 'react-router-dom';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

function StaffAccountInfoPage() {

    const { id } = useParams();
    console.log('asd;kjdkfhaerfvk')

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ระบบบัญชีพนักงาน</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <p>รายชื่อพนักงาน</p>
                    </HeadContentDesktop>
                    <div>

                    </div>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffAccountInfoPage;