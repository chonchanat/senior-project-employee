import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const reducers = useSelector(state => state);
    // console.log(reducers);

    return reducers.authReducer ? children : <Navigate to="/signin"/>;
}

export default PrivateRoute;