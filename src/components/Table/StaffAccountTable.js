import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import Spinner from '../Spinner';
import { ButtonTransparent } from '../Button';

import { RiDeleteBin7Fill, RiPencilFill } from 'react-icons/ri';

import { deleteUser } from '../../api/userAPI';

function StaffAccountTable({ accountData }) {

    const navigate = useNavigate();

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

    function handlerDelete(data) {
        deleteUser(data);
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
                    <TableHead>FIRSTNAME</TableHead>
                    <TableHead>LASTNAME</TableHead>
                    <TableHead>EMAIL</TableHead>
                    <TableHead>ROLE</TableHead>
                    {authReducer.role === "admin" && <TableHead>ACTION</TableHead>}
                </TableRow>
                <DataSection width="">
                    {
                        accountData.length ?
                            accountData.map((row, index) =>
                                <TableRow key={index}>
                                    <TableBody>{row.firstname}</TableBody>
                                    <TableBody>{row.lastname}</TableBody>
                                    <TableBody>{row.email}</TableBody>
                                    <TableBody>{row.role}</TableBody>
                                    {authReducer.role === "admin" &&
                                        <TableBody>
                                            <ButtonTransparent click={() => navigate("/staff-account/" + row.username)}>
                                                <RiPencilFill size="24px" />
                                            </ButtonTransparent>
                                            <div className="w-[16px]" />
                                            <ButtonTransparent click={() => handlerDelete(row)}>
                                                <RiDeleteBin7Fill size="24px" />
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