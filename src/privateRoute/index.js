import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Cookies from 'js-cookie';
import { useEffect } from "react";
import { setAuth } from "../actions/authActions";

function PrivateRoute({ children }) {

    const dispatch = useDispatch();
    const reducers = useSelector(state => state);
    // console.log(reducers);
    const userCookie = Cookies.get("userCookie");

    useEffect(() => {
        if (userCookie) {
            dispatch(setAuth(JSON.parse(userCookie)));
        }
    }, [userCookie, dispatch]);

    if (reducers.authReducer) {
        return userCookie !== undefined ? children : <Navigate to="/signin" />;
    }
    if (reducers.authReducer === null) {
        return <Navigate to="/signin" />;
    }
}

export default PrivateRoute;