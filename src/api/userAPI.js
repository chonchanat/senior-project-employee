// import axios from "./index";
import axios from "axios";

function signin(username, password) {
    axios.post(`http://localhost:8080/auth/login`, {
        username: username,
        password: password,
    })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        })
}

function getAllUser() {
    axios.get("/auth/user/all")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

function deleteUser(data) {
    axios.delete("/auth/user", {
        username: data.username,
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

export { signin, getAllUser, deleteUser };