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
import { HiClipboard } from 'react-icons/hi';

function ActivityTable({ activityData }) {
    
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
                    <TableHead>CODE</TableHead>
                    <TableHead>NAME</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ROUND</TableHead>
                    <TableHead>RATING</TableHead>
                    {authReducer.role === "admin" && <TableHead>ACTION</TableHead>}
                </TableRow>
                <DataSection>
                    {activityData.length ?
                        activityData.map((row) =>
                            <TableRow key={row.activity.code}>
                                <TableBody>{row.activity.code}</TableBody>
                                <TableBody>{row.activity.name[0]}</TableBody>
                                <TableBody><div className={`${handlerStatus(row.activity.status)} w-[12px] h-[12px] rounded-full`} title={row.status} /></TableBody>
                                <TableBody>{row.waitRound}</TableBody>
                                <TableBody>{row.activity.rating}</TableBody>
                                {authReducer.role === "admin" &&
                                    <TableBody>
                                        <ButtonTransparent click={() => navigate("/staff-dashboard/" + row.activity.code)}>
                                            <HiClipboard size="24px" />
                                        </ButtonTransparent>
                                        <div className="w-2" />
                                        <ButtonTransparent click={() => navigate("/staff-activity/" + row.activity.code)}>
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