import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';

function InfoStaff() {
    return (
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ระบบบัญชีพนักงาน</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    // onClick={() => setState(false)}
                                >รายชื่อพนักงาน</p>
                                {/* <p className={`${state ? "block" : "hidden"} font-normal`}>/ สร้างบัญชีพนักงาน</p> */}
                            </div>
                        </HeadContentDesktop>
                        <div>

                        </div>
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default InfoStaff;