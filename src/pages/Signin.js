import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '../components/Button';
import Spinner from "../components/Spinner";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAuthAsync } from "../actions/authActions";

function Signin() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const authReducer = useSelector(state => state.authReducer);
    // console.log(authReducer);
    const statusReducer = useSelector(state => state.statusReducer);
    // console.log(statusReducer)

    // After successful signin
    useEffect(() => {
        function signinWithAuth() {
            if(authReducer){
                navigate('/staff-activity')
            }
        };
        signinWithAuth();
    }, [authReducer, navigate]);

    const [user, setUser] = useState({
        email: "chonchanat.t@ku.th",
        password: "12345",
    });
    const [noti, setNoti] = useState(null);

    function handlerSignin() {
        if (user.email && user.password) {
            setNoti(null);
            dispatch(fetchAuthAsync(user.email, user.password));
        } else {
            setNoti("Please enter your email and password");
        }
    }

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl">
                <div className="w-96 h-full px-10 pb-20 pt-16">
                    <div className="pb-16 text-center text-3xl font-bold">
                        <p className="">Ku Que</p>
                        <p className="text-xl">Employee Login</p>
                    </div>
                    <div>
                        <div className="pb-6">
                            <p className="pb-2">Email</p>
                            <input className="w-full bg-light-blue py-2 px-4 rounded-md" type="email"
                                placeholder="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className="pb-6">
                            <p className="pb-2">Password</p>
                            <input className="w-full bg-light-blue py-2 px-4 rounded-md" type="password"
                                placeholder="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <p className="h-[28px] text-right text-sm text-decline pt-2">{noti ? noti : statusReducer.error}</p>
                        </div>

                        <Button bgColor="bg-accept" font="font-bold" click={handlerSignin}>
                            {statusReducer.loading ?
                                <Spinner color="white" />
                                :
                                "Login"
                            }
                        </Button>
                        <p className="text-right text-sm pt-2 hover:underline cursor-pointer">Forget Password?</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;