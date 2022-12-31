import { useState } from 'react';

import { HeadContentDesktop } from '../Block';
import ActivityInfo from './ActivityInfo';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import { ButtonTransparent } from '../Button';
import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../Dropdown';
import Wrapper from '../Wrapper';

import { BsThreeDots } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdCheck, MdClose } from 'react-icons/md'

import CustomerData from '../../fakeData/CustomerData';

function ActivityInformation({ selectData }) {

    const [data, setData] = useState(selectData);
    const [backupData, setBackupdata] = useState(data);
    const [state, setState] = useState({
        dropState: false,
        editState: true,
    });

    function acceptEdit() {
        setBackupdata(data);
    }
    function declineEdit() {
        setData(backupData);
    }

    return (
        <div className="relative">
            <HandlerDropdown state={state} setState={setState} />
            <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit} />
            <ActivityInfo data={data} setData={setData} state={state} />
            <HeadContentDesktop>
                <p className="pt-4 pb-2">ตารางคิว</p>
            </HeadContentDesktop>
            <ActivityQueueTable data={CustomerData}/>
        </div>
    );
}

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "block" : "hidden"}`}>
            <Dropdown>
                <Wrapper state={state.dropState}
                    click={() => setState({ ...state, dropState: !state.dropState })} />
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

function ActivityQueueTable({ data }) {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>No.</TableHead>
                <TableHead>Customer ID</TableHead>
                <TableHead>จำนวนผู้เข้าร่วม</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="h-[280px] ">
                {data.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.id}</TableBody>
                        <TableBody>{row.member}</TableBody>
                        <TableBody>{row.star}</TableBody>
                        <TableBody>
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">จำนวนคิวขณะนี้ <label>{data.length}</label> คิว</p>
        </div>
    );
}

export default ActivityInformation;