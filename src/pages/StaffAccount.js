import { useState } from 'react';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import StaffForm from '../components/Form/StaffForm';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../components/Table/Table'

import StaffData from '../fakeData/StaffData';
import { ButtonTransparent } from '../components/Button';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function StaffAccountTable() {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="max-h-[560px]">
                {StaffData.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.id}</TableBody>
                        <TableBody>{row.name}</TableBody>
                        <TableBody>{row.role}</TableBody>
                        <TableBody>
                            <ButtonTransparent color="accept">
                                <HiOutlinePencil size="24px" />
                            </ButtonTransparent>
                            <div className="w-[16px]" />
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">พนักงานทั้งหมด {StaffData.length} คน</p>
        </div>
    );
}

function StaffAccount() {

    const [state, setState] = useState(false);

    return (
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ระบบบัญชีพนักงาน</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => setState(false)}
                                >รายชื่อพนักงาน</p>
                                <p className={`${state ? "block" : "hidden"} font-normal`}>/ สร้างบัญชีพนักงาน</p>
                            </div>
                            <div className={`${state ? "invisible" : "visible"}`}
                                onClick={() => setState(true)}>
                                <Button title="สร้างบัญชีพนักงาน" bgColor="bg-[#D9D9D9]" textColor="text-black" font="font-normal" width="w-[150px]" />
                            </div>
                        </HeadContentDesktop>
                        {
                            state ?
                                <StaffForm setState={setState} />
                                :
                                <StaffAccountTable />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default StaffAccount;