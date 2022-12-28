import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import InformationForm from '../components/Form/InformationForm';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../components/Table/Table'
import { ButtonTransparent } from '../components/Button';
import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../components/Dropdown';
import Wrapper from '../components/Wrapper';

import { BsThreeDots } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdCheck, MdClose } from 'react-icons/md'

import ActivityData from '../fakeData/ActivityData';
import CustomerData from '../fakeData/CustomerData';

function getData(id) {
    for (var i = 0; i < ActivityData.length; i++) {
        if (ActivityData[i].id === id) {
            return ActivityData[i]
        }
    }
}

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`${state.editState ? "block" : "hidden"}`}>
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
        <div className={`${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={() => {setState({ ...state, editState: true }); acceptEdit()}}>
                <MdCheck size="28px" />
            </DropdownButton>
            <DropdownButton click={() => {setState({ ...state, editState: true }); declineEdit()}}>
                <MdClose size="28px" />
            </DropdownButton>
        </div>
    );
}

function ActivityQueueTable() {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>No.</TableHead>
                <TableHead>Customer ID</TableHead>
                <TableHead>จำนวนผู้เข้าร่วม</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="h-[280px] ">
                {CustomerData.map((row, index) =>
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
            <p className="text-sm text-right my-4 text-[#7d7d7d]">จำนวนคิวขณะนี้ คิว</p>
        </div>
    );
}

function InformationActivity() {

    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState(getData(params.id));
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
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>กิจกรรมทั้งหมด</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => navigate("/staff-activity")}
                                >รายชื่อกิจกรรม</p>
                                <p className="">/ {backupData.name}</p>
                            </div>
                            <HandlerDropdown state={state} setState={setState} />
                            <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit}/>
                        </HeadContentDesktop>
                        <InformationForm data={data} setData={setData} state={state} />
                        <HeadContentDesktop>
                            <p className="pt-4 pb-2">ตารางคิว</p>
                        </HeadContentDesktop>
                        <ActivityQueueTable />
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default InformationActivity;