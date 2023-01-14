import { useState } from 'react';
import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import SettingInfo from '../components/Info/SettingInfo';
import PasswordForm from '../components/Form/PasswordForm';

import { MdCheck, MdClose } from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux';
import { fetchUpdateAccount } from '../actions/authActions';

function Setting() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    const [backupData, setBackupdata] = useState(authReducer);
    const [state, setState] = useState({
        editState: true,
        pageState: "account",
    });

    function acceptEdit() {
        dispatch(fetchUpdateAccount(backupData))
    }
    function declineEdit() {
        setBackupdata(authReducer);
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ตั้งค่าบัญชี</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex">
                            <p className={`items-center flex p-2 mr-2 rounded-lg cursor-pointer ${state.pageState === "account" && "bg-yellow"}`}
                                onClick={() => setState({ ...state, pageState: "account" })} >
                                <input type="checkbox" className="w-4 h-4 text-fha mr-2"
                                    checked={state.pageState === "account"} />แก้ไขบัญชี
                            </p>
                            <p className={`items-center flex p-2 mr-2 rounded-lg cursor-pointer ${state.pageState === "password" && "bg-yellow"}`}
                                onClick={() => setState({ ...state, pageState: "password", editState: true })} >
                                <input type="checkbox" className="w-4 h-4 text-fha mr-2"
                                    checked={state.pageState === "password"} />เปลี่ยนรหัสผ่าน
                            </p>
                        </div>
                        {state.pageState === "account" && <p className={`text-sm cursor-pointer ${state.editState ? "block" : "hidden"}`} onClick={() => setState({ ...state, editState: false })}>แก้ไขบัญชี</p>}
                        <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit} />
                    </HeadContentDesktop>

                    {state.pageState === "account" ?
                        <SettingInfo data={backupData} setBackupdata={setBackupdata} state={state} />
                        :
                        <PasswordForm></PasswordForm>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
    return (
        <div className={`${state.editState ? "hidden" : "block flex"}`}>
            <div className="p-1 cursor-pointer text-accept" onClick={() => { setState({ ...state, editState: true }); acceptEdit() }}>
                <MdCheck size="28px" />
            </div>
            <div className="p-1 cursor-pointer text-decline" onClick={() => { setState({ ...state, editState: true }); declineEdit() }}>
                <MdClose size="28px" />
            </div>
        </div>
    );
}
export default Setting;