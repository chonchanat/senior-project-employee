import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ActivityInfo from './ActivityInfo';
import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../Dropdown';
import Wrapper from '../Wrapper';
import { ModalDelete } from '../Modal';

import { BsThreeDots } from 'react-icons/bs';
import { MdCheck, MdClose } from 'react-icons/md';

import { deleteActivity } from '../../api/activityAPI';

function ActivityInformation({ selectData }) {

    const navigate = useNavigate();

    const [data, setData] = useState(selectData);
    const [backupData, setBackupdata] = useState(data);
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
        <div className="relative">
            <Wrapper state={state.dropState}
                click={() => setState({ ...state, dropState: !state.dropState })} />
            <Wrapper state={state.modalState} bgColor="bg-black/20"
                click={() => setState({ ...state, modalState: false })} />

            <ModalDelete data={data} state={state} setState={setState} click={handlerDelete} />

            <HandlerDropdown data={data} state={state} setState={setState} />
            <HandlerEdit state={state} acceptEdit={acceptEdit} declineEdit={declineEdit} />
            <ActivityInfo data={data} setData={setData} state={state} >
            </ActivityInfo>
        </div>
    );
}

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "block" : "hidden"}`}>
            <Dropdown>
                <DropdownButton click={() => setState({ ...state, dropState: true })}>
                    <BsThreeDots size="28px" />
                </DropdownButton>
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

export default ActivityInformation;