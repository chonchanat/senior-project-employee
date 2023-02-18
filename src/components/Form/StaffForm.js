import { useState } from 'react';

import { Button } from '../Button';

import { register } from '../../api/userAPI';

function StaffForm({ setPage }) {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        role: "",
        // additional
        username: "",
        password: "",
        star: 0,
        members: 1,
    });

    function handlerSubmit(e) {
        e.preventDefault();
        register({ ...form, username: form.phone, password: "12345" });
    }

    return (
        <div className="flex justify-center">
            <form>
                <div className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, firstname: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                    <input type="text" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, lastname: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                    <div className="w-[500px]">
                        <input type="checkbox"
                            className="w-4 h-4"
                            checked={form.role === "admin"}
                            onChange={(e) => setForm({ ...form, role: "admin" })} />
                        <label className="ml-4 mr-20">Administrator</label>
                        <input type="checkbox"
                            className="w-4 h-4"
                            checked={form.role === "staff"}
                            onChange={(e) => setForm({ ...form, role: "staff" })} />
                        <label className="ml-4">Staff</label>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <Button bgColor="bg-accept" width="w-28" click={handlerSubmit}>ยืนยัน</Button>
                    <div className="w-[60px]" />
                    <Button bgColor="bg-decline" width="w-28" click={() => setPage("Table")}>ยกเลิก</Button>
                </div>
            </form>
        </div>
    );
}

export default StaffForm;