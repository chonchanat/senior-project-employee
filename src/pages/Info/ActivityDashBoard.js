import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { ActionDashboard } from '../../components/Dashboard/GeneralDashboard';
import CommentPage from '../../components/Dashboard/CommentPage';
import QueuePage from '../../components/Dashboard/QueuePage';

import { getOneActivity } from '../../api/activityAPI';

import { IoIosArrowBack } from 'react-icons/io';

function ActivityDashboard() {

    const navigate = useNavigate();
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

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กระดานข้อมูล</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex items-center">
                            <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => navigate("/staff-activity")} />
                            <p>{data && data.name[0]}</p>
                        </div>
                        <p>สถานะ : </p>
                    </HeadContentDesktop>

                    <div className="flex flex-1 flex-col">
                        <ActionDashboard data={data} setPage={setPage} />
                        {page === "queue" ? <QueuePage /> : <CommentPage />}
                    </div>

                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default ActivityDashboard;