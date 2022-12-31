import { useState } from 'react';
import { useSelector } from 'react-redux';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import CustomerForm from '../components/Form/CustomerForm';
import CustomerAccountTable from '../components/Table/CustomerAccountTable';

// import {
//     TableHead,
//     TableBody,
//     TableRow,
//     DataSection,
// } from '../components/Table/Table'

import CustomerData from '../fakeData/CustomerData';
// import { ButtonTransparent } from '../components/Button';

// import { HiOutlinePencil } from 'react-icons/hi';
// import { RiDeleteBin5Line } from 'react-icons/ri';

// function CustomerAccountTable() {
//     return (
//         <div>
//             <TableRow condition="head">
//                 <TableHead>ID</TableHead>
//                 <TableHead>Member</TableHead>
//                 <TableHead>Star</TableHead>
//                 <TableHead>Time</TableHead>
//                 <TableHead>Action</TableHead>
//             </TableRow>
//             <DataSection width="max-h-[560px]">
//                 {CustomerData.map((row, index) =>
//                     <TableRow key={index}>
//                         <TableBody>{row.id}</TableBody>
//                         <TableBody>{row.member}</TableBody>
//                         <TableBody>{row.star}</TableBody>
//                         <TableBody>{row.time}</TableBody>
//                         <TableBody>
//                             <ButtonTransparent color="accept">
//                                 <HiOutlinePencil size="24px" />
//                             </ButtonTransparent>
//                             <div className="w-[16px]" />
//                             <ButtonTransparent color="decline">
//                                 <RiDeleteBin5Line size="24px" />
//                             </ButtonTransparent>
//                         </TableBody>
//                     </TableRow>
//                 )}
//             </DataSection>
//             <p className="text-sm text-right my-4 text-[#7d7d7d]">ลูกค้าทั้งหมด {CustomerData.length} คน</p>
//         </div>
//     );
// }

function CustomerAccount() {

    const authReducer = useSelector(state => state.authReducer);

    const [page, setPage] = useState("Table");
    const [accountData, setAccountData] = useState(CustomerData);

    return (
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ระบบบัญชีลูกค้า</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                        <p className="mr-2 cursor-pointer py-2"
                                onClick={() => setPage("Table")}>
                                รายชื่อลูกค้า
                                <label className={`${page !== "Form" && "hidden"} font-normal`}
                                    onClick={(e) => e.stopPropagation()}> / สร้างบัญชีลูกค้า</label>
                            </p>
                            <div className={`${authReducer.role === "administrator" && page === "Table" ? "visible" : "invisible"}`}
                                onClick={() => setPage("Form")}>
                                <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">สร้างบัญชีลูกค้า</Button>
                            </div>
                        </HeadContentDesktop>
                        {
                            page === "Table" ?
                                <CustomerAccountTable accountData={accountData} />
                                :
                                <CustomerForm setPage={setPage} />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default CustomerAccount;