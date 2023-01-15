import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import StaffForm from '../components/Form/StaffForm';
import StaffAccountTable from '../components/Table/StaffAccountTable';
import StaffAccountInfo from '../components/Info/StaffAccountInfo';

import { getAllStaff } from '../api/userAPI';

function StaffAccount() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        async function getAccount() {
            dispatch(startFetch());
            const data = await getAllStaff();
            setAccountData(data.reverse().filter((data) => data.ID !== authReducer.ID && data.role !== "customer"));
            dispatch(endFetch());
        }
        getAccount();
    }, [dispatch, authReducer])

    const [page, setPage] = useState("Table");
    const [accountData, setAccountData] = useState([]);
    const [selectData, setSelectData] = useState(null);

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ระบบบัญชีพนักงาน</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <p className="mr-2 cursor-pointer py-2"
                            onClick={() => { setPage("Table"); setSelectData(null) }}>
                            รายชื่อพนักงาน
                            <label className={`${page !== "Form" && "hidden"} font-normal`}
                                onClick={(e) => e.stopPropagation()}> / สร้างบัญชีพนักงาน</label>
                            <label className={`${page !== "Info" && "hidden"} font-normal`}
                                onClick={(e) => e.stopPropagation()}> / แก้ไขบัญชีพนักงาน</label>
                        </p>
                        <div className={`${authReducer.role === "admin" && page === "Table" ? "visible" : "invisible"}`}
                            onClick={() => setPage("Form")}>
                            <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">สร้างบัญชีพนักงาน</Button>
                        </div>
                    </HeadContentDesktop>
                    {
                        page === "Table" ?
                            <StaffAccountTable accountData={accountData} />
                            :
                            page === "Form" ?
                                <StaffForm setPage={setPage} />
                                :
                                <StaffAccountInfo selectData={selectData} />
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffAccount;