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
            <div>
                <TableRow condition="head">
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
                <DataSection width="max-h-[560px]">
                    {accountData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.id}</TableBody>
                            <TableBody>{row.name}</TableBody>
                            <TableBody>{row.role}</TableBody>
                            <TableBody>
                                <ButtonTransparent color="accept" click={() => handlerClick(row.id)}>
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
                <p className="text-sm text-right my-4 text-[#7d7d7d]">พนักงานทั้งหมด {accountData.length} คน</p>
            </div>
    );
}

export default StaffAccountTable;