import { useSelector } from 'react-redux';

import Spinner from '../Spinner';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'

import { ButtonTransparent } from '../Button';
// import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function CustomerAccountTable({ accountData, handlerSelect }) {

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

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
                    <TableHead>Member</TableHead>
                    <TableHead>Star</TableHead>
                    <TableHead>Time</TableHead>
                    {authReducer.role === "administrator" && <TableHead>Action</TableHead>}
                </TableRow>
                <DataSection width="">
                    {accountData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.id}</TableBody>
                            <TableBody>{row.member}</TableBody>
                            <TableBody>{row.star}</TableBody>
                            <TableBody>{row.time}</TableBody>
                            {authReducer.role === "administrator" &&
                                <TableBody>
                                    {/* <ButtonTransparent color="accept">
                                        <HiOutlinePencil size="24px" />
                                    </ButtonTransparent>
                                    <div className="w-[16px]" /> */}
                                    <ButtonTransparent color="decline">
                                        <RiDeleteBin5Line size="24px" />
                                    </ButtonTransparent>
                                </TableBody>}
                        </TableRow>
                    )}
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด {accountData.length} คน</p>
            </div>
    );
}

export default CustomerAccountTable;