import { ButtonHover, ButtonTransparent } from './Button';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiTrafficCone, BiTime } from 'react-icons/bi';

const styleModal = "w-[600px] min-h-[240px] bg-white shadow-lg rounded-xl fixed top-[200px] left-[50%] translate-x-[-50%] z-50 flex flex-col overflow-auto";

function ModalDelete({ data, state, setState, click }) {
    return (
        <div className={`w-[600px] min-h-[240px] bg-white shadow-lg rounded-xl fixed top-[200px] left-[50%] translate-x-[-50%] z-50 flex flex-col overflow-auto
            ${state.modalDelete ? "top-[140px]" : "top-[120px] invisible"}`}
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
                    click={() => setState({ ...state, modalState: false, modalDelete: false })}>ยกเลิก</ButtonTransparent>
                <ButtonHover click={click} color="decline">ยืนยัน</ButtonHover>
            </div>
        </div>
    );
}

function ModalClose({ data, state, setState, click }) {
    return (
        <div className={`${styleModal}
            ${state.modalClose ? "top-[140px]" : "top-[120px] invisible"}`}
            style={{ transition: "all 0.1s ease-out" }}>
            <div className="px-6 py-4 flex flex-1 items-center">
                <BiTrafficCone size="48px" className="bg-orange-300 text-white rounded-full p-2 mr-4" />
                <div className="flex-1">
                    <p className="text-lg font-bold">ปิดให้บริการ</p>
                    <p className="py-2">คุณแน่ใจว่าต้องการปิดให้บริการ <label className="font-bold">{data.name[0]}</label> คิวทั้งหมดจะถูกล้างและสามารถกดเปิดให้บริการได้ในภายหลัง</p>
                </div>
            </div>
            <div className="px-6 py-4 bg-[#F4F4F4] flex justify-end">
                <ButtonTransparent color="white" css="mr-6" width="w-24"
                    click={() => setState({ ...state, modalState: false, modalClose: false })}>ยกเลิก</ButtonTransparent>
                <ButtonHover click={click} color="orange-300">ยืนยัน</ButtonHover>
            </div>
        </div>
    );
}

function ModalTempClose({ data, state, setState, click }) {
    return (
        <div className={`${styleModal}
            ${state.modalTempClose ? "top-[140px]" : "top-[120px] invisible"}`}
            style={{ transition: "all 0.1s ease-out" }}>
            <div className="px-6 py-4 flex flex-1 items-center">
                <BiTime size="48px" className="bg-yellow text-white rounded-full p-2 mr-4" />
                <div className="flex-1">
                    <p className="text-lg font-bold">ปิดปรับปรุงชั่วคราว</p>
                    <p className="py-2">คุณแน่ใจว่าต้องการปิดปรับปรุงชั่วคราว <label className="font-bold">{data.name[0]}</label> คิวทั้งหมดจะถูกล้างและสามารถกดเปิดให้บริการได้ในภายหลัง</p>
                </div>
            </div>
            <div className="px-6 py-4 bg-[#F4F4F4] flex justify-end">
                <ButtonTransparent color="white" css="mr-6" width="w-24"
                    click={() => setState({ ...state, modalState: false, modalTempClose: false })}>ยกเลิก</ButtonTransparent>
                <ButtonHover click={click} color="yellow">ยืนยัน</ButtonHover>
            </div>
        </div>
    );
}

export { ModalDelete, ModalClose, ModalTempClose };