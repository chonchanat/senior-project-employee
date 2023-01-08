import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllActivity } from '../actions/activityActions';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import ActivityForm from '../components/Form/ActivityForm';
import ActivityInformation from '../components/Info/ActivityInformation';
import ActivityTable from '../components/Table/ActivityTable';


function StaffActivity() {
    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);
    const activityReducer = useSelector(state => state.activityReducer);

    useEffect(() => {
        dispatch(fetchAllActivity());
        setActivityData(activityReducer);
    }, [dispatch])

    const [page, setPage] = useState("Table");
    const [activityData, setActivityData] = useState([]);
    const [selectData, setSelectData] = useState(null);

    function handlerSelect(id) {
        const foundActivity = activityData.find((data) => data.id === id);
        setSelectData(foundActivity);
    }

    return (
        <div>
            <BlockDesktop>
                <BlockDesktopLeft>
                    <SideMenuDesktop />
                </BlockDesktopLeft>
                <BlockDesktopRight>
                    <HeadDesktop>
                        <p>กิจกรรมทั้งหมด</p>
                    </HeadDesktop>
                    <ContentDesktop>
                        <HeadContentDesktop>
                            <p className="mr-2 cursor-pointer py-2"
                                onClick={() => { setPage("Table"); setSelectData(null) }}>
                                รายชื่อกิจกรรม
                                <label className={`${page !== "Form" && "hidden"} font-normal`}
                                    onClick={(e) => e.stopPropagation()}> / เพิ่มกิจกรรม</label>
                                <label className={`${page !== "Info" && "hidden"} font-normal`}
                                    onClick={(e) => e.stopPropagation()}> / {selectData && selectData.firstname}</label>
                            </p>
                            <div className={`${authReducer.role === "admin" && page === "Table" ? "visible" : "invisible"}`}
                                onClick={() => setPage("Form")}>
                                <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">เพิ่มกิจกรรม</Button>
                            </div>
                        </HeadContentDesktop>
                        {
                            page === "Table" ?
                                <ActivityTable activityData={activityData} setPage={setPage} handlerSelect={handlerSelect} />
                                :
                                page === "Form" ?
                                    <ActivityForm setPage={setPage} />
                                    :
                                    <ActivityInformation selectData={selectData} />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div >
    );
}

export default StaffActivity;