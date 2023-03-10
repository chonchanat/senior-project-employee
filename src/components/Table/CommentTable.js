import { StarRating } from "../Dashboard/CommentPage";

function CommentTable({ commentData }) {
    return (
        <div className="flex-1 flex flex-col">
            <p className="border-b-2 border-light-gray pb-4">ความคิดเห็น :</p>
            <div className="overflow-auto">
                {
                    commentData ?
                        commentData.map((item, index) =>
                            <div key={IDBIndex} className="py-2 px-8 border-b-2 border-light-gray">
                                <p>{item.username}</p>
                                <StarRating rating={parseInt(item.rating)} size="text-md" />
                                <p className="text-xs">createAt : time</p>

                                <p className="text-sm mt-2">{item.text}</p>
                            </div>)
                        :
                        <p className="my-4">ขณะนี้ยังไม่มีรายการความคิดเห็น</p>
                }
            </div>
        </div>
    );
}

export default CommentTable;