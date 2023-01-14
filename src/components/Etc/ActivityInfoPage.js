import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../../components/Dropdown';
import { BsThreeDots } from 'react-icons/bs';
import { MdCheck, MdClose } from 'react-icons/md';

function HandlerDropdown({ state, setState }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "block" : "hidden"}`}>
            <Dropdown>
                <DropdownButton click={() => setState({ ...state, dropState: true })}><BsThreeDots size="28px" /></DropdownButton>
                <DropdownBody state={state.dropState} offset="right-0">
                    <DropdownMenu click={() => setState({ ...state, editState: false, dropState: false })}>แก้ไขรายละเอียด</DropdownMenu>
                    <DropdownMenu click={() => setState({ ...state, dropState: false, modalState: true, modalTempClose: true })}>ปิดปรับปรุงชั่วคราว</DropdownMenu>
                    <DropdownMenu click={() => setState({ ...state, dropState: false, modalState: true, modalClose: true })}>ปิดให้บริการ</DropdownMenu>
                    <DropdownMenu click={() => setState({ ...state, dropState: false, modalState: true, modalDelete: true })}>ลบกิจกรรม</DropdownMenu>
                </DropdownBody>
            </Dropdown>
        </div>
    );
}

function HandlerEdit({ state, acceptEdit, declineEdit }) {
    return (
        <div className={`absolute right-0 top-[-68px] ${state.editState ? "hidden" : "block flex"}`}>
            <DropdownButton click={acceptEdit}>
                <MdCheck size="28px" className="text-accept" />
            </DropdownButton>
            <DropdownButton click={declineEdit}>
                <MdClose size="28px" className="text-decline" />
            </DropdownButton>
        </div>
    );
}

export { HandlerDropdown, HandlerEdit};