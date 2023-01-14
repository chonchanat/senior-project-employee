import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { getOneActivity } from '../../api/activityAPI';
import Wrapper from '../../components/Wrapper';
import { ModalDelete } from '../../components/Modal';
import ActivityInfo from '../../components/Info/ActivityInfo';
import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../../components/Dropdown';
import { BsThreeDots } from 'react-icons/bs';
import { MdCheck, MdClose } from 'react-icons/md';
import { deleteActivity } from '../../api/activityAPI';

function ActivityInfoPage() {

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        async function getActivity() {
            const data = await getOneActivity(id);
            setData(data);
            setBackupdata(data)
        }
        getActivity();
    }, [id])

    const [data, setData] = useState(null);
    const [backupData, setBackupdata] = useState(null);
    const [state, setState] = useState({
        dropState: false,
        editState: true,
        modalState: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: true })
        setBackupdata(data);
    }
    function declineEdit() {
        setState({ ...state, editState: true })
        setData(backupData);
    }
    function handlerDelete() {
        setState({ ...state, modalState: false });
        deleteActivity(data);
        navigate("/staff-activity")
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กิจกรรมทั้งหมด</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <p>รายชื่อกิจกรรม</p>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">
                            <Wrapper state={state.dropState}
                                click={() => setState({ ...state, dropState: !state.dropState })} />
                            <Wrapper state={state.modalState} bgColor="bg-black/20"
                                click={() => setState({ ...state, modalState: false })} />

                            <ModalDelete data={data} state={state} setState={setState} click={handlerDelete} />

                            <HandlerDropdown data={data} state={state} setState={setState} />
                            <HandlerEdit state={state} acceptEdit={acceptEdit} declineEdit={declineEdit} />
                            <ActivityInfo data={data} setData={setData} state={state} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "block" : "hidden"}`}>
            <Dropdown>
                <DropdownButton click={() => setState({ ...state, dropState: true })}><BsThreeDots size="28px" /></DropdownButton>
                <DropdownBody state={state.dropState} offset="right-0">
                    <DropdownMenu click={() => setState({ ...state, editState: false, dropState: false })}>แก้ไขรายละเอียด</DropdownMenu>
                    <DropdownMenu>ปิดปรับปรุงชั่วคราว</DropdownMenu>
                    <DropdownMenu>ปิดให้บริการ</DropdownMenu>
                    <DropdownMenu click={() => setState({ ...state, dropState: false, modalState: true })}>ลบกิจกรรม</DropdownMenu>
                </DropdownBody>
            </Dropdown>
        </div>
    );
}

function HandlerEdit({ state, acceptEdit, declineEdit }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={acceptEdit}>
                <MdCheck size="28px" className="text-accept" />
            </DropdownButton>
            <DropdownButton click={declineEdit}>
                <MdClose size="28px" className="text-decline" />
            </DropdownButton>
        </div>
    );
}

export default ActivityInfoPage;