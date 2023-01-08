import axios from "./index";

import Cookies from "js-cookie";
const token = Cookies.get("accesstoken");

async function signin(username, password) {
    try {
        const response = await axios.post(`/auth/login`, {
            username: username,
            password: password,
        })
        return response;
    } catch (error) {
        return error.response;
    }
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
    try {
        const response = await axios.put(`/auth/user`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(data) {
    console.log(data)
    try {
        const response = await axios.delete(`/auth/user`, { username: data.username }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { signin, getAllStaff, register, updateUser, deleteUser };