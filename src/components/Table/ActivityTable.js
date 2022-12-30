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

function ActivityTable({ activityData, setPage, handlerSelect }) {

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
                    <TableHead>Code</TableHead>
                    <TableHead>ชื่อ</TableHead>
                    <TableHead>สถานะการให้บริการ</TableHead>
                    <TableHead>จำนวนคิว</TableHead>
                    <TableHead>เรทติ้ง</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
                <DataSection width="max-h-[560px]">
                    {activityData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.code}</TableBody>
                            <TableBody>{row.name}</TableBody>
                            <TableBody>{row.status}</TableBody>
                            <TableBody>{row.duration}</TableBody>
                            <TableBody>{row.rating}</TableBody>
                            <TableBody>
                                <ButtonTransparent click={() => handlerClick(row.id)}>
                                    <IoMdSettings size="24px" />
                                </ButtonTransparent>
                            </TableBody>
                        </TableRow>
                    )}
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">กิจกรรมทั้งหมด {activityData.length} กิจกรรม</p>
            </div>
    );
}

export default ActivityTable;