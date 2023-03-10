import { useNavigate } from "react-router-dom";

import { BsPerson } from 'react-icons/bs';
import { SlGameController } from 'react-icons/sl';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
function Card({ type, click }) {
    return (
        <div className="w-[32%] py-2 bg-[#F4F4F4] rounded-xl shadow-md text-center text-sm cursor-pointer relative overflow-hidden mb-2" onClick={click}>
            {type === "customer" && <BsPerson className="absolute right-[-40px] text-8xl text-[#8876AF]" />}
            {type === "employee" && <TfiHeadphoneAlt className="absolute right-[-20px] top-5 text-7xl text-[#7ED295]" />}
            {type === "activity" && <SlGameController className="absolute right-[-30px] top-5 text-7xl text-[#FFA953]" />}

            <p>{type === "customer" ? "ลูกค้า" : type === "employee" ? "พนักงาน" : "กิจกรรม"}</p>
            <p className="my-2 text-2xl font-bold">325</p>
            {type === "customer" && <p>ทั้งหมด 450 คน</p>}
        </div>
    );
}

function GeneralDashboard() {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <Card type="customer" click={() => navigate("/staff-customer-account")} />
            <Card type="employee" click={() => navigate("/staff-account")} />
            <Card type="activity" click={() => navigate("/staff-activity")} />
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