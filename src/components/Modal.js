import { ButtonHover, ButtonTransparent } from './Button';
import { AiOutlineDelete } from 'react-icons/ai';

function ModalDelete({ data, state, setState, click }) {
    return (
        <div className={`w-[600px] min-h-[240px] bg-white shadow-lg rounded-xl fixed top-[200px] left-[50%] translate-x-[-50%] z-50 flex flex-col overflow-auto
            ${state.modalState ? "top-[140px]" : "top-[120px] invisible"}`}
            style={{ transition: "all 0.1s ease-out" }}>
            <div className="px-6 py-4 flex flex-1 items-center">
                <AiOutlineDelete size="48px" className="bg-red-300 text-white rounded-full p-2 mr-4" />
                <div className="flex-1">
                    <p className="text-lg font-bold">ลบกิจกรรม</p>
                    <p className="py-2">คุณแน่ใจว่าต้องการลบ <label className="font-bold">{data.name[0]}</label> ออกจากรายการกิจกรรม ข้อมูลที่ถูกบันทึกทั้งหมดจะหายไปอย่างถาวร โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน</p>
                </div>
            </div>
            <div className="px-6 py-4 bg-[#F4F4F4] flex justify-end">
                <ButtonTransparent color="white" css="mr-6" width="w-24"
                    click={() => setState({ ...state, modalState: false })}>ยกเลิก</ButtonTransparent>
                <ButtonHover color="decline" click={click}>ยืนยัน</ButtonHover>
            </div>
        </div>
    );
}

export { ModalDelete };