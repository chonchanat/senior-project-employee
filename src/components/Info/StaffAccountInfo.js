function StaffAccountInfo({ data, setData, state }) {

    return (
        <div className="flex flex-col items-center relative">
            <div className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                <input type="text" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.firstname}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                <input type="text" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.lastname}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                <input type="tel" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.phone}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                    value={data.email}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                <div className="w-[500px]">
                    <input type="checkbox"
                        disabled={!state.editState}
                        checked={data.role === "admin"}
                        onChange={() => setData({ ...data, role: "admin" })} />
                    <label className="ml-4 mr-20">Administrator</label>
                    <input type="checkbox"
                        disabled={!state.editState}
                        checked={data.role === "staff"}
                        onChange={() => setData({ ...data, role: "staff" })} />
                    <label className="ml-4">Staff</label>
                </div>
            </div>
        </div>
    );
}


export default StaffAccountInfo;