import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpdateAccount } from '../actions/authActions';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import SettingInfo from '../components/Info/SettingInfo';
import PasswordForm from '../components/Form/PasswordForm';
import { HandlerEdit } from '../components/Etc/ActivityInfoPage';

import { updateUser } from '../api/userAPI';

function Setting() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    const [backupData, setBackupdata] = useState(authReducer);
    const [state, setState] = useState({
        editState: false,
        pageState: "account",
    });

    function acceptEdit() {
        setState({ ...state, editState: false })
        if (authReducer !== backupData) {
            dispatch(fetchUpdateAccount(backupData));
        }

        // check password problem
        updateUser(backupData)
    }
    function declineEdit() {
        setState({ ...state, editState: false })
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
                                <input type="checkbox" className="w-4 h-4 text-fha mr-2" readOnly
                                    checked={state.pageState === "account"} />แก้ไขบัญชี
                            </p>
                            <p className={`items-center flex p-2 mr-2 rounded-lg cursor-pointer ${state.pageState === "password" && "bg-yellow"}`}
                                onClick={() => setState({ ...state, pageState: "password", editState: false })} >
                                <input type="checkbox" className="w-4 h-4 text-fha mr-2" readOnly
                                    checked={state.pageState === "password"} />เปลี่ยนรหัสผ่าน
                            </p>
                        </div>
                    </HeadContentDesktop>

                    <div className="relative">
                        {state.editState ?
                            <HandlerEdit acceptEdit={acceptEdit} declineEdit={declineEdit} />
                            :
                            <p className={`absolute right-0 top-[-60px] text-sm cursor-pointer ${state.pageState === "password" && "hidden"}`} onClick={() => setState({ ...state, editState: true })}>แก้ไขบัญชี</p>
                        }
                        {state.pageState === "account" ?
                            <SettingInfo data={backupData} setBackupdata={setBackupdata} state={state} />
                            :
                            <PasswordForm />
                        }
                    </div>

                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default Setting;