import { useNavigate } from 'react-router-dom'

import { CgProfile } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { RiArtboardFill, RiGamepadFill } from 'react-icons/ri';
import { MdPeople } from 'react-icons/md';
import { GiBilledCap } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';

function SideMenuDesktop() {

    const navigate = useNavigate();

    return (
        <div className="h-full">
            <div className="w-[50px] h-full bg-fha-desktop rounded-xl drop-shadow-xl mx-4 xl:w-[300px] xl:px-6 xl:pt-6 xl:pb-4 hidden xl:block">
                <div className="h-[10%] border-b-2 border-white flex">
                    <div className="pr-2">
                        <CgProfile size="56px" color="black" />
                    </div>
                    <div className="truncate pt-1">
                        <p className="text-xl font-bold">Chonchanat Tubtiang</p>
                        <p>Adminstrator</p>
                    </div>
                </div>
                <div className="h-[75%] py-4 font-bold text-white">
                    <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                        <AiFillHome size="20px" />
                        <p className="pl-2">หน้าหลัก</p>
                    </div>
                    <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                        <RiArtboardFill size="20px" />
                        <p className="pl-2">Dashboard</p>
                    </div>
                    <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer"
                        onClick={() => navigate("/staff-customer-account")}>
                        <MdPeople size="20px" />
                        <p className="pl-2">ระบบบัญชีลูกค้า</p>
                    </div>
                    <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer"
                        onClick={() => navigate("/staff-account")}>
                        <GiBilledCap size="20px" />
                        <p className="pl-2">ระบบบัญชีพนักงาน</p>
                    </div>
                    <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer"
                        onClick={() => navigate("/staff-activity")}>
                        <RiGamepadFill size="20px" />
                        <p className="pl-2">กิจกรรมทั้งหมด</p>
                    </div>
                </div>
                <div className="h-[15%] border-t-2 border-white">
                    <div className="h-[75%] py-4 font-bold text-white">
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer"
                            onClick={() => navigate("/staff-setting")}>
                            <IoMdSettings size="20px" />
                            <p className="pl-2">ตั้งค่าบัญชี</p>
                        </div>
                        <div className="px-5 py-3 rounded-md hover:bg-white hover:text-black flex cursor-pointer">
                            <BiLogOut size="20px" />
                            <p className="pl-2">ออกจากระบบ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[50px] h-[800px] px-1 flex flex-col bg-fha-desktop rounded-xl drop-shadow-xl mx-4 block xl:hidden">
                <div className="h-[100px] border-b-2 border-white flex justify-center items-center">
                    <CgProfile size="40px" color="white" />
                </div>
                <div className="h-full py-4 font-bold text-white flex-col flex items-center pt-10">
                    <AiFillHome size="28px" className="mb-6 cursor-pointer hover:text-black"/>
                    <RiArtboardFill size="28px" className="mb-6 cursor-pointer hover:text-black"/>
                    <MdPeople size="28px" className="mb-6 cursor-pointer hover:text-black"/>
                    <GiBilledCap size="28px" className="mb-6 cursor-pointer hover:text-black"/>
                    <RiGamepadFill size="28px" className="mb-6 cursor-pointer hover:text-black"/>
                </div>
                <div className="h-[120px] py-4 border-t-2 border-white text-white flex-col flex items-center justify-center">
                    <IoMdSettings size="28px" className="mb-4 cursor-pointer hover:text-black"/>
                    <BiLogOut size="28px" className="cursor-pointer hover:text-black"/>
                </div>
            </div>
        </div>
    );
}

export default SideMenuDesktop;