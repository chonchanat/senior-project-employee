import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '../components/Button';

import { useDispatch } from "react-redux";
import { setAuth } from "../actions/authActions";

function Signin() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "a",
        password: "a",
    });

    function handlerSignin() {
        if (user.email && user.password) {
            dispatch(setAuth(user))
            navigate("/staff-activity")
        }
    }

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div>
                <div className="w-80 h-full px-6 pb-20">
                    <div className="pb-24">
                        <p className="text-center text-white text-3xl font-bold">Ku Que</p>
                        <p className="text-center text-white text-2xl font-bold">Staff Login</p>
                    </div>
                    <div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Email</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="email"
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Password</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <p className="text-right text-sm text-white pt-2 hover:underline">Forget Password?</p>
                        </div>

                        <Button title="Login" bgColor="bg-accept" font="font-bold" click={handlerSignin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;