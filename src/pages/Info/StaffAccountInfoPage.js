import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import StaffAccountInfo from '../../components/Info/StaffAccountInfo';
import { BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop } from '../../components/Block'
import SideMenuDesktop from '../../components/SideMenu/SideMenuDesktop';
import { HandlerEdit } from '../../components/Etc/ActivityInfoPage';

import { getOneStaff } from '../../api/userAPI';

function StaffAccountInfoPage() {

    const { id } = useParams();
    useEffect(() => {
        async function getAccount() {
            const data = await getOneStaff(id);
            setData(data);
            setBackupdata(data);
        }
        getAccount();
    }, [id]);

    const [data, setData] = useState(null);
    const [backupData, setBackupdata] = useState(null);
    const [state, setState] = useState({
        editState: false,
    });

    function acceptEdit() {
        setState({ ...state, editState: false })
        setBackupdata(data);
    }
    function declineEdit() {
        setState({ ...state, editState: false })
        setData(backupData);
    }

    return (
        <BlockDesktop>
            <SideMenuDesktop />
            <BlockDesktopRight>
                <HeadDesktop><p>ระบบบัญชีพนักงาน</p></HeadDesktop>
                <ContentDesktop>
                    <HeadContentDesktop>
                        <p>รายชื่อพนักงาน</p>
                    </HeadContentDesktop>
                    {data &&
                        <div className="relative">
                            {state.editState ?
                                <HandlerEdit acceptEdit={acceptEdit} declineEdit={declineEdit} />
                                :
                                <p className="absolute right-0 top-[-60px] text-sm cursor-pointer" onClick={() => setState({ ...state, editState: true })}>แก้ไขบัญชี</p>
                            }
                            <StaffAccountInfo data={data} setData={setData} state={state} />
                        </div>
                    }
                </ContentDesktop>
            </BlockDesktopRight>
        </BlockDesktop>
    );
}

export default StaffAccountInfoPage;