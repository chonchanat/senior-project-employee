import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { ActionDashboard } from '../../components/Dashboard/GeneralDashboard';
import CommentPage from '../../components/Dashboard/CommentPage';
import QueuePage from '../../components/Dashboard/QueuePage';
import StatPage from '../../components/Dashboard/StatPage';
import Spinner from '../../components/Spinner';

import { getOneActivity } from '../../api/activityAPI';

import { IoIosArrowBack } from 'react-icons/io';

function ActivityDashboard() {

    const navigate = useNavigate();
    const statusReducer = useSelector(state => state.statusReducer);
    const { code } = useParams();
    useEffect(() => {
        async function getActivity() {
            const data = await getOneActivity(code);
            setData(data);
        }
        getActivity();
    }, [code])

    const [data, setData] = useState(null);
    const [page, setPage] = useState("stat")

    function translateStatus() {
        if (data.status === "open") return "เปิดให้บริการ";
        else if (data.status === "temporarily closed") return "ปิดให้บริการชั่วคราว";
        else if (data.status === "closed") return "ปิดให้บริการ";
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex items-center">
                            <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => navigate("/staff-activity")} />
                            {data && <p>{data.name[0]}</p>}
                        </div>
                        {data && <p>สถานะ : {translateStatus()}</p>}
                    </HeadContentDesktop>

                    <div className="flex flex-1 flex-col overflow-auto">
                        <ActionDashboard data={data} setPage={setPage} />
                        {
                            statusReducer.loading ?
                                <div className="flex justify-center py-10">
                                    <Spinner color="black" />
                                    <label>กำลังโหลดข้อมูล</label>
                                </div>
                                :
                                page === "stat" ?
                                    data && <StatPage data={data} />
                                    :
                                    page === "queue" ?
                                        data && <QueuePage code={data.code} />
                                        :
                                        <CommentPage data={data} />
                        }
                    </div>

                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default ActivityDashboard;