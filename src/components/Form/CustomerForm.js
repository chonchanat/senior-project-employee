import { useState } from 'react';

import { Button, ButtonSubmit } from '../Button';

import { register } from '../../api/userAPI';

function CustomerForm({ setPage }) {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        role: "customer",
        // additional
        username: "",
        password: "",
        star: 0,
        members: 0,
    });
    const [noti, setNoti] = useState({
        message: "",
        error: false,
    });

    async function handlerSubmit(event) {
        event.preventDefault();
        setNoti({ message: "กำลังโหลดข้อมูล", error: false })
        const randomPassword = Math.random().toString(36).slice(-8);
        await register({ ...form, username: form.phone, password: randomPassword })
            .then(() => window.location.reload(true))
            .catch(() => { setNoti({ message: "สร้างบัญชีไม่สำเร็จ", error: true }) })
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
                <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6" required
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6" required
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">จำนวนลูกค้า
                    <input type="number" className={`border-black w-[500px] h-[36px] rounded-md border px-6`} required
                        onChange={(e) => setForm({ ...form, members: parseInt(e.target.value) })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">จำนวนดาว
                    <input type="number" className={`border-black w-[500px] h-[36px] rounded-md border px-6`} required
                        onChange={(e) => setForm({ ...form, star: parseInt(e.target.value) })} />
                </div>

                <div className="flex justify-center mt-10">
                    <ButtonSubmit title="ยืนยัน" bgColor="bg-accept" width="w-28" />
                    <div className="w-[60px]" />
                    <Button bgColor="bg-decline" width="w-28" click={() => setPage("Table")}>ยกเลิก</Button>
                </div>

                {noti.message && <p className={`text-center mt-6 ${noti.error ? "text-red-500" : "text-accept"}`}>{noti.message}</p>}
            </form>
        </div>
    );
}

export default CustomerForm;