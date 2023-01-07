// import axios from "./index";
import axios from "axios";

// function signin(username, password) {
//     axios.post(`http://localhost:8080/auth/login`, {
//         username: username,
//         password: password,
//     })
//         .then((response) => {
//             console.log(response.data)
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

async function signin(username, password) {
    try {
        const response = await axios.post(`http://localhost:8080/auth/login`, {
            username: username,
            password: password,
        })
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
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