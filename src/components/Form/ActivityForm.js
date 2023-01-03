import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, ButtonSubmit } from '../Button';
import { MultiSelect, MultiSelectBody } from '../MultiSelect';
import Wrapper from '../Wrapper';

import { AiOutlinePicture } from 'react-icons/ai';
import { MdClose } from 'react-icons/md'

import { postActivityAPI } from '../../api/ActivityAPI';

function ActivityForm({ setPage }) {

    const activityReducer = useSelector(state => state.activityReducer);

    const [state, setState] = useState({
        multiSearch: false,
    });
    const [search, setSearch] = useState("");
    const [multiSelect, setMultiSearch] = useState([]);

    const [form, setForm] = useState({
        name: "",
        size: "",
        duration: "",
        waitingTime: "",
        star: "",
        near: [],
    });

    function handlerSubmit(event) {
        event.preventDefault();
        postActivityAPI(form);
    }

    function handlerClick(data) {
        console.log(data)
        const found = multiSelect.find(e => e.code === data.code);
        if (!found) {
            setMultiSearch([...multiSelect, data])
        }
        setState({ ...state, multiSearch: false });
        setSearch("");
    };

    return (
        <div>
            <Wrapper state={state.multiSearch} click={() => setState({ ...state, multiSearch: false })} />
            <form onSubmit={handlerSubmit}>
                <div className="flex justify-around">
                    <div className="w-fit flex justify-center">
                        <AiOutlinePicture size="300px" />
                    </div>
                    <div className="w-[550px]">
                        <p className="flex justify-between items-center mb-4">ชื่อกิจกรรม
                            <input type="tel" className="w-[400px] h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </p>
                        <p className="flex justify-between items-center mb-4">จำนวนผู้เข้าร่วม
                            <p className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, size: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">คน/รอบ</p>
                            </p>
                        </p>
                        <p className="flex justify-between items-center mb-4">ระยะเวลาเล่น
                            <p className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, duration: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">นาที/รอบ</p>
                            </p>
                        </p>
                        <p className="flex justify-between items-center mb-4">ระยะเวลารอ
                            <p className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, waitingTime: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">นาที</p>
                            </p>
                        </p>
                        <p className="flex justify-between items-center mb-4">จำนวนดาว
                            <p className="flex">
                                <input type="number" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setForm({ ...form, star: e.target.value })} />
                                <p className="w-20 flex justify-end items-center">ดวง/คน</p>
                            </p>
                        </p>

                        <div className="flex justify-between min-h-[100px]">
                            <p>กิจกรรมใกล้เคียง</p>
                            <MultiSelect>
                                <input type="text" className="w-[400px] h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    onClick={() => setState({ ...state, multiSearch: true })} />
                                <MultiSelectBody state={state} data={activityReducer} search={search} click={handlerClick} />
                                <div className="w-[400px] flex flex-wrap mt-4">
                                    {multiSelect.map((data) =>
                                        <p key={data.code} className="flex items-center p-2 mr-2 mb-2 bg-yellow rounded-3xl">{data.name}
                                            <MdClose className="text-white ml-1" onClick={() => setMultiSearch(multiSelect.filter(e => e.code !== data.code))} />
                                        </p>)}
                                </div>
                            </MultiSelect>
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