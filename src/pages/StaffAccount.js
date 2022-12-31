import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block'
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import StaffForm from '../components/Form/StaffForm';
import StaffAccountTable from '../components/Table/StaffAccountTable';
import StaffAccountInfo from '../components/Info/StaffAccountInfo';

import StaffData from '../fakeData/StaffData';

function StaffAccount() {

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        async function getActivity() {
            // dispatch(startFetch());

            // const data = await getActivityAPI();
            setAccountData(StaffData);

            // dispatch(endFetch());
        }
        getActivity();
    }, [dispatch])


    const [page, setPage] = useState("Table");
    const [accountData, setAccountData] = useState([]);
    const [selectData, setSelectData] = useState(null);

    function handlerSelect(id) {
        const foundAccount = accountData.find((data) => data.id === id);
        setSelectData(foundAccount);
    }

    return (
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>ระบบบัญชีพนักงาน</p>
                    </HeadDesktop>
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
                            <div className={`${authReducer.role === "administrator" && page === "Table" ? "visible" : "invisible"}`}
                                onClick={() => setPage("Form")}>
                                <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">สร้างบัญชีพนักงาน</Button>
                            </div>
                        </HeadContentDesktop>
                        {
                            page === "Table" ?
                                <StaffAccountTable accountData={accountData} setPage={setPage} handlerSelect={handlerSelect} />
                                :
                                page === "Form" ?
                                    <StaffForm setPage={setPage} />
                                    :
                                    <StaffAccountInfo selectData={selectData} />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default StaffAccount;