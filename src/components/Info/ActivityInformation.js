import { useState } from 'react';
import { useSelector } from 'react-redux';

import ActivityInfo from './ActivityInfo';
import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../Dropdown';
import Wrapper from '../Wrapper';
import { MultiSelect, MultiSelectBody } from "../MultiSelect";

import { BsThreeDots } from 'react-icons/bs';
import { MdCheck, MdClose } from 'react-icons/md'

function ActivityInformation({ selectData }) {

    const activityReducer = useSelector(state => state.activityReducer);

    const [data, setData] = useState(selectData);
    const [backupData, setBackupdata] = useState(data);
    const [search, setSearch] = useState("");
    const [multiSelect, setMultiSearch] = useState(selectData.near);
    console.log(selectData)
    const [state, setState] = useState({
        dropState: false,
        editState: true,
        multiSearch: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: true })
        setBackupdata(data);
    }
    function declineEdit() {
        setState({ ...state, editState: true })
        setData(backupData);
    }
    function handlerClick(data) {
        const found = multiSelect.find(e => e.code === data.code);
        if (!found) {
            setMultiSearch([...multiSelect, data])
        }
        setState({ ...state, multiSearch: false });
        setSearch("");
    };

    return (
        <div className="relative">
            <Wrapper state={state.dropState}
                click={() => setState({ ...state, dropState: !state.dropState })} />
            <Wrapper state={state.multiSearch}
                click={() => setState({ ...state, multiSearch: false })} />

            <HandlerDropdown state={state} setState={setState} />
            <HandlerEdit state={state} acceptEdit={acceptEdit} declineEdit={declineEdit} />
            <ActivityInfo data={data} setData={setData} state={state} >
                <div className="flex justify-between items-center">
                    <p>กิจกรรมใกล้เคียง</p>
                    <MultiSelect>
                        <input type="text" className="w-[360px] h-[36px] border-black rounded-md border px-6"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            disabled={state.editState}
                            onClick={() => setState({ ...state, multiSearch: true })} />
                        <MultiSelectBody state={state} data={activityReducer} search={search} click={handlerClick} />
                        <div className="absolute top-[44px] w-[400px] flex flex-wrap">
                            {multiSelect.map((data) =>
                                <p key={data.code} className="flex items-center p-2 mr-2 mb-2 bg-yellow rounded-3xl">{data.name}
                                    <MdClose className={`text-white ml-1 ${state.editState && "hidden"}`} onClick={() => setMultiSearch(multiSelect.filter(e => e.code !== data.code))} />
                                </p>)}
                        </div>
                    </MultiSelect>
                </div>
            </ActivityInfo>
        </div>
    );
}

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "block" : "hidden"}`}>
            <Dropdown>
                <DropdownButton click={() => setState({ ...state, dropState: !state.dropState })}>
                    <BsThreeDots size="28px" />
                </DropdownButton>
                <DropdownBody state={state.dropState} offset="right-0">
                    <DropdownMenu click={() => setState({ ...state, editState: false, dropState: false })}>แก้ไขรายละเอียด</DropdownMenu>
                    <DropdownMenu>ปิดปรับปรุงชั่วคราว</DropdownMenu>
                    <DropdownMenu>ปิดให้บริการ</DropdownMenu>
                    <DropdownMenu>ลบกิจกรรม</DropdownMenu>
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