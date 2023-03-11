import CommentTable from '../Table/CommentTable';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function RatingPercent({ data }) {

    let ratingList = [0, 0, 0, 0, 0]
    const countRating = data.length;
    for (const i of data) {
        ratingList[5 - i.rating] += 1;
    }

    return (
        <div className="my-8">
            {ratingList.map((item, index) =>
                <div key={index} className="flex items-center text-sm my-2">
                    <p className="text-fha font-bold">{5 - index} star</p>
                    <div className="w-[200px] h-[12px] bg-[#F7F7F7] mx-2 rounded-lg overflow-hidden">
                        <div className={`bg-yellow h-[12px]`} style={{ width: item ? item * 200 / countRating : "0px" }} />
                    </div>
                    <p>{(item * 100 / countRating).toFixed(0)} %</p>
                </div>
            )}
        </div>
    );
}

export function RatingTotal({ data }) {
    return (
        <div className="w-fit text-center my-8">
            <p className="text-lg">Customer reviews</p>
            <div className="flex items-center bg-[#F7F7F7] p-2 my-2 rounded-xl">
                <StarRating rating={data.rating} />
                <p className="text-sm ml-2">{data.rating} out of 5</p>
            </div>
            <p className="text-sm">{data.commentNumber} customer ratings</p>
        </div>
    );
}

export function StarRating({ rating, size = "text-3xl" }) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                return (
                    <div key={index}>
                        <AiFillStar className={`text-yellow ${size} ${index >= rating && "hidden"}`} />
                        <AiOutlineStar className={`text-yellow ${size} ${index < rating && "hidden"}`} />
                    </div>
                );
            })}
        </div>
    );
}

function CommentPage({ data }) {
    return (
        <div className="flex-1 flex pt-2 overflow-auto">
            <div className="flex flex-col items-center justify-around px-4 mr-8">
                <RatingTotal data={data} />
                <RatingPercent data={data.comment ? data.comment : []} />
            </div>
            <CommentTable commentData={data.comment} />
        </div>
    );
}

export default CommentPage;