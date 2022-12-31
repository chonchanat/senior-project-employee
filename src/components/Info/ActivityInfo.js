function ActivityInfo({ data, setData, state }) {
    return (
        <div className="flex h-[240px] px-10">
            <div className="w-[40%] flex justify-center items-center">
                <img src={data.image} alt="activity" width="250px" />
            </div>
            <div className="w-[60%]">
                <label className="flex justify-between items-center mb-4">ชื่อกิจกรรม
                    <input type="text" className={`w-[70%] h-[36px] border-black rounded-md border px-6`}
                        value={data.name}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, name: e.target.value })} />
                </label>
                <label className="flex justify-between items-center mb-4">จำนวนผู้เข้าร่วม
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.size}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, size: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">คน/รอบ</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">ระยะเวลาเล่น
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.duration}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, duration: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">นาที/รอบ</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">ระยะเวลารอ
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.waitingTime}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, waitingTime: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">นาที</p>
                    </div>
                </label>
                <label className="flex justify-between items-center mb-4">จำนวนดาว
                    <div className="flex justify-between w-[70%]">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.star}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, star: e.target.value })} />
                        <p className="w-20 flex justify-end items-center">ดวง/คน</p>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default ActivityInfo;