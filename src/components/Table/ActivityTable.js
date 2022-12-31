import { useSelector } from 'react-redux';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import { ButtonTransparent } from '../Button';
import Spinner from '../Spinner'

import { IoMdSettings } from 'react-icons/io';
import { RiRunFill, RiNotification3Fill } from 'react-icons/ri';
import { BsCone } from 'react-icons/bs';

function ActivityTable({ activityData, setPage, handlerSelect }) {

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

    function handlerClick(id) {
        setPage("Info");
        handlerSelect(id);
    }

    function handlerStatus(status) {
        if (status === "open") {
            return <RiRunFill size="24px" className="text-accept" title="open"/>;
        } else if (status === "temporarily closed") {
            return <RiNotification3Fill size="24px" className="text-yellow" title="temporarily closed"/>
        } else if (status === "closed") {
            return <BsCone size="24px" className="text-decline" title="closed"/>;
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
                    {authReducer.role === "administrator" && <TableHead>Action</TableHead>}
                </TableRow>
                <DataSection width="">
                    {activityData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.code}</TableBody>
                            <TableBody>{row.name}</TableBody>
                            <TableBody>{handlerStatus(row.status)}</TableBody>
                            <TableBody>{row.duration}</TableBody>
                            <TableBody>{row.rating}</TableBody>
                            {authReducer.role === "administrator" &&
                                <TableBody>
                                    < ButtonTransparent click={() => handlerClick(row.id)}>
                                        <IoMdSettings size="24px" />
                                    </ButtonTransparent>
                                </TableBody>}
                        </TableRow>
                    )
                    }
                </DataSection >
                <p className="text-sm text-right my-4 text-[#7d7d7d]">กิจกรรมทั้งหมด {activityData.length} กิจกรรม</p>
            </div >
    );
}

export default ActivityTable;