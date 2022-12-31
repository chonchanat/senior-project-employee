import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'

// import CustomerData from '../../fakeData/CustomerData';
import { ButtonTransparent } from '../Button';

// import { HiOutlinePencil } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function CustomerAccountTable({ accountData, handlerSelect }) {
    return (
        <div>
            <TableRow condition="head">
                <TableHead>ID</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Star</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
            <DataSection width="max-h-[560px]">
                {accountData.map((row, index) =>
                    <TableRow key={index}>
                        <TableBody>{row.id}</TableBody>
                        <TableBody>{row.member}</TableBody>
                        <TableBody>{row.star}</TableBody>
                        <TableBody>{row.time}</TableBody>
                        <TableBody>
                            {/* <ButtonTransparent color="accept">
                                <HiOutlinePencil size="24px" />
                            </ButtonTransparent> */}
                            {/* <div className="w-[16px]" /> */}
                            <ButtonTransparent color="decline">
                                <RiDeleteBin5Line size="24px" />
                            </ButtonTransparent>
                        </TableBody>
                    </TableRow>
                )}
            </DataSection>
            <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด {accountData.length} คน</p>
        </div>
    );
}

export default CustomerAccountTable;