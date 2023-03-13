import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ButtonSubmit } from '../Button';

import { changePassword } from '../../api/userAPI';

function PasswordForm() {

    const authReducer = useSelector(state => state.authReducer);

    const [form, setForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [noti, setNoti] = useState({
        message: "",
        error: false,
    });

    function handlerChangePassword(e) {
        e.preventDefault();
        setNoti({ message: "", error: false });

        if (form.newPassword !== form.confirmPassword) {
            setNoti({ message: "รหัสผ่านใหม่ไม่ตรงกัน", error: true });
            return;
        }

        changePassword({
            username: authReducer.username,
            password: form.oldPassword,
            newPassword: form.newPassword,
        })
            .then(() => { setNoti({ message: "เปลี่ยนรหัสผ่านสำเร็จ", error: false }); setForm({ oldPassword: "", newPassword: "", confirmPassword: "" }) })
            .catch((err) => { setNoti({ message: "เปลี่ยนรหัสผ่านไม่สำเร็จ", error: true }); console.log(err) })
    }

    return (
        <form onSubmit={handlerChangePassword} className="flex flex-col items-center">
            <div className="w-[650px] flex justify-between items-center mb-4 mb-[40px]">รหัสผ่านเดิม
                <input type="password" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                    value={form.oldPassword} required
                    onChange={(e) => setForm({ ...form, oldPassword: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4 ">รหัสผ่านใหม่
                <input type="password" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`} 
                    value={form.newPassword} required
                    onChange={(e) => setForm({ ...form, newPassword: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4 ">ยืนยันรหัสผ่าน
                <input type="password" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`} 
                    value={form.confirmPassword} required
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
            </div>

            <ButtonSubmit bgColor="bg-accept" width="w-28" title="ยืนยัน" />

            {noti.message && <p className={`text-center mt-6 ${noti.error ? "text-red-500" : "text-accept"}`}>{noti.message}</p>}

        </form>
    )
}

export default PasswordForm;