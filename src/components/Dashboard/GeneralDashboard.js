import { useNavigate } from "react-router-dom";

function Card({ type, click }) {
    return (
        <div className="w-[32%] py-4 bg-[#F4F4F4] rounded-xl shadow-lg text-center cursor-pointer" onClick={click}>
            <p>{type === "customer" ? "ลูกค้า" : type === "employee" ? "พนักงาน" : "กิจกรรม"}</p>
            <p className="my-4 text-2xl font-bold">325</p>
            {type === "customer" && <p className="text-sm">ทั้งหมด 450 คน</p>}
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

export { GeneralDashboard, ActionDashboard };