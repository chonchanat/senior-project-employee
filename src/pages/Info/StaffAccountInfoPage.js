import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import StaffAccountInfo from '../../components/Info/StaffAccountInfo';
import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { HandlerDropdownStaffAccount, HandlerEdit } from '../../components/Etc/ActivityInfoPage';

import { getOneAccount, deleteUser, updateUser } from '../../api/userAPI';

import { IoIosArrowBack } from 'react-icons/io';
import { ModalDeleteAccount } from '../../components/Modal';

function StaffAccountInfoPage() {

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        async function getAccount() {
            const data = await getOneAccount(id);
            setData(data);
            setBackupdata(data);
        }
        getAccount();
    }, [id]);

    const [data, setData] = useState(null);
    const [backupData, setBackupdata] = useState(null);
    const [state, setState] = useState({
        editState: false,
        modalDeletAccount: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: false })
        setBackupdata(data);
        updateUser(data);
    }
    function declineEdit() {
        setState({ ...state, editState: false })
        setData(backupData);
    }
    function handlerDelete() {
        setState({ ...state, modalDeleteAccount: false });
        deleteUser(data);
        navigate("/staff-account")
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ระบบบัญชีพนักงาน</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex items-center">
                            <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => navigate("/staff-account")} />
                            <p>{data && `${data.firstname} ${data.lastname}`}</p>
                        </div>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">

                            <ModalDeleteAccount data={data} state={state} setState={setState} click={handlerDelete} />

                            {state.editState ?
                                <HandlerEdit acceptEdit={acceptEdit} declineEdit={declineEdit} />
                                :
                                <HandlerDropdownStaffAccount state={state} setState={setState} />
                                // <p className="absolute right-0 top-[-60px] text-sm cursor-pointer" onClick={() => setState({ ...state, editState: true })}>แก้ไขบัญชี</p>
                            }
                            <StaffAccountInfo data={data} setData={setData} state={state} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffAccountInfoPage;