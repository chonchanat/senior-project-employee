import { useNavigate } from "react-router-dom";

import { BsPerson } from 'react-icons/bs';
import { SlGameController } from 'react-icons/sl';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
function Card({ type, click, data, icon }) {
    return (
        <div className="w-[32%] h-[104px] py-2 bg-[#F4F4F4] rounded-xl shadow-md text-center text-sm cursor-pointer relative overflow-hidden mb-2" onClick={click}>
            {icon}
            <p>{type === "customer" ? "ลูกค้า" : type === "employee" ? "พนักงาน" : "กิจกรรม"}</p>
            {data && <p className="my-2 text-2xl font-bold">{type === "customer" ? data.customerNow : type === "employee" ? data.staffNow : data.activityNow}</p>}
            {data && type === "customer" && <p>ทั้งหมด {data.customer} คน</p>}
        </div>
    );
}

function GeneralDashboard({ data }) {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <Card type="customer" click={() => navigate("/staff-customer-account")} data={data} icon={<BsPerson className="absolute right-[-40px] text-8xl text-[#8876AF] opacity-40" />} />
            <Card type="employee" click={() => navigate("/staff-account")} data={data} icon={<TfiHeadphoneAlt className="absolute right-[-20px] top-5 text-7xl text-[#7ED295] opacity-40" />} />
            <Card type="activity" click={() => navigate("/staff-activity")} data={data} icon={<SlGameController className="absolute right-[-30px] top-5 text-7xl text-[#FFA953] opacity-40" />} />
        </div>
    );
}

function ActionDashboard({ data, setPage }) {

    const navigate = useNavigate();
    const textStyle = "w-[20%] py-3 bg-[#F4F4F4] rounded-lg text-center shadow-md cursor-pointer"
    return (
        <div className="flex justify-around mb-4">
            <p className={textStyle} onClick={() => setPage("stat")}>สถิติ</p>
            <p className={textStyle} onClick={() => setPage("queue")}>ตารางคิว</p>
            <p className={textStyle} onClick={() => setPage("comment")}>คะแนนและความคิดเห็น</p>
            <p className={textStyle} onClick={() => navigate(`/staff-activity/${data.code}`)}>รายละเอียด</p>
        </div>
    );
}

export { GeneralDashboard, ActionDashboard };