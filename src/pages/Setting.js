import { useState } from 'react';
import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import SettingInfo from '../components/Info/SettingInfo';
import Spinner from '../components/Spinner';

import { MdCheck, MdClose } from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux';
import { fetchUpdateAccount } from '../actions/authActions';

function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
    return (
        <div className={`${state.editState ? "hidden" : "block flex"}`}>
            <div className="p-1 cursor-pointer text-accept" onClick={() => { setState({ ...state, editState: true }); acceptEdit() }}>
                <MdCheck size="28px"/>
            </div>
            <div className="p-1 cursor-pointer text-decline" onClick={() => { setState({ ...state, editState: true }); declineEdit() }}>
                <MdClose size="28px" />
            </div>
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
        dispatch(fetchUpdateAccount(backupData))
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
                            <SettingInfo data={backupData} setBackupdata={setBackupdata} state={state} />
                        </div>
                        {statusReducer.updating &&
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