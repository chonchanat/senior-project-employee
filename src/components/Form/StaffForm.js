import { useState } from 'react';

import { Button, ButtonSubmit } from '../Button';

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
        register({ ...form, username: form.phone, password: "12345"});
        // console.log('succes', { ...form, username: form.phone, password: "12345"})
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
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
                            checked={form.role === "admin"}
                            onChange={(e) => setForm({ ...form, role: "admin" })} />
                        <label className="ml-4 mr-20">Administrator</label>
                        <input type="checkbox"
                            checked={form.role === "staff"}
                            onChange={(e) => setForm({ ...form, role: "staff" })} />
                        <label className="ml-4">Staff</label>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <ButtonSubmit title="Submit" bgColor="bg-accept" width="w-[200px]" />
                    <div className="w-[60px]" />
                    <div onClick={() => setPage("Table")}>
                        <Button bgColor="bg-decline" width="w-[200px]">Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default StaffForm;