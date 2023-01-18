import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';

import { getOneActivity } from '../../api/activityAPI';
import { ModalClose, ModalDelete, ModalTempClose } from '../../components/Modal';
import ActivityInfo from '../../components/Info/ActivityInfo';
import { deleteActivity } from '../../api/activityAPI';
import { HandlerDropdown, HandlerEdit } from '../../components/Etc/ActivityInfoPage';

import { IoIosArrowBack } from 'react-icons/io';

function ActivityInfoPage() {

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        async function getActivity() {
            const data = await getOneActivity(id);
            setData(data);
            setBackupdata(data)
        }
        getActivity();
    }, [id])

    const [data, setData] = useState(null);
    const [backupData, setBackupdata] = useState(null);
    const [state, setState] = useState({
        editState: false,
        modalDelete: false,
        modalClose: false,
        modalTempClose: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: false })
        setBackupdata(data);
    }
    function declineEdit() {
        setState({ ...state, editState: false })
        setData(backupData);
    }
    function handlerTempClose() {
        setState({ ...state, modalTempClose: false });
        console.log('Temporary Close')
    }
    function handlerClose() {
        setState({ ...state, modalClose: false });
        console.log('Close')
    }
    function handlerDelete() {
        setState({ ...state, modalDelete: false });
        deleteActivity(data);
        navigate("/staff-activity")
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กิจกรรมทั้งหมด</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex items-center">
                            <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => navigate("/staff-activity")}/>
                            <p>{data && data.name[0]}</p>
                        </div>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">

                            <ModalTempClose data={data} state={state} setState={setState} click={handlerTempClose} />
                            <ModalClose data={data} state={state} setState={setState} click={handlerClose} />
                            <ModalDelete data={data} state={state} setState={setState} click={handlerDelete} />

                            {state.editState ?
                                <HandlerEdit acceptEdit={acceptEdit} declineEdit={declineEdit} />
                                :
                                <HandlerDropdown state={state} setState={setState} />
                            }

                            <ActivityInfo data={data} setData={setData} state={state} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default ActivityInfoPage;