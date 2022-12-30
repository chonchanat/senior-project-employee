import { useState } from "react";

import {
    DropdownButton,
} from '../Dropdown';

import { MdCheck, MdClose } from 'react-icons/md'


function StaffAccountInfo({ selectData }) {

    const [data, setData] = useState(selectData);
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
        <div className="flex flex-col items-center relative">
            {state.editState && <p className="absolute right-0 top-[-60px] text-sm cursor-pointer" onClick={() => setState({ ...state, editState: false })}>แก้ไขบัญชี</p>}
            <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit} />
            <p className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 ${!state.editState && "border-black border"}`}
                    value={data.name}
                    disabled={state.editState}
                    onChange={(e) => setData({ ...data, name: e.target.value })} />
            </p>
            <p className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 ${!state.editState && "border-black border"}`}
                        value={data.lastname}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, lastname: e.target.value })} />
            </p>
            <p className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                <input type="tel" className={`w-[500px] h-[36px] rounded-md px-6 ${!state.editState && "border-black border"}`}
                        value={data.phone}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, phone: e.target.value })} />
            </p>
            <p className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                        value={data.email}
                        disabled={true} />
            </p>
            <p className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                        value={data.role}
                        disabled={true} />
            </p>
        </div>
    );
}

function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={() => { setState({ ...state, editState: true }); acceptEdit() }}>
                <MdCheck size="28px" className="text-accept" />
            </DropdownButton>
            <DropdownButton click={() => { setState({ ...state, editState: true }); declineEdit() }}>
                <MdClose size="28px" className="text-decline" />
            </DropdownButton>
        </div>
    );
}

export default StaffAccountInfo;