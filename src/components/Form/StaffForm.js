import { useState } from 'react';

import { Button, ButtonSubmit } from '../Button';

function StaffForm({setState}) {

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        role: "",
    });

    function handlerSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
                <label className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, lastname: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                    <div className="w-[500px]">
                        <input type="checkbox"
                            checked={form.role === "administrator"}
                            onChange={(e) => setForm({ ...form, role: "administrator" })} />
                        <label className="ml-4 mr-20">Administrator</label>
                        <input type="checkbox"
                            checked={form.role === "staff"}
                            onChange={(e) => setForm({ ...form, role: "staff" })} />
                        <label className="ml-4">Staff</label>
                    </div>
                </label>

                <div className="flex justify-center mt-10">
                    <ButtonSubmit title="Submit" bgColor="bg-accept" width="w-[200px]" />
                    <div className="w-[60px]" />
                    <div onClick={() => setState(false)}>
                        <Button bgColor="bg-decline" width="w-[200px]">Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default StaffForm;