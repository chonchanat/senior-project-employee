import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="h-[50px] w-full bg-fha fixed top-0 z-50 flex items-center px-4">
                <p className="text-lg sm:text-2xl font-bold text-white" onClick={() => navigate("/customer-home")}>Camel Republic</p>
            </div>
        </>
    );
}

function StaticNavbar() {
    return (
        <div className="h-[50px] w-full bg-fha fixed top-0 z-50 flex items-end px-4 py-3">
            <p className="text-lg sm:text-2xl font-bold text-white">Camel Republic</p>
            <p className="pl-2 text-white hidden sm:block">Senior Project</p>
        </div>
    );
}

export { Navbar, StaticNavbar };