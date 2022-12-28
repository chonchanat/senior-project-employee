import { useState } from 'react';

import { Button, ButtonSubmit } from '../Button';

function CustomerForm({ setState }) {

    const [form, setForm] = useState({
        phone: "",
        packet: "0",
        checkPacket: false,
        member: "",
        star: "",
    });

    function handlerSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
                <label className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                    <input type="tel" className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">แพ็กเกจ
                    <select className="w-[500px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setForm({ ...form, packet: e.target.value })}>
                        <option value="0">ธรรมดา</option>
                        <option value="1">ชุดเล็ก</option>
                        <option value="2">ชุดกลาง</option>
                        <option value="3">ชุดใหญ่</option>
                    </select>
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">จำนวนลูกค้า
                    <input type="number" className={`${form.packet === "0" ? "border-black" : "border-[#c7c7c7]"} w-[500px] h-[36px] rounded-md border px-6`}
                        disabled={form.packet === "0" ? false : true}
                        onChange={(e) => setForm({ ...form, member: e.target.value })} />
                </label>
                <label className="w-[650px] flex justify-between items-center mb-4">จำนวนดาว
                    <input type="number" className={`${form.packet === "0" ? "border-black" : "border-[#c7c7c7]"} w-[500px] h-[36px] rounded-md border px-6`}
                        disabled={form.packet === "0" ? false : true}
                        onChange={(e) => setForm({ ...form, star: e.target.value })} />
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

export default CustomerForm;