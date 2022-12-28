function SettingForm({ data, setData, state }) {

    return (
        <div className="flex flex-col items-center">
                <label className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        value={data.name}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, name: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        value={data.lastname}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, lastname: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        value={data.phone}
                        disabled={state.editState}
                        onChange={(e) => setData({ ...data, phone: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        value={data.email}
                        disabled={true}
                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        value={data.role}
                        disabled={true}
                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                </label>
        </div>
    );
}

export default SettingForm;