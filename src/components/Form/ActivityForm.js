import { useState, useRef } from 'react';

import { Button, ButtonSubmit } from '../Button';

import { postActivity } from '../../api/activityAPI';

import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function ActivityForm({ setPage }) {
    const defaultImage = "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png";
    const imageRef = useRef();

    const [nameForm, setNameForm] = useState({
        th: "",
        eng: "",
    })
    const [positionForm, setPositionForm] = useState({
        x: 0,
        y: 0,
    });
    const [form, setForm] = useState({
        name: [],
        code: "",
        status: "open",
        size: 0,
        duration: 0,
        star: 0,
        picture: "",
        position: [],
    });
    const [picture, setPicture] = useState(null);

    function handlerUploadImage() {
        imageRef.current.click();
    }
    function handlerChangeImage(e) {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
        }
    }
    function handlerSubmit(e) {
        e.preventDefault();
        const pictureName = picture.name.split(".").slice(0, -1).join("");
        const pictureFirebaseRef = ref(storage, pictureName);
        uploadBytes(pictureFirebaseRef, picture)
            .then(() => {
                getDownloadURL(pictureFirebaseRef)
                    .then((url) => {
                        const data = { ...form, name: [nameForm.th, nameForm.eng], picture: url, position: [positionForm.x, positionForm.y] }
                        postActivity(data).then(() => window.location.reload(true));
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <form onSubmit={handlerSubmit} className="flex flex-wrap justify-center h-fit">
            <div className="w-[400px] flex justify-center items-center mb-4">
                <img className={picture ? "w-[240px] rounded-md overflow-hidden shadow-md" : "w-[160px]"} src={picture ? URL.createObjectURL(picture) : defaultImage} alt="upload" onClick={handlerUploadImage} />
                <input type="file" accept="image/*" ref={imageRef} className="hidden" onChange={handlerChangeImage} />
            </div>
            <div className="w-[520px]">
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม
                    <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                        required
                        placeholder="ภาษาไทย"
                        onChange={(e) => setNameForm({ ...nameForm, th: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    ชื่อกิจกรรม
                    <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                        required
                        placeholder="ภาษาอังกฤษ"
                        onChange={(e) => setNameForm({ ...nameForm, eng: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    รหัสกิจกรรม
                    <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                        required
                        onChange={(e) => setForm({ ...form, code: e.target.value })} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนผู้เข้าร่วม</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        required
                        onChange={(e) => setForm({ ...form, size: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">คน/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">ระยะเวลาเล่น</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        required
                        onChange={(e) => setForm({ ...form, duration: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">นาที/รอบ</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">จำนวนดาว</p>
                    <input type="number" className="h-[36px] border-black rounded-md border px-6"
                        required
                        onChange={(e) => setForm({ ...form, star: parseInt(e.target.value) })} />
                    <p className="w-[80px] text-right">ดวง/คน</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="w-[104px]">พิกัด</p>
                    <input type="text" className="w-[156px] h-[36px] border-black rounded-md border px-6"
                        required
                        placeholder="X"
                        onChange={(e) => setPositionForm({ ...positionForm, x: parseFloat(e.target.value) })} />
                    <input type="text" className="w-[156px] h-[36px] border-black rounded-md border px-6"
                        required
                        placeholder="Y"
                        onChange={(e) => setPositionForm({ ...positionForm, y: parseFloat(e.target.value) })} />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <ButtonSubmit title="Submit" bgColor="bg-accept" width="w-[200px]" />
                <div className="w-[60px]" />
                <Button bgColor="bg-decline" width="w-[200px]" click={() => setPage("Table")}>Cancel</Button>
            </div>
        </form>
    );
}

export default ActivityForm;