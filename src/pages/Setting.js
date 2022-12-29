import { useState } from 'react';
import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import SettingForm from '../components/Form/SettingForm';
import { DropdownButton } from '../components/Dropdown';
import Spinner from '../components/Spinner';

import { MdCheck, MdClose } from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux';
import { fetchSettingAccount } from '../actions/authActions';

function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
    return (
        <div className={`${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={() => { setState({ ...state, editState: true }); acceptEdit() }}>
                <MdCheck size="28px" />
            </DropdownButton>
            <DropdownButton click={() => { setState({ ...state, editState: true }); declineEdit() }}>
                <MdClose size="28px" />
            </DropdownButton>
        </div>
    );
}

function Setting() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);
    const statusReducer = useSelector(state => state.statusReducer);

    const [backupData, setBackupdata] = useState(authReducer);
    const [state, setState] = useState({
        editState: true,
    });

    function acceptEdit() {
        dispatch(fetchSettingAccount(backupData))
    }
    function declineEdit() {
        setBackupdata(authReducer);
    }

    return (
        <div>
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
                            <p className={`text-sm cursor-pointer ${state.editState ? "block" : "hidden"}`} onClick={() => setState({ ...state, editState: false })}>แก้ไขบัญชี</p>
                            <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit} />
                        </HeadContentDesktop>
                        <div>
                            <SettingForm data={backupData} setBackupdata={setBackupdata} state={state} />
                        </div>
                        {statusReducer.loading &&
                            <div className="flex justify-center text-accept mt-4">
                                    <Spinner color="accept"/><label>กำลังบันทึก</label>
                            </div>}
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default Setting;