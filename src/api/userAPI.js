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
}

async function getAllAccount() {
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
        return [];
    }
}

async function getOneAccount(data) {
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
        return null;
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

export { signin, getAllAccount, getOneAccount, register, updateUser, deleteUser };