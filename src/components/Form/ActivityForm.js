import { useState } from 'react';

import { Button, ButtonSubmit } from '../Button';

import { AiOutlinePicture } from 'react-icons/ai';

import { postActivityAPI } from '../../api/ActivityAPI';

function ActivityForm({ setPage }) {

    const [form, setForm] = useState({
        name: "",
        size: "",
        duration: "",
        waitingTime: "",
        star: "",
    });

    function handlerSubmit(event) {
        event.preventDefault();
        postActivityAPI(form);
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handlerSubmit}>
                <div className="flex flex-wrap">
                    <div className="w-[200px] flex justify-center items-center mr-20">
                        <AiOutlinePicture size="200px" />
                    </div>
                    <div className="">
                        <label className="w-[550px] flex justify-between items-center mb-4">ชื่อกิจกรรม
                            <input type="tel" className="w-[400px] h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </label>
                        <label className="w-[550px] flex justify-between items-center mb-4">จำนวนผู้เข้าร่วม
                            <div className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, size: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">คน/รอบ</p>
                            </div>
                        </label>
                        <label className="w-[550px] flex justify-between items-center mb-4">ระยะเวลาเล่น
                            <div className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, duration: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">นาที/รอบ</p>
                            </div>
                        </label>
                        <label className="w-[550px] flex justify-between items-center mb-4">ระยะเวลารอ
                            <div className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, waitingTime: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">นาที</p>
                            </div>
                        </label>
                        <label className="w-[550px] flex justify-between items-center mb-4">จำนวนดาว
                            <div className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, star: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">ดวง/คน</p>
                            </div>
                        </label>
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

export default ActivityForm;