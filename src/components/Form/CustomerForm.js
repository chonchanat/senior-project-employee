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

    function handlerSubmit(event) {
        event.preventDefault();
        register({ ...form, username: form.phone, password: "12345" });
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
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
            </form>
        </div>
    );
}

export default CustomerForm;