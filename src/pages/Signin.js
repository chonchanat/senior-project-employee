import { useState } from "react";

import { Button } from '../components/Button';

function Signin() {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    return (
        <div className="h-screen bg-fha flex items-center justify-center">
            <div>
                <div className="w-80 h-full px-6 pb-20">
                    <div className="pb-24">
                        <p className="text-center text-white text-3xl font-bold">Camel Republic</p>
                        <p className="text-center text-white text-3xl font-bold">Staff Login</p>
                    </div>
                    <div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Username</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="username"
                                onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </div>
                        <div className="pb-6">
                            <p className="text-white pb-2">Password</p>
                            <input className="w-full py-2 px-4 rounded-md"
                                placeholder="password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <p className="text-right text-sm text-white pt-2 hover:underline">Forget Password?</p>
                        </div>

                        <Button title="Login" bgColor="bg-accept" font="font-bold" link="/customer-home" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;