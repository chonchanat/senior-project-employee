import { useSelector } from 'react-redux';

import {
    TableHead,
    TableRow,
} from '../Table/Table'
import Spinner from '../Spinner'

function QueueTable() {

    const statusReducer = useSelector(state => state.statusReducer);

    return (
        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div>
                <p className="border-b-2 border-[#E0E0E0] pt-6 pb-4 mb-4">ตารางคิว</p>
                <TableRow condition="head">
                    <TableHead>NO</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>MEMBERS</TableHead>
                    <TableHead>ROUND</TableHead>
                    <TableHead>ACTION</TableHead>
                </TableRow>
            </div>
    );
}

export default QueueTable;