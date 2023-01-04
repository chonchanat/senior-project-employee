function ActivityInfo({ data, setData, state, children }) {
    return (
        <div className="flex flex-wrap justify-center h-fit">
            <div className="w-[400px] flex justify-center items-center mb-4">
                <img src={data.image} alt="activity" width="250px" />
            </div>
            <div className="w-[520px]">
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม
                    <input type="text" className="h-[36px] w-[360px] border-black rounded-md border px-6"
                        value={data.name}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    จำนวนผู้เข้าร่วม
                    <div className="w-[360px] flex justify-between items-center">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.size}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, size: e.target.value })} />
                        <label>คน/รอบ</label>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    ระยะเวลาเล่น
                    <div className="w-[360px] flex justify-between items-center">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.duration}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, duration: e.target.value })} />
                        <label>นาที/รอบ</label>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    ระยะเวลารอ
                    <div className="w-[360px] flex justify-between items-center">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.waitingTime}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, waitingTime: e.target.value })} />
                        <label>นาที</label>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    จำนวนดาว
                    <div className="w-[360px] flex justify-between items-center">
                        <input type="number" className="h-[36px] border-black rounded-md border px-6"
                            value={data.star}
                            disabled={state.editState}
                            onChange={(e) => setData({ ...data, star: e.target.value })} />
                        <label>ดวง/คน</label>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ActivityInfo;