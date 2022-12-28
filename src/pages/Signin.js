import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '../components/Button';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAuthAsync } from "../actions/authActions";

function Signin() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = useSelector(state => state.authReducer);
    // console.log(auth);
    const statusReducer = useSelector(state => state.statusReducer);
    // console.log(statusReducer)

    // After successful signin
    if (auth) {
        navigate('/staff-activity')
    }

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function handlerSignin() {
        if (user.email && user.password) {
            dispatch(fetchAuthAsync(user.email, user.password));
        }
    }

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl">
                <div className="w-96 h-full px-10 pb-20 pt-16">
                    <div className="pb-16 text-center text-3xl font-bold">
                        <p className="">Ku Que</p>
                        <p className="text-2xl">Staff Login</p>
                    </div>
                    <div>
                        <div className="pb-6">
                            <p className="pb-2">Email</p>
                            <input className="w-full py-2 px-4 rounded-md border border-light-blue"
                                placeholder="email"
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className="pb-6">
                            <p className="pb-2">Password</p>
                            <input className="w-full py-2 px-4 rounded-md border border-light-blue"
                                placeholder="password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <p className="h-[28px] text-right text-sm text-decline pt-2">{statusReducer.error}</p>
                        </div>

                        <Button bgColor="bg-accept" font="font-bold" click={handlerSignin}>
                            {statusReducer.loading ?
                                <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                :
                                "Login"
                            }
                        </Button>
                        <p className="text-right text-sm pt-2 hover:underline">Forget Password?</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;