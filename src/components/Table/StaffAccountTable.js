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

import { RiUser3Fill, RiPencilFill, RiVipCrown2Fill } from 'react-icons/ri';


function StaffAccountTable({ accountData }) {

    const navigate = useNavigate();

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
                                    <TableBody>
                                        {row.role === "admin" ?
                                            <RiVipCrown2Fill size="20px" className="text-yellow" title={row.role}/>
                                            :
                                            <RiUser3Fill size="20px" className="text-accept" title={row.role}/>
                                        }
                                    </TableBody>
                                    {authReducer.role === "admin" &&
                                        <TableBody>
                                            <ButtonTransparent click={() => navigate("/staff-account/" + row.username)}>
                                                <RiPencilFill size="24px" />
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