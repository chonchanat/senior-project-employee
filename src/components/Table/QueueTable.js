import { useSelector } from 'react-redux';

import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import { ButtonTransparent } from '../Button';

import { RiDeleteBin7Fill } from 'react-icons/ri';

function QueueTable({ queueData }) {

    const authReducer = useSelector(state => state.authReducer);

    return (
        <div className="flex-1 flex flex-col pt-2 overflow-auto">
            <p className="border-b-2 border-[#E0E0E0] pb-4 mb-4">ตารางคิว</p>
            <TableRow condition="head">
                <TableHead>NO</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>MEMBERS</TableHead>
                <TableHead>ROUND</TableHead>
                {authReducer.role === "admin" && <TableHead>ACTION</TableHead>}
            </TableRow>
            <div className="flex-1 overflow-auto">
                <DataSection>
                    {queueData.length ?
                        queueData.map((row, index) =>
                            <TableRow key={index}>
                                <TableBody>{index + 1}</TableBody>
                                <TableBody>{row.userId}</TableBody>
                                <TableBody>{row.members}</TableBody>
                                <TableBody>{row.round}</TableBody>
                                {authReducer.role === "admin" &&
                                    <TableBody>
                                        <ButtonTransparent>
                                            <RiDeleteBin7Fill size="24px" />
                                        </ButtonTransparent>
                                    </TableBody>
                                }
                            </TableRow>
                        )
                        :
                        <p className="flex justify-center py-10 border-b-2 border-[#E0E0E0]">ขณะนี้ยังไม่มีรายการคิว</p>
                    }
                </DataSection >
            </div>
        </div>
    );
}

export default QueueTable;