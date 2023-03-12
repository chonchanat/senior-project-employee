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
    const [error, setError] = useState("");

    function handlerSubmit(event) {
        event.preventDefault();
        setError("");
        const randomPassword = Math.random().toString(36).slice(-8);
        register({ ...form, username: form.phone, password: randomPassword })
            .then(() => window.location.reload(true))
            .catch(() => setError("Failed to create account"))
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
                <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                    <input type="email" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">จำนวนลูกค้า
                    <input type="number" className={`border-black w-[500px] h-[36px] rounded-md border px-6`}
                        onChange={(e) => setForm({ ...form, members: parseInt(e.target.value) })} />
                </div>
                <div className="w-[650px] flex justify-between items-center mb-4">จำนวนดาว
                    <input type="number" className={`border-black w-[500px] h-[36px] rounded-md border px-6`}
                        onChange={(e) => setForm({ ...form, star: parseInt(e.target.value) })} />
                </div>

                <div className="flex justify-center mt-10">
                    <ButtonSubmit title="Submit" bgColor="bg-accept" width="w-28" />
                    <div className="w-[60px]" />
                    <div onClick={() => setPage("Table")}>
                        <Button bgColor="bg-decline" width="w-28">Cancel</Button>
                    </div>
                </div>

                {error && <p className="text-center mt-6 text-red-500">{error}</p>}
            </form>
        </div>
    );
}

export default CustomerForm;