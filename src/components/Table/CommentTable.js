import { useSelector } from 'react-redux';

import {
    TableHead,
    TableRow,
} from '../Table/Table'
import Spinner from '../Spinner'


function CommentTable({ commentData }) {

    const statusReducer = useSelector(state => state.statusReducer);

    return (
        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div>
                <TableRow condition="head">
                    <TableHead>CODE</TableHead>
                    <TableHead>NAME</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>QUEUE</TableHead>
                    <TableHead>RATING</TableHead>
                    <TableHead>ACTION</TableHead>
                </TableRow>
            </div>
    );
}

export default CommentTable;