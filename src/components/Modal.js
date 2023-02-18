import { ButtonTransparent } from './Button';
import Wrapper from './Wrapper';

import { AiOutlineDelete } from 'react-icons/ai';
import { BiTrafficCone, BiTime } from 'react-icons/bi';

const styleModal = "w-[600px] min-h-[240px] bg-white shadow-lg rounded-xl fixed top-[200px] left-[50%] translate-x-[-50%] z-50 flex flex-col overflow-auto";

function ModalDelete({ data, state, setState, click }) {
    return (
        <div>
            <Wrapper state={state.modalDelete} bgColor="bg-black/20"
                click={() => setState({ ...state, modalDelete: false })} />

            <div className={`${styleModal}
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
                        click={() => setState({ ...state, modalDelete: false })}>ยกเลิก</ButtonTransparent>
                    <div className="w-24 p-2 bg-decline rounded-md border-2 border-decline text-center text-white text-sm cursor-pointer hover:text-decline hover:bg-white transition ease-in-out duration-150"
                        onClick={click}>
                        <p>ยืนยัน</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalClose({ data, state, setState, click }) {
    return (
        <div>
            <Wrapper state={state.modalClose} bgColor="bg-black/20"
                click={() => setState({ ...state, modalClose: false })} />

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
                        click={() => setState({ ...state, modalClose: false })}>ยกเลิก</ButtonTransparent>
                    <div className="w-24 p-2 bg-orange-300 rounded-md border-2 border-orange-300 text-center text-white text-sm cursor-pointer hover:text-orange-300 hover:bg-white transition ease-in-out duration-150"
                        onClick={click}>
                        <p>ยืนยัน</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalTempClose({ data, state, setState, click }) {
    return (
        <div>
            <Wrapper state={state.modalTempClose} bgColor="bg-black/20"
                click={() => setState({ ...state, modalTempClose: false })} />
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
                        click={() => setState({ ...state, modalTempClose: false })}>ยกเลิก</ButtonTransparent>
                    <div className="w-24 p-2 bg-yellow rounded-md border-2 border-yellow text-center text-white text-sm cursor-pointer hover:text-yellow hover:bg-white transition ease-in-out duration-150"
                        onClick={click}>
                        <p>ยืนยัน</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalDeleteAccount({ data, state, setState, click }) {
    return (
        <div>
            <Wrapper state={state.modalDeleteAccount} bgColor="bg-black/20"
                click={() => setState({ ...state, modalDeleteAccount: false })} />

            <div className={`${styleModal}
            ${state.modalDeleteAccount ? "top-[140px]" : "top-[120px] invisible"}`}
                style={{ transition: "all 0.1s ease-out" }}>
                <div className="px-6 py-4 flex flex-1 items-center">
                    <AiOutlineDelete size="48px" className="bg-red-300 text-white rounded-full p-2 mr-4" />
                    <div className="flex-1">
                        <p className="text-lg font-bold">ลบพนักงาน</p>
                        <p className="py-2">คุณแน่ใจว่าต้องการลบ <label className="font-bold">{data.firstname} {data.lastname}</label> ออกจากบัญชีพนักงาน ข้อมูลที่ถูกบันทึกทั้งหมดจะหายไปอย่างถาวร โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน</p>
                    </div>
                </div>
                <div className="px-6 py-4 bg-[#F4F4F4] flex justify-end">
                    <ButtonTransparent color="white" css="mr-6" width="w-24"
                        click={() => setState({ ...state, modalDeleteAccount: false })}>ยกเลิก</ButtonTransparent>
                    <div className="w-24 p-2 bg-decline rounded-md border-2 border-decline text-center text-white text-sm cursor-pointer hover:text-decline hover:bg-white transition ease-in-out duration-150"
                        onClick={click}>
                        <p>ยืนยัน</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ModalDelete, ModalClose, ModalTempClose, ModalDeleteAccount };