import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { getOneActivity } from '../../api/activityAPI';
import Wrapper from '../../components/Wrapper';
import { ModalClose, ModalDelete, ModalTempClose } from '../../components/Modal';
import ActivityInfo from '../../components/Info/ActivityInfo';
import { deleteActivity } from '../../api/activityAPI';
import { HandlerDropdown, HandlerEdit} from '../../components/Etc/ActivityInfoPage';

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
        dropState: false,
        editState: true,
        modalState: false,
        modalDelete: false,
        modalClose: false,
        modalTempClose: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: true })
        setBackupdata(data);
    }
    function declineEdit() {
        setState({ ...state, editState: true })
        setData(backupData);
    }
    function handlerTempClose() {
        setState({ ...state, modalState: false, modalTempClose: false });
        console.log('Temporary Close')
    }
    function handlerClose() {
        setState({ ...state, modalState: false, modalClose: false });
        console.log('Close')
    }
    function handlerDelete() {
        setState({ ...state, modalState: false, modalDelete: false });
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
                        <p>รายชื่อกิจกรรม</p>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">
                            <Wrapper state={state.dropState}
                                click={() => setState({ ...state, dropState: !state.dropState })} />
                            <Wrapper state={state.modalState} bgColor="bg-black/20"
                                click={() => setState({ ...state, modalState: false, modalDelete: false, modalClose: false, modalTempClose: false })} />

                            <ModalTempClose data={data} state={state} setState={setState} click={handlerTempClose} />
                            <ModalClose data={data} state={state} setState={setState} click={handlerClose} />
                            <ModalDelete data={data} state={state} setState={setState} click={handlerDelete} />

                            <HandlerDropdown data={data} state={state} setState={setState} />
                            <HandlerEdit state={state} acceptEdit={acceptEdit} declineEdit={declineEdit} />

                            <ActivityInfo data={data} setData={setData} state={state} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default ActivityInfoPage;