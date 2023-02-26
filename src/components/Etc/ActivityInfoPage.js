import {
    DropdownButton,
    DropdownBody,
    DropdownMenu,
    Dropdown,
} from '../../components/Dropdown';
import Wrapper from '../Wrapper';

import { BsThreeDots } from 'react-icons/bs';
import { MdCheck, MdClose, MdAnalytics } from 'react-icons/md';

function HandlerDropdown({ state, setState, click }) {
    return (
        <div>
            <Wrapper state={state.dropState}
                click={() => setState({ ...state, dropState: !state.dropState })} />
            <div className={`absolute flex items-center right-0 top-[-68px]`}>
                <DropdownButton click={click}><MdAnalytics size="28px" /></DropdownButton>
                <Dropdown>
                    <DropdownButton click={() => setState({ ...state, dropState: true })}><BsThreeDots size="28px" /></DropdownButton>
                    <DropdownBody state={state.dropState} offset="right-0">
                        <DropdownMenu click={() => setState({ ...state, editState: true, dropState: false })}>แก้ไขรายละเอียด</DropdownMenu>
                        <DropdownMenu click={() => setState({ ...state, dropState: false, modalOpen: true })}>เปิดให้บริการ</DropdownMenu>
                        <DropdownMenu click={() => setState({ ...state, dropState: false, modalTempClose: true })}>ปิดปรับปรุงชั่วคราว</DropdownMenu>
                        <DropdownMenu click={() => setState({ ...state, dropState: false, modalClose: true })}>ปิดให้บริการ</DropdownMenu>
                        <DropdownMenu click={() => setState({ ...state, dropState: false, modalDelete: true })}>ลบกิจกรรม</DropdownMenu>
                    </DropdownBody>
                </Dropdown>
            </div>
        </div>
    );
}

function HandlerDropdownStaffAccount({ state, setState }) {
    return (
        <div>
            <Wrapper state={state.dropState}
                click={() => setState({ ...state, dropState: !state.dropState })} />
            <div className={`absolute right-0 top-[-68px]`}>
                <Dropdown>
                    <DropdownButton click={() => setState({ ...state, dropState: true })}><BsThreeDots size="28px" /></DropdownButton>
                    <DropdownBody state={state.dropState} offset="right-0">
                        <DropdownMenu click={() => setState({ ...state, editState: true, dropState: false })}>แก้ไขรายละเอียด</DropdownMenu>
                        <DropdownMenu click={() => setState({ ...state, dropState: false, modalDeleteAccount: true })}>ลบบัญชีพนักงาน</DropdownMenu>
                    </DropdownBody>
                </Dropdown>
            </div>
        </div>
    );
}

function HandlerEdit({ acceptEdit, declineEdit }) {
    return (
        <div className={`flex absolute right-0 top-[-68px]`}>
            <DropdownButton click={acceptEdit}>
                <MdCheck size="28px" className="text-accept" />
            </DropdownButton>
            <DropdownButton click={declineEdit}>
                <MdClose size="28px" className="text-decline" />
            </DropdownButton>
        </div>
    );
}

export { HandlerDropdown, HandlerDropdownStaffAccount, HandlerEdit };