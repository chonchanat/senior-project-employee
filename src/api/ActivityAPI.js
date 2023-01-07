import axios from "axios";

function getAllActivity() {
    axios.get("/activity/all")
        .then((response) => {
            console.log(response.data.data.data)
            return response.data.data.data;
        })
        .catch((error) => {
            console.log(error);
        })
}

function postActivity(data) {
    axios.post("/activity", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

function deleteActivity(data) {
    axios.delete(`/activity`, {
        code: data.code
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

function putActivity(data) {
    axios.put(`/activity`, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

export { getAllActivity, postActivity, deleteActivity, putActivity };