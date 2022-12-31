import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';
import { getCustomerAPI } from '../api/fakeAPI';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import CustomerForm from '../components/Form/CustomerForm';
import CustomerAccountTable from '../components/Table/CustomerAccountTable';

function CustomerAccount() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAccount() {
            dispatch(startFetch());

            const data = await getCustomerAPI();
            setAccountData(data);

            dispatch(endFetch());
        }
        getAccount();
    }, [dispatch])

    const authReducer = useSelector(state => state.authReducer);

    const [page, setPage] = useState("Table");
    const [accountData, setAccountData] = useState([]);

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