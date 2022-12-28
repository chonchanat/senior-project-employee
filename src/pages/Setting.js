import { useState } from 'react';
import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import { StaticNavbar } from '../components/Navbar';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import SettingForm from '../components/Form/SettingForm';
import { DropdownButton } from '../components/Dropdown';

import StaffData from '../fakeData/StaffData';

import { MdCheck, MdClose } from 'react-icons/md'


function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
    return (
        <div className={`${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={() => {setState({ ...state, editState: true }); acceptEdit()}}>
                <MdCheck size="28px" />
            </DropdownButton>
            <DropdownButton click={() => {setState({ ...state, editState: true }); declineEdit()}}>
                <MdClose size="28px" />
            </DropdownButton>
        </div>
    );
}

function Setting() {

    const [data, setData] = useState(StaffData[0]);
    const [backupData, setBackupdata] = useState(data);
    const [state, setState] = useState({
        editState: true,
    });

    function acceptEdit() {
        setBackupdata(data);
    }
    function declineEdit() {
        setData(backupData);
    }

    return (
        <div>
            <StaticNavbar />
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ตั้งค่าบัญชี</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <p className="py-2">ตั้งค่าบัญชี</p>
                            <p className={`text-sm cursor-pointer ${state.editState? "block": "hidden"}`} onClick={() => setState({ ...state, editState: false})}>แก้ไขบัญชี</p>
                            <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit}/>
                        </HeadContentDesktop>
                        <div>
                            <SettingForm data={data} setData={setData} state={state} />
                        </div>
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default Setting;