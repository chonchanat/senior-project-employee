function ActivityInfo({ data, setData, state, nameForm, setNameForm, positionForm, setPositionForm }) {
    return (
        <div className="flex flex-wrap justify-center h-fit">
            <div className="w-[400px] flex justify-center items-center mb-4">
                <img src={data.picture} alt="activity" className="w-[240px] rounded-md overflow-hidden shadow-md" />
            </div>
            <div className="w-[520px]">
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม (TH)
                    <input type="text" className={`h-[36px] w-[364px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        value={nameForm.th}
                        disabled={!state.editState}
                        onChange={(e) => setNameForm({ ...nameForm, th: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม (ENG)
                    <input type="text" className={`h-[36px] w-[364px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        value={nameForm.eng}
                        disabled={!state.editState}
                        onChange={(e) => setNameForm({ ...nameForm, eng: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนผู้เข้าร่วม</p>
                    <input type="number" className={`h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        value={data.size}
                        disabled={!state.editState}
                        onChange={(e) => setData({ ...data, size: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">คน/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">ระยะเวลาเล่น</p>
                    <input type="number" className={`h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        value={data.duration}
                        disabled={!state.editState}
                        onChange={(e) => setData({ ...data, duration: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">นาที/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนดาว</p>
                    <input type="number" className={`h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        value={data.star}
                        disabled={!state.editState}
                        onChange={(e) => setData({ ...data, star: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">ดวง/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">พิกัด</p>
                    <input type="text" className={`w-[156px] h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        placeholder="X"
                        value={positionForm.x}
                        disabled={!state.editState}
                        onChange={(e) => setPositionForm({ ...positionForm, x: parseFloat(e.target.value) })}
                    />
                    <input type="number" className={`w-[156px] h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                        placeholder="Y"
                        value={positionForm.y}
                        disabled={!state.editState}
                        onChange={(e) => setPositionForm({ ...positionForm, y: parseFloat(e.target.value) })}
                    />
                </div>
            </div>
        </div>
    );
}

export default ActivityInfo;