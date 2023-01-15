// import {
//     DropdownButton,
// } from '../Dropdown';

// import { MdCheck, MdClose } from 'react-icons/md'


function StaffAccountInfo({ data, setData, state }) {

    // const [data, setData] = useState(selectData);

    // function acceptEdit() {
    //     setBackupdata(data);
    // }
    // function declineEdit() {
    //     setData(backupData);
    // }

    return (
        <div className="flex flex-col items-center relative">
            {/* {state.editState && <p className="absolute right-0 top-[-60px] text-sm cursor-pointer" onClick={() => setState({ ...state, editState: false })}>แก้ไขบัญชี</p>} */}
            {/* <HandlerEditState state={state} setState={setState} acceptEdit={acceptEdit} declineEdit={declineEdit} /> */}
            <div className="w-[650px] flex justify-between items-center mb-4">ชื่อ
                <input type="text" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.firstname}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">นามสกุล
                <input type="text" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.lastname}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">เบอร์โทร
                <input type="tel" className={`bg-light-blue w-[500px] h-[36px] rounded-md px-6`}
                    value={data.phone}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">อีเมล์
                <input type="email" className="bg-light-blue w-[500px] h-[36px] rounded-md px-6"
                    value={data.email}
                    disabled={true} />
            </div>
            <div className="w-[650px] flex justify-between items-center mb-4">ตำแหน่ง
                <div className="w-[500px]">
                    <input type="checkbox"
                        disabled={!state.editState}
                        checked={data.role === "admin"}
                        onChange={() => setData({ ...data, role: "admin" })} />
                    <label className="ml-4 mr-20">Administrator</label>
                    <input type="checkbox"
                        disabled={!state.editState}
                        checked={data.role === "staff"}
                        onChange={() => setData({ ...data, role: "staff" })} />
                    <label className="ml-4">Staff</label>
                </div>
            </div>
        </div>
    );
}

// function HandlerEditState({ state, setState, acceptEdit, declineEdit }) {
//     return (
//         <div className={`absolute right-0 top-[-68px] ${state.editState ? "hidden" : "block flex"}`}>
//             <DropdownButton click={() => { setState({ ...state, editState: true }); acceptEdit() }}>
//                 <MdCheck size="28px" className="text-accept" />
//             </DropdownButton>
//             <DropdownButton click={() => { setState({ ...state, editState: true }); declineEdit() }}>
//                 <MdClose size="28px" className="text-decline" />
//             </DropdownButton>
//         </div>
//     );
// }

export default StaffAccountInfo;