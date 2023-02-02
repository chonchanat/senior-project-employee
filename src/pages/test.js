import { useState } from 'react';
import activityData from '../fakeData/ActivityData';

import Wrapper from '../components/Wrapper';
import { SampleColumnChart } from '../components/chart/ColumnChart';
import SamplePieChart from '../components/chart/PieChart';
import SamplePieDonutChart from '../components/chart/PieDonutChart';

import { rollerCoaster } from '../fakeData/commentData';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdClose } from 'react-icons/md'

function Test() {

    const data = activityData
    const [search, setSearch] = useState("");
    const [state, setState] = useState({
        multiSearch: false,
    });
    const [number, setNumber] = useState(0);

    const [multiSelect, setMultiSearch] = useState([]);

    function handlerClick(data) {
        const found = multiSelect.find(e => e.code === data.code);
        if (!found) {
            setMultiSearch([...multiSelect, data])
        }
        setState({ ...state, multiSearch: false });
        setSearch("");
    };

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
                                <MdClose className="text-white ml-1" onClick={() => setMultiSearch(multiSelect.filter(e => e.code !== data.code))} />
                            </p>)}
                    </div>
                </div>
            </div>

            <input onChange={(e) => setNumber(e.target.value)}></input>
            <p onClick={() => console.log(number)}>click</p>

            <p className="border-b-2 my-6"></p>
            <div className="flex justify-around items-center">
                <RatingTotal />
                <RatingPercent />
            </div>

            <p className="border-b-2 my-6"></p>
            <div className="flex justify-around">
                <SampleColumnChart />
                <SamplePieChart />
            </div>
            <div>
                <SamplePieDonutChart />
            </div>

        </div>
    )
}

function RatingPercent() {
    return (
        <div>
            {rollerCoaster.list.map((item, index) => (
                <div key={index} className="flex items-center text-sm my-2">
                    <p className="text-fha font-bold">{5 - index} star</p>
                    <div className="w-[200px] h-[12px] bg-[#F7F7F7] mx-2 rounded-lg overflow-hidden">
                        <div className={`bg-yellow h-[12px]`} style={{ width: item ? item * 200 / rollerCoaster.total : "0px" }} />
                    </div>
                    <p>{item * 100 / rollerCoaster.total} %</p>
                </div>
            ))}
        </div>
    );
}


function RatingTotal() {
    return (
        <div className="w-fit text-center">
            <p className="text-lg">Customer reviews</p>
            <div className="flex items-center bg-[#F7F7F7] p-2 my-2 rounded-xl">
                <StarRating rating={rollerCoaster.average} />
                <p className="text-sm ml-2">{rollerCoaster.average} out of 5</p>
            </div>
            <p className="text-sm">{rollerCoaster.total} customer ratings</p>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                return (
                    <div key={index}>
                        <AiFillStar className={`text-yellow text-3xl ${index >= rating && "hidden"}`} />
                        <AiOutlineStar className={`text-yellow text-3xl ${index < rating && "hidden"}`} />
                    </div>
                );
            })}
        </div>
    );
}

export default Test;