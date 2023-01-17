import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import CustomerForm from '../components/Form/CustomerForm';
import CustomerAccountTable from '../components/Table/CustomerAccountTable';

import { getAllStaff } from '../api/userAPI';

import { IoIosArrowBack } from 'react-icons/io';

function CustomerAccount() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        async function getAccount() {
            dispatch(startFetch());
            const data = await getAllStaff();
            setAccountData(data.filter((data) => data.ID !== authReducer.ID && data.role === "customer"));
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
                <HeadDesktop><p>ระบบบัญชีลูกค้า</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        {
                            page === "Table" ?
                                <p className="py-2">รายชื่อลูกค้า</p>
                                :
                                <div className="flex items-center">
                                    <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => setPage("Table")} />
                                    <p>สร้างบัญชีลูกค้า</p>
                                </div>
                        }
                        <div className={`${authReducer.role === "admin" && page === "Table" ? "visible" : "invisible"}`}
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
    );
}

export default CustomerAccount;