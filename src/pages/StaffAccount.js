import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import StaffForm from '../components/Form/StaffForm';
import StaffAccountTable from '../components/Table/StaffAccountTable';

import { getAllAccount } from '../api/userAPI';

import { IoIosArrowBack } from 'react-icons/io';

function StaffAccount() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        async function getAccount() {
            dispatch(startFetch());
            const data = await getAllAccount();
            setAccountData(data.filter((data) => data.ID !== authReducer.ID && (data.role === "admin" || data.role === "staff")));
            dispatch(endFetch());
        }
        getAccount();
    }, [dispatch, authReducer])

    const [page, setPage] = useState("Table");
    const [accountData, setAccountData] = useState([]);

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ระบบบัญชีพนักงาน</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        {
                            page === "Table" ?
                                <p className="py-2">รายชื่อพนักงาน</p>
                                :
                                <div className="flex items-center">
                                    <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => setPage("Table")} />
                                    <p>สร้างบัญชีพนักงาน</p>
                                </div>
                        }
                        <div className={`${authReducer.role === "admin" && page === "Table" ? "visible" : "invisible"}`}
                            onClick={() => setPage("Form")}>
                            <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">สร้างบัญชีพนักงาน</Button>
                        </div>
                    </HeadContentDesktop>
                    {
                        page === "Table" ?
                            <StaffAccountTable accountData={accountData} />
                            :
                            <StaffForm setPage={setPage} />
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffAccount;