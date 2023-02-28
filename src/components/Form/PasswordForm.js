import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../Button';

import { changePassword } from '../../api/userAPI';

function PasswordForm() {

    const authReducer = useSelector(state => state.authReducer);

    const [form, setForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    function handlerChangePassword() {
        changePassword({
            username: authReducer.username,
            password: form.oldPassword,
            newPassword: form.newPassword,
        })
    }

    return (
        <div className="flex flex-col items-center">
            <div className="w-[650px] flex justify-between items-center mb-4 mb-[40px]">รหัสผ่านเดิม
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                    onChange={(e) => setForm({ ...form, oldPassword: e.target.value })} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4 ">รหัสผ่านใหม่
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                    onChange={(e) => setForm({ ...form, newPassword: e.target.value })} />
            </div>
            {/* <div className="w-[650px] flex justify-between items-center mb-4 ">ยืนยันรหัสผ่าน
                <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
            </div> */}
            <p className="mb-8">noti</p>
            <Button bgColor="bg-accept" width="w-32" click={handlerChangePassword}>ยืนยัน</Button>
        </div>
    )
}

export default PasswordForm;