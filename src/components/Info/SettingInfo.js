function SettingInfo({ data, setBackupdata, state, noti }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                    value={data.firstname}
                    disabled={!state.editState}
                    onChange={(e) => setBackupdata({ ...data, firstname: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                    value={data.lastname}
                    disabled={!state.editState}
                    onChange={(e) => setBackupdata({ ...data, lastname: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                <input type="tel" className={`w-[500px] h-[36px] rounded-md px-6 border ${state.editState ? "border-black" : "border-inputBorder"}`}
                    value={data.phone}
                    disabled={!state.editState}
                    onChange={(e) => setBackupdata({ ...data, phone: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                    value={data.email}
                    disabled={true}
                    onChange={(e) => setBackupdata({ ...data, email: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                    value={data.role}
                    disabled={true}
                    onChange={(e) => setBackupdata({ ...data, email: e.target.value })} />
            </div>

            {noti.message && <p className={`text-center mt-6 ${noti.error ? "text-red-500" : "text-accept"}`}>{noti.message}</p>}

        </div>
    );
}

export default SettingInfo;