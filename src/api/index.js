import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.headers.common = {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
// }

export function getToken() {
    return Cookies.get("accessToken");
}

export default axios;