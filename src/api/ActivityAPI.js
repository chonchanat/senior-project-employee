import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080',
})

function getActivityAPI() {
    axios.get("http://localhost:8080/activity/all")
        .then((response) => {
            console.log(response.data.data.data)
            return response.data.data.data;
        })
        .catch((error) => {
            console.log(error);
        })
}

function postActivityAPI(data) {
    axios.post("http://localhost:8080/activity", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

export { getActivityAPI, postActivityAPI };