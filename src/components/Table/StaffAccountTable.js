import { useSelector } from 'react-redux';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import Spinner from '../Spinner';
import { ButtonTransparent } from '../Button';

import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function StaffAccountTable({ accountData, setPage, handlerSelect }) {

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

    function handlerClick(id) {
        setPage("Info");
        handlerSelect(id);
    }

    return (
        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div className="h-full flex flex-col overflow-auto">
                <TableRow condition="head">
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    {authReducer.role === "administrator" && <TableHead>Action</TableHead>}
                </TableRow>
                <DataSection width="">
                    {
                        accountData.length ?
                            accountData.map((row, index) =>
                                <TableRow key={index}>
                                    <TableBody>{row.id}</TableBody>
                                    <TableBody>{row.firstname}</TableBody>
                                    <TableBody>{row.role}</TableBody>
                                    {authReducer.role === "administrator" &&
                                        <TableBody>
                                            <ButtonTransparent color="accept" click={() => handlerClick(row.id)}>
                                                <HiOutlinePencil size="24px" />
                                            </ButtonTransparent>
                                            <div className="w-[16px]" />
                                            <ButtonTransparent color="decline">
                                                <RiDeleteBin5Line size="24px" />
                                            </ButtonTransparent>
                                        </TableBody>
                                    }
                                </TableRow>
                            )
                            :
                            <div className="flex justify-center py-10 border-b-2 border-[#E0E0E0]">
                                <label>ไม่มีรายชื่อพนักงาน</label>
                            </div>
                    }
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">พนักงานทั้งหมด {accountData.length} คน</p>
            </div>
    );
}

export default StaffAccountTable;