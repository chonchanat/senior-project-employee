import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'

function QueueTable({ queueData }) {

    function compare(a, b) {
        if (a.round < b.round) {
            return -1;
        }
        if (a.round > b.round) {
            return 1;
        }
        return 0;
    }

    return (
        <div className="flex-1 flex flex-col pt-2 overflow-auto">
            <p className="border-b-2 border-[#E0E0E0] pb-4 mb-4">ตารางคิว</p>
            <TableRow condition="head">
                <TableHead>NO</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>MEMBERS</TableHead>
                <TableHead>ROUND</TableHead>
            </TableRow>
            <div className="flex-1 overflow-auto">
                <DataSection>
                    {queueData.length ?
                        queueData
                            .sort(compare)
                            .map((row, index) =>
                                <TableRow key={index} condition="head" css="py-4">
                                    <TableBody>{index + 1}</TableBody>
                                    <TableBody>{row.queueId}</TableBody>
                                    <TableBody>{row.queueSize}</TableBody>
                                    <TableBody condition="head">{row.round}</TableBody>
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