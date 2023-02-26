import { useSelector } from 'react-redux';

import Spinner from '../Spinner';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'

import { ButtonTransparent } from '../Button';

import { RiDeleteBin7Fill } from 'react-icons/ri';

function CustomerAccountTable({ accountData }) {

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
                    <TableHead>MEMBER</TableHead>
                    <TableHead>STAR</TableHead>
                    <TableHead>TIME</TableHead>
                    {authReducer.role === "admin" && <TableHead>ACTION</TableHead>}
                </TableRow>
                <DataSection>
                    {accountData.length ?
                        accountData.map((row, index) =>
                            <TableRow key={index}>
                                <TableBody>{row._id}</TableBody>
                                <TableBody>{row.members}</TableBody>
                                <TableBody>{row.star}</TableBody>
                                <TableBody>{row.createdAt}</TableBody>
                                {authReducer.role === "admin" &&
                                    <TableBody>
                                        <ButtonTransparent>
                                            <RiDeleteBin7Fill size="24px" />
                                        </ButtonTransparent>
                                    </TableBody>}
                            </TableRow>
                        )
                        :
                        <div className="flex justify-center py-10 border-b-2 border-[#E0E0E0]">
                            <label>ไม่มีรายชื่อลูกค้า</label>
                        </div>
                    }
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด {accountData.length} คน</p>
            </div>
    );
}

export default CustomerAccountTable;