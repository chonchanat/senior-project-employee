import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { startFetch, endFetch } from '../actions/statusActions';

import { BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../components/Block';
import SideMenuDesktop from '../components/SideMenu/SideMenuDesktop';
import { Button } from '../components/Button';
import ActivityForm from '../components/Form/ActivityForm';
import {
    TableHead,
    TableBody,
    TableRow,
    DataSection,
} from '../components/Table/Table'
import { ButtonTransparent } from '../components/Button';
import Spinner from '../components/Spinner'

import { IoMdSettings } from 'react-icons/io';

import { getActivityAPI } from '../api/fakeAPI';

function ActivityTable({ activityData }) {

    const navigate = useNavigate();
    const statusReducer = useSelector(state => state.statusReducer);

    function handlerClick(id) {
        navigate(`/staff-activity/${id}`);
    }

    return (

        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div>
                <TableRow condition="head">
                    <TableHead>Code</TableHead>
                    <TableHead>ชื่อ</TableHead>
                    <TableHead>สถานะการให้บริการ</TableHead>
                    <TableHead>จำนวนคิว</TableHead>
                    <TableHead>เรทติ้ง</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
                <DataSection width="max-h-[560px]">
                    {activityData.map((row, index) =>
                        <TableRow key={index}>
                            <TableBody>{row.code}</TableBody>
                            <TableBody>{row.name}</TableBody>
                            <TableBody>{row.status}</TableBody>
                            <TableBody>{row.duration}</TableBody>
                            <TableBody>{row.rating}</TableBody>
                            <TableBody>
                                <ButtonTransparent click={() => handlerClick(row.id)}>
                                    <IoMdSettings size="24px" />
                                </ButtonTransparent>
                            </TableBody>
                        </TableRow>
                    )}
                </DataSection>
                <p className="text-sm text-right my-4 text-[#7d7d7d]">กิจกรรมทั้งหมด {activityData.length} กิจกรรม</p>
            </div>


    );
}

function StaffActivity() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getActivity() {
            dispatch(startFetch());

            const data = await getActivityAPI();
            setActivityData(data);

            dispatch(endFetch());
        }
        getActivity();
    }, [dispatch])


    const [state, setState] = useState(false);
    const [activityData, setActivityData] = useState([]);

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
                            <div className="flex py-2">
                                <p className="mr-2 cursor-pointer"
                                    onClick={() => setState(false)}
                                >รายชื่อกิจกรรม</p>
                                <p className={`${state ? "block" : "hidden"} font-normal`}>/ เพิ่มกิจกรรม</p>
                            </div>
                            <div className={`${state ? "invisible" : "visible"}`}
                                onClick={() => setState(true)}>
                                <Button bgColor="bg-yellow" textColor="text-black" font="font-normal" width="w-[150px]">เพิ่มกิจกรรม</Button>
                            </div>
                        </HeadContentDesktop>
                        {
                            state ?
                                <ActivityForm setState={setState} />
                                :
                                <ActivityTable activityData={activityData} />
                        }
                    </ContentDesktop>
                </BlockDesktopRight>
            </BlockDesktop>
        </div>
    );
}

export default StaffActivity;