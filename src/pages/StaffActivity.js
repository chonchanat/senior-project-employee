import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import ActivityForm from '../components/Form/ActivityForm';
import ActivityTable from '../components/Table/ActivityTable';

import { IoIosArrowBack } from 'react-icons/io';

import { getAllActivity } from '../api/activityAPI';

function StaffActivity() {
    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        async function getActivity() {
            dispatch(startFetch());
            const data = await getAllActivity();
            setActivityData(data);
            dispatch(endFetch());
        }
        getActivity();
    }, [dispatch])

    const [page, setPage] = useState("Table");
    const [activityData, setActivityData] = useState([]);

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กิจกรรมทั้งหมด</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        {
                            page === "Table" ?
                                <p className="py-2">รายชื่อกิจกรรม</p>
                                :
                                <div className="flex items-center">
                                    <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => setPage("Table")} />
                                    <p>เพิ่มกิจกรรม</p>
                                </div>
                        }
                        <div className={`${authReducer.role === "admin" && page === "Table" ? "visible" : "invisible"}`}
                            onClick={() => setPage("Form")}>
                            <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">เพิ่มกิจกรรม</Button>
                        </div>
                    </HeadContentDesktop>

                    {
                        page === "Table" ?
                            <ActivityTable activityData={activityData} />
                            :
                            <ActivityForm setPage={setPage} />
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffActivity;