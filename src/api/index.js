import axios from "axios";

const token = "";

axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.headers.common = {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
// }

export default axios;