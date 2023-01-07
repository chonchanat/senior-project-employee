import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, ButtonSubmit } from '../Button';
import { MultiSelect, MultiSelectBody } from '../MultiSelect';
import Wrapper from '../Wrapper';

import { MdClose } from 'react-icons/md'

// import { postActivity } from '../../api/activityAPI';

function ActivityForm({ setPage }) {

    const activityReducer = useSelector(state => state.activityReducer);

    const [state, setState] = useState({
        multiSearch: false,
    });
    const [search, setSearch] = useState("");
    const [multiSelect, setMultiSelect] = useState([]);

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
        // postActivity(form);
    }

    function handlerClick(data) {
        const found = multiSelect.find(e => e.code === data.code);
        if (!found) {
            setMultiSelect([...multiSelect, data])
            setForm({ ...form, near: [...multiSelect, data] })
        }
        setState({ ...state, multiSearch: false });
        setSearch("");
    };

    return (
        <div>
            <Wrapper state={state.multiSearch} click={() => setState({ ...state, multiSearch: false })} />
            <form onSubmit={handlerSubmit}>
                <div className="flex flex-wrap justify-center h-fit">
                    <div className="w-[400px] flex justify-center items-center mb-4">
                        <img className="w-[160px]" src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png" alt="upload" />
                    </div>
                    <div className="w-[520px]">
                        <div className="flex justify-between items-center mb-4">
                            ชื่อกิจกรรม
                            <input type="text" className="w-[364px] h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, name: e.target.value })} />
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
                            <p className="w-[104px]">ระยะเวลารอ</p>
                            <input type="number" className="h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, waitingTime: parseInt(e.target.value) })} />
                            <p className="w-[80px] text-right">นาที</p>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="w-[104px]">จำนวนดาว</p>
                            <input type="number" className="h-[36px] border-black rounded-md border px-6"
                                onChange={(e) => setForm({ ...form, star: parseInt(e.target.value) })} />
                            <p className="w-[80px] text-right">ดวง/รอบ</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>กิจกรรมใกล้เคียง</p>
                            <MultiSelect>
                                <input type="text" className="w-full h-[36px] border-black rounded-md border px-6"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    onClick={() => setState({ ...state, multiSearch: true })} />
                                <MultiSelectBody state={state} data={activityReducer} search={search} click={handlerClick} />
                                <div className="absolute top-[44px] w-[400px] flex flex-wrap">
                                    {multiSelect.map((data) =>
                                        <p key={data.code} className="flex items-center p-2 mr-2 mb-2 bg-yellow rounded-3xl">{data.name}
                                            <MdClose className="text-white ml-1" onClick={() => setMultiSelect(multiSelect.filter(e => e.code !== data.code))} />
                                        </p>)}
                                </div>
                            </MultiSelect>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[200px]">
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