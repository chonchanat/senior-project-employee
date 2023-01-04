function ActivityInfo({ data, setData, state, children }) {
    return (
        <div className="flex flex-wrap justify-center h-fit">
            <div className="w-[400px] flex justify-center items-center mb-4">
                <img src={data.image} alt="activity" width="250px" />
            </div>
            <div className="w-[520px]">
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม
                    <input type="text" className="h-[36px] w-[364px] border-black rounded-md border px-6"
                        value={data.name}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนผู้เข้าร่วม</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        value={data.size}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, size: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">คน/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">ระยะเวลาเล่น</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        value={data.duration}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, duration: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">นาที/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">ระยะเวลารอ</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        value={data.waitingTime}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, waitingTime: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">นาที</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนดาว</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        value={data.star}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, star: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">ดวง/รอบ</p>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ActivityInfo;