import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const { auth } = useSelector(state => state.authReducer);
    console.log("auth :", auth);

    return auth ? children : <Navigate to="/signin"/>;
}

export default PrivateRoute;