import { useNavigate } from "react-router-dom";

function Card({ type, click }) {
    return (
        <div className="w-[32%] py-4 bg-[#F4F4F4] rounded-xl shadow-md text-center cursor-pointer" onClick={click}>
            <p>{type === "customer" ? "ลูกค้า" : type === "employee" ? "พนักงาน" : "กิจกรรม"}</p>
            <p className="my-2 text-2xl font-bold">325</p>
            {type === "customer" && <p className="text-sm">ทั้งหมด 450 คน</p>}
        </div>
    );
}

function ActivityCard() {
    return (
        <div className="w-[360px] h-[160px] overflow-hidden relative flex flex-col justify-center items-center rounded-lg">
            <img src="https://www.changtrixget.com/wp-content/uploads/2018/09/superman-krypton-coaster.jpg" alt="activity"/>
            <p className="bg-fha p-2 rounded-lg font-bold text-white text-sm absolute top-2 shadow-md">กิจกรรมยอดนิยม</p>
            <p className="bg-fha p-2 rounded-lg font-bold text-white absolute bottom-2  shadow-md">รถไฟเหาะ</p>
        </div>
    );
}

function GeneralDashboard() {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <Card type="customer" click={() => navigate("/staff-customer-account")}/>
            <Card type="employee" click={() => navigate("/staff-account")}/>
            <Card type="activity" click={() => navigate("/staff-activity")}/>
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

export { GeneralDashboard, ActionDashboard, ActivityCard };