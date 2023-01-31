function CommentTable({ commentData }) {
    return (
        <div className="flex-1 flex flex-col bg-purple-200">
            <p className="border-b-2 border-light-gray pb-4">ความคิดเห็น</p>
            <div className="bg-red-300 flex-1 overflow-auto">
                {commentData.map((item) =>
                    <div key={item.userId} className="py-2 border-b-2 border-light-gray">
                        <p>{item.userId}</p>
                        <p>{item.rating}</p>
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentTable;