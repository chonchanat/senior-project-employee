import { useSelector } from 'react-redux';

import Spinner from '../Spinner'

function CommentTable({ commentData }) {

    const statusReducer = useSelector(state => state.statusReducer);

    return (
        statusReducer.loading ?
            <div className="flex justify-center py-10">
                <Spinner color="black" />
                <label>กำลังโหลดข้อมูล</label>
            </div>
            :
            <div className="flex-1 h-[480px]">
                <p className="border-b-2 border-light-gray pb-4">ตวามคิดเห็น</p>
                <div className="h-full overflow-auto">
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