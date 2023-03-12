import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';
import { useEffect } from "react";
import { fetchUserData } from "../actions/authActions";

import { Buffer } from 'buffer';
Buffer.from('anything', 'base64');

function PrivateRoute({ children }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reducers = useSelector(state => state);
    const accessToken = Cookies.get("accessToken");

    // check accessToken in Cookies browser
    useEffect(() => {
        if (accessToken) {
            const accessTokenObj = getOpenIDConnect(accessToken);
            // check role user, have must admin or employee role
            if (accessTokenObj.role !== "customer") {
                // call to fetch userData to save in authReducer
                dispatch(fetchUserData(accessTokenObj.username))
            } else {
                navigate("/staff-signin");
            }
        }
    }, [accessToken, dispatch])

    // have no accessToken and redirect to signin page
    if (accessToken === undefined) {
        return <Navigate to="/customer-signin" />;
    }

    // have accessToken and redirect to page
    if (reducers.authReducer) {
        return children;
    }
}

export function getOpenIDConnect(id_token) {
    const openidBase64 = (id_token).split(".")[1];
    if (!openidBase64) return "";
    const buff = Buffer.from(openidBase64, "base64");
    return JSON.parse(buff.toString("utf-8"));
}

export default PrivateRoute;