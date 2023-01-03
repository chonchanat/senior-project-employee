import { useState } from 'react';
import activityData from '../fakeData/ActivityData';

import Wrapper from '../components/Wrapper';

import { MdClose } from 'react-icons/md'

function Test() {

    const data = activityData
    const [search, setSearch] = useState("");
    const [state, setState] = useState({
        multiSearch: false,
    });

    const [multiSelect, setMultiSearch] = useState([]);

    function handlerClick(data) {
        const found = multiSelect.find(e => e.code === data.code);
        if (!found) {
            setMultiSearch([...multiSelect, data])
        }
        setState({ ...state, multiSearch: false });
        setSearch("");
    };

    // console.log(multiSelect)

    return (
        <div className="px-10">
            <p className="text-3xl font-bold my-10">Test Page</p>

            <div>
                <p className="text-lg">Multi Select</p>
                {
                    data.map((data) => (
                        <p key={data.code}>{data.name}</p>
                    ))
                }

                <Wrapper state={state.multiSearch} bgColor="bg-black/50" click={() => setState({ ...state, multiSearch: false })} />
                <div className="relative w-fit z-50">
                    <input type="text" className="w-[320px] h-[36px] border-black rounded-md border px-6"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        onClick={() => setState({ ...state, multiSearch: true })} />
                    <div className={`absolute left-0 right-0 w-full bg-white ${!state.multiSearch && "hidden"}`}>
                        {
                            data
                                .filter((data) => {
                                    return search.toLowerCase() === ""
                                        ? data
                                        : data.name.toLowerCase().includes(search);
                                })
                                .slice(0, 5)
                                .map((data) => (
                                    <p key={data.code} className="py-2 px-6 hover:bg-[#F4F4F4]"
                                        onClick={() => handlerClick(data)}>{data.name}</p>
                                ))
                        }
                    </div>
                    <div className="flex">
                        {multiSelect.map((data) =>
                            <p key={data.code} className="flex items-center p-2 mr-2 bg-yellow rounded-3xl">{data.name}
                                <MdClose className="text-white ml-1" onClick={() => setMultiSearch(multiSelect.filter(e => e.code !== data.code))}/>
                            </p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;