import rollerCoaster from '../../fakeData/commentData';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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

function CommentPage() {
    return (
        <div className="flex-1 pt-2">
            <div className="flex justify-around items-center">
                <RatingTotal />
                <RatingPercent />
            </div>
        </div>
    );
}

export default CommentPage;