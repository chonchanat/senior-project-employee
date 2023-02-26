import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { ModalOpen, ModalClose, ModalDelete, ModalTempClose } from '../../components/Modal';
import ActivityInfo from '../../components/Info/ActivityInfo';
import { HandlerDropdown, HandlerEdit } from '../../components/Etc/ActivityInfoPage';

import { IoIosArrowBack } from 'react-icons/io';

import { getOneActivity, deleteActivity, putActivity } from '../../api/activityAPI';

import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function ActivityInfoPage() {

    const navigate = useNavigate();
    const { code } = useParams();
    useEffect(() => {
        async function getActivity() {
            const data = await getOneActivity(code);
            setData(data);
            setBackupData(data);
            setNameForm({ th: data.name[0], eng: data.name[1] });
            setPositionForm({ x: data.position[0], y: data.position[1] });
        }
        getActivity();
    }, [code])

    const [data, setData] = useState(null);
    const [backupData, setBackupData] = useState(null);
    const [nameForm, setNameForm] = useState(null)
    const [positionForm, setPositionForm] = useState(null);
    const [state, setState] = useState({
        editState: false,
        modalOpen: false,
        modalDelete: false,
        modalClose: false,
        modalTempClose: false,
    });

    const imageRef = useRef();


    function acceptEdit() {
        setState({ ...state, editState: false });
        setBackupData({ ...data, name: [nameForm.th, nameForm.eng], position: [positionForm.x, positionForm.y] });
        // putActivity({ ...data, name: [nameForm.th, nameForm.eng], position: [positionForm.x, positionForm.y] });
        if (typeof (data.picture) !== "string") {
            const pictureName = data.picture.name.split(".").slice(0, -1).join("");
            const pictureFirebaseRef = ref(storage, pictureName);
            uploadBytes(pictureFirebaseRef, data.picture)
                .then(() => {
                    getDownloadURL(pictureFirebaseRef)
                        .then((url) => {
                            const updateData = { ...data, name: [nameForm.th, nameForm.eng], picture: url, position: [positionForm.x, positionForm.y] }
                            putActivity(updateData);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            putActivity({ ...data, name: [nameForm.th, nameForm.eng], position: [positionForm.x, positionForm.y] });
        }
    }
    function declineEdit() {
        setState({ ...state, editState: false });
        setData(backupData);
        setNameForm({ th: backupData.name[0], eng: backupData.name[1] });
        setPositionForm({ x: backupData.position[0], y: backupData.position[1] });
    }

    function handlerOpen() {
        setState({ ...state, modalOpen: false });
        putActivity({ ...data, status: "open" })
    }
    function handlerTempClose() {
        setState({ ...state, modalTempClose: false });
        putActivity({ ...data, status: "temporarily closed" })
    }
    function handlerClose() {
        setState({ ...state, modalClose: false });
        putActivity({ ...data, status: "closed" })
    }
    function handlerDelete() {
        setState({ ...state, modalDelete: false });
        deleteActivity(data);
        navigate("/staff-activity")
    }

    function handlerDashboard() {
        navigate(`/staff-dashboard/${code}`)
    }

    function handlerChangeImage(e) {
        if (e.target.files[0]) {
            setData({ ...data, picture: e.target.files[0] });
        }
    }
    function handlerUploadImage() {
        if (state.editState) {
            imageRef.current.click();
        }
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>กิจกรรมทั้งหมด</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <div className="flex items-center">
                            <IoIosArrowBack size="24px" className="cursor-pointer hover:text-[#c7c7c7] mr-2" onClick={() => navigate("/staff-activity")} />
                            <p>{data && backupData.name[0]}</p>
                        </div>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">

                            <ModalOpen data={data} state={state} setState={setState} click={handlerOpen} />
                            <ModalTempClose data={data} state={state} setState={setState} click={handlerTempClose} />
                            <ModalClose data={data} state={state} setState={setState} click={handlerClose} />
                            <ModalDelete data={data} state={state} setState={setState} click={handlerDelete} />

                            {state.editState ?
                                <HandlerEdit acceptEdit={acceptEdit} declineEdit={declineEdit} />
                                :
                                <HandlerDropdown state={state} setState={setState} click={handlerDashboard} />
                            }

                            <ActivityInfo data={data}
                                setData={setData}
                                state={state}
                                nameForm={nameForm}
                                setNameForm={setNameForm}
                                positionForm={positionForm}
                                setPositionForm={setPositionForm}
                                imageRef={imageRef}
                                handlerChangeImage={handlerChangeImage}
                                handlerUploadImage={handlerUploadImage} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default ActivityInfoPage;