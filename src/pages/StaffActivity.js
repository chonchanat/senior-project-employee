import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import ActivityForm from '../components/Form/ActivityForm';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../components/Table/Table'

import ActivityData from '../fakeData/ActivityData';
import { ButtonTransparent } from '../components/Button';

import { IoMdSettings } from 'react-icons/io';

function ActivityTable() {

    const navigate = useNavigate();

    function handlerClick(id) {
        navigate(`/staff-activity/${id}`);
    }

    return (
        <div>
            <TableRow condition="head">
                <TableHead>Code</TableHead>
                <TableHead>ชื่อ</TableHead>
                <TableHead>สถานะการให้บริการ</TableHead>
                <TableHead>จำนวนคิว</TableHead>
                <TableHead>เรทติ้ง</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="max-h-[560px]">
                {ActivityData.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.code}</TableBody>
                        <TableBody>{row.name}</TableBody>
                        <TableBody>{row.status}</TableBody>
                        <TableBody>{row.duration}</TableBody>
                        <TableBody>{row.rating}</TableBody>
                        <TableBody>
                            <ButtonTransparent click={() => handlerClick(row.id)}>
                                <IoMdSettings size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">กิจกรรมทั้งหมด {ActivityData.length} กิจกรรม</p>
        </div>
    );
}

function StaffActivity() {

    const [state, setState] = useState(false);

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
                                    onClick={() => setState(false)}
                                >รายชื่อกิจกรรม</p>
                                <p className={`${state ? "block" : "hidden"} font-normal`}>/ เพิ่มกิจกรรม</p>
                            </div>
                            <div className={`${state ? "invisible" : "visible"}`}
                                onClick={() => setState(true)}>
                                <Button bgColor="bg-[#D9D9D9]" textColor="text-black" font="font-normal" width="w-[150px]">เพิ่มกิจกรรม</Button>
                            </div>
                        </HeadContentDesktop>
                        {
                            state ?
                                <ActivityForm setState={setState} />
                                :
                                <ActivityTable />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default StaffActivity;