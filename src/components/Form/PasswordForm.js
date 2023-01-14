import { useState } from 'react';
import { Button } from '../Button'; 

function PasswordForm() {

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    return (
        <div className="flex flex-col items-center">
                <div className="w-[650px] flex justify-between items-center mb-4 mb-[40px]">รหัสผ่านเดิม
                    <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                        onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4 ">รหัสผ่านใหม่
                    <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                        onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4 ">ยืนยันรหัสผ่าน
                    <input type="text" className={`w-[500px] h-[36px] rounded-md px-6 border-black border`}
                        onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })} />
                </div>
                <p className="mb-8">noti</p>
                <Button bgColor="bg-accept" width="w-32">ยืนยัน</Button>
        </div>
    )
}

export default PasswordForm;