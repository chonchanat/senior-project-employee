import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonSubmit } from '../components/Button';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAuthAsync, fetchUserData } from "../actions/authActions";

import { getOpenIDConnect } from '../privateRoute/index.js';

import Cookies from 'js-cookie';

function Signin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);
    const statusReducer = useSelector(state => state.statusReducer);
    const accesToken = Cookies.get("accessToken");

    // fetch accesToken
    useEffect(() => {
        function signinWithToken() {
            if (accesToken) {
                const username = getOpenIDConnect(accesToken).username;
                //call to fetch userData to save in authReducer
                dispatch(fetchUserData(username))
            }
        }
        signinWithToken();
    }, [accesToken])

    // redirect to home if have authReducer (user data)
    useEffect(() => {
        function redirectWithAuth() {
            if(authReducer) navigate("/staff-dashboard");
        }
        redirectWithAuth();
    }, [authReducer])

    const [user, setUser] = useState({
        email: "t.chonchanat@hotmail.com",
        password: "12345",
    });

    function handlerSignin(e) {
        e.preventDefault();
        dispatch(fetchAuthAsync(user.email, user.password));
    }

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl">
                <div className="w-96 h-full px-10 pb-20 pt-16">
                    <div className="pb-16 text-center text-3xl font-bold">
                        <p className="">Ku Que</p>
                        <p className="text-xl">Employee Login</p>
                    </div>
                    <form onSubmit={handlerSignin}>
                        <div className="pb-6">
                            <p className="pb-2">Email</p>
                            <input className="w-full bg-light-blue py-2 px-4 rounded-md"
                                required
                                placeholder="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className="pb-6">
                            <p className="pb-2">Password</p>
                            <input className="w-full bg-light-blue py-2 px-4 rounded-md" type="password"
                                required
                                placeholder="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <p className="h-[28px] text-right text-sm text-decline pt-2">{statusReducer.error}</p>
                        </div>

                        <ButtonSubmit width="w-full" bgColor="bg-accept" font="font-bold" title="Login"/>
                        <p className="text-right text-sm pt-2 hover:underline cursor-pointer">Forget Password?</p>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;