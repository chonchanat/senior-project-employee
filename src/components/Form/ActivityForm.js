import { useState, useRef } from 'react';

import { Button, ButtonSubmit } from '../Button';

import { postActivity } from '../../api/activityAPI';

function ActivityForm({ setPage }) {
    const defaultImage = "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png";
    const imageRef = useRef();

    const [nameForm, setNameForm] = useState({
        th: "",
        eng: "",
    })
    const [form, setForm] = useState({
        name: [],
        size: 0,
        duration: 0,
        star: 0,
        near: [],
        x: 0,
        y: 0,
        image: "",
    });

    function handlerUploadImage() {
        imageRef.current.click();
    }
    function handlerChangeImage() {
        setForm({...form, image: imageRef.current.files[0]})
    }
    function handlerSubmit(e) {
        e.preventDefault();
        const data = { ...form, name: [nameForm.th, nameForm.eng] }
        postActivity(data);
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <div className="flex flex-wrap justify-center h-fit">
                    <div className="w-[400px] flex justify-center items-center mb-4">
                        <img className="w-[160px]" src={form.image ? URL.createObjectURL(form.image) : defaultImage} alt="upload" onClick={handlerUploadImage} />
                        <input type="file" accept="image/*" ref={imageRef} className="hidden" onChange={handlerChangeImage}/>
                    </div>
                    <div className="w-[520px]">
                        <div className="flex justify-between items-center mb-4">
                            ชื่อกิจกรรม
                            <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                                placeholder="ภาษาไทย"
                                onChange={(e) => setNameForm({ ...nameForm, th: e.target.value })} />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            ชื่อกิจกรรม
                            <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                                placeholder="ภาษาอังกฤษ"
                                onChange={(e) => setNameForm({ ...nameForm, eng: e.target.value })} />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="w-[104px]">จำนวนผู้เข้าร่วม</p>
                            <input type="number" className="h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, size: parseInt(e.target.value) })} />
                            <p className="w-[80px] text-right">คน/รอบ</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="w-[104px]">ระยะเวลาเล่น</p>
                            <input type="number" className="h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, duration: parseInt(e.target.value) })} />
                            <p className="w-[80px] text-right">นาที/รอบ</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="w-[104px]">จำนวนดาว</p>
                            <input type="number" className="h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, star: parseInt(e.target.value) })} />
                            <p className="w-[80px] text-right">ดวง/คน</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="w-[104px]">พิกัด</p>
                            <input type="text" className="w-[156px] h-[36px] border-black rounded-md border px-6"
                                placeholder="X"
                                onChange={(e) => setForm({ ...form, x: parseInt(e.target.value) })} />
                            <input type="text" className="w-[156px] h-[36px] border-black rounded-md border px-6"
                                placeholder="Y"
                                onChange={(e) => setForm({ ...form, y: parseInt(e.target.value) })} />
                        </div>
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