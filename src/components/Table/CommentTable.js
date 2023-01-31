function CommentTable({ commentData }) {
    return (
        <div className="flex-1 flex flex-col">
            <p className="border-b-2 border-light-gray pb-4">ความคิดเห็น :</p>
            <div className="flex-1 overflow-auto">
                {
                    commentData.length ?
                        commentData.map((item) =>
                            <div key={item.userId} className="py-2 px-8 border-b-2 border-light-gray">
                                <p>{item.userId}</p>
                                <p>{item.rating}</p>
                                <p>{item.text}</p>
                            </div>)
                        :
                        <p className="my-4">ขณะนี้ยังไม่มีรายการความคิดเห็น</p>
                }
            </div>
        </div>
    );
}

export default CommentTable;