import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import { ButtonTransparent } from '../Button';
import Spinner from '../Spinner'

import { IoMdSettings } from 'react-icons/io';

function ActivityTable({ activityData, handlerSelect }) {

    const navigate = useNavigate();

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

    function handlerStatus(status) {
        if (status === "open") {
            return "bg-accept";
        } else if (status === "temporarily closed") {
            return "bg-yellow";
        } else if (status === "closed") {
            return "bg-decline";
        }
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
                    <TableHead>Code</TableHead>
                    <TableHead>ชื่อ</TableHead>
                    <TableHead>สถานะการให้บริการ</TableHead>
                    <TableHead>จำนวนคิว</TableHead>
                    <TableHead>เรทติ้ง</TableHead>
                    {authReducer.role === "admin" && <TableHead>Action</TableHead>}
                </TableRow>
                <DataSection width="">
                    {activityData.length ?
                        activityData.map((row) =>
                            <TableRow key={row.id}>
                                <TableBody>{row.code}</TableBody>
                                <TableBody>{row.name}</TableBody>
                                <TableBody><div className={`${handlerStatus(row.status)} w-[12px] h-[12px] rounded-full`} title={row.status} /></TableBody>
                                <TableBody>{row.duration}</TableBody>
                                <TableBody>{row.rating}</TableBody>
                                {authReducer.role === "admin" &&
                                    <TableBody>
                                        < ButtonTransparent click={() => navigate("/staff-activity/" + row.code)}>
                                            <IoMdSettings size="24px" />
                                        </ButtonTransparent>
                                    </TableBody>}
                            </TableRow>
                        )
                        :
                        <div className="flex justify-center py-10 border-b-2 border-[#E0E0E0]">
                            <label>ไม่มีรายชื่อกิจกรรม</label>
                        </div>
                    }
                </DataSection >
                <p className="text-sm text-right my-4 text-[#7d7d7d]">กิจกรรมทั้งหมด {activityData.length} กิจกรรม</p>
            </div >
    );
}

export default ActivityTable;