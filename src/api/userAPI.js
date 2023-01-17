import axios from "./index";

import Cookies from "js-cookie";
const token = Cookies.get("accesstoken");

async function signin(username, password) {
    const user = await axios.post(`/auth/login`, {
        username: username,
        password: password,
    })
    if(user.data.user.role === "customer") {
        throw new Error("Not found user");
    }
    return user;
    // try {
    //     const response = await axios.post(`/auth/login`, {
    //         username: username,
    //         password: password,
    //     })
    //     return response;
    // } catch (error) {
    //     return error.response;
    // }
}

async function getAllStaff() {
    try {
        const response = await axios.get(`/auth/user/all`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.user;
    } catch (error) {
        console.log(error);
    }
}

async function getOneStaff(data) {
    try {
        const response = await axios.get(`/auth/user/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.user;
    } catch (error) {
        console.log(error);
    }
}

async function register(data) {
    try {
        const response = await axios.post(`/auth/register`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

async function updateUser(data) {
    return await axios.put(`/auth/user`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    // try {
    //     const response = await axios.put(`/auth/user`, data, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     console.log(response)
    // } catch (error) {
    //     console.log(error)
    // }
}

async function deleteUser(data) {
    try {
        const response = await axios.delete(`/auth/user`, { username: data.username }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
        window.location.reload(true)
    } catch (error) {
        console.log(error)
    }
}

export { signin, getAllStaff, getOneStaff, register, updateUser, deleteUser };