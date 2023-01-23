import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

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
    const [page, setPage] = useState("Stat")
    console.log(page)

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
                    <div>
                        <ActionDashboard data={data} setPage={setPage} />
                    </div>
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

function ActionDashboard({ data, setPage }) {
    
    const navigate = useNavigate();
    const textStyle = "w-[20%] py-3 bg-[#F4F4F4] rounded-xl text-center shadow-lg cursor-pointer"
    return (
        <div className="flex justify-around mb-4">
            <p className={textStyle} onClick={() => setPage("stat")}>สถิติ</p>
            <p className={textStyle} onClick={() => setPage("queue")}>ตารางคิว</p>
            <p className={textStyle} onClick={() => setPage("comment")}>คะแนนและความคิดเห็น</p>
            <p className={textStyle} onClick={() => navigate(`/staff-activity/${data.code}`)}>รายละเอียด</p>
        </div>
    );
}

export default ActivityDashboard;