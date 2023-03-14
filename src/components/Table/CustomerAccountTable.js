import { useState } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../Spinner';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../Table/Table'
import { ButtonTransparent } from '../Button';
import { ModalDeleteCustomer } from '../Modal';

import { RiDeleteBin7Fill } from 'react-icons/ri';

import { deleteUser } from '../../api/userAPI';

function CustomerAccountTable({ accountData }) {

    const statusReducer = useSelector(state => state.statusReducer);
    const authReducer = useSelector(state => state.authReducer);

    const [data, setData] = useState(null);
    const [modalDelete, setModalDelete] = useState(false);

    function convertUCTtoICT(time) {
        const now = new Date(time);
        const ictTimeString = now.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }).split(",");
        return (
            <div>
                <p>{ictTimeString[0]}</p>
                <p>{ictTimeString[1]}</p>
            </div>
        );
    }
    function handlerClick(row) {
        setData(row);
        setModalDelete(true);
    }
    function handlerDelete(row) {
        deleteUser(row);
    }

    return (
        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div className="h-full flex flex-col overflow-auto">
                <ModalDeleteCustomer data={data} state={modalDelete} setState={setModalDelete} click={handlerDelete} />

                <TableRow condition="head">
                    <TableHead>PHONE</TableHead>
                    <TableHead>FIRSTNAME</TableHead>
                    <TableHead>MEMBER</TableHead>
                    <TableHead>STAR</TableHead>
                    <TableHead>TIME</TableHead>
                    {authReducer.role === "admin" && <TableHead>ACTION</TableHead>}
                </TableRow>
                <DataSection>
                    {accountData.length ?
                        accountData.map((row, index) =>
                            <TableRow key={index}>
                                <TableBody>{row.phone}</TableBody>
                                <TableBody>{row.firstname}</TableBody>
                                <TableBody>{row.members}</TableBody>
                                <TableBody>{row.star}</TableBody>
                                <TableBody>{convertUCTtoICT(row.createdAt)}</TableBody>
                                {authReducer.role === "admin" &&
                                    <TableBody>
                                        <ButtonTransparent click={() => handlerClick(row)}>
                                            <RiDeleteBin7Fill size="24px" />
                                        </ButtonTransparent>
                                    </TableBody>}
                            </TableRow>
                        )
                        :
                        <div className="flex justify-center py-10 border-b-2 border-[#E0E0E0]">
                            <label>ไม่มีรายชื่อลูกค้า</label>
                        </div>
                    }
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด {accountData.length} คน</p>
            </div>
    );
}

export default CustomerAccountTable;