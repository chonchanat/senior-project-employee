import axios, { getToken } from "./index";

async function signin(username, password) {
    const user = await axios.post(`/auth/login`, {
        username: username,
        password: password,
    })
    if (user.data.role === "customer") {
        throw new Error("Not found user");
    }
    return user.data;
}

async function getAllAccount() {
    try {
        const response = await axios.get(`/auth/user/all`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
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
                'Authorization': `Bearer ${getToken()}`,
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
    await axios.post(`/auth/register`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    })
}

async function updateUser(data) {
    return await axios.put(`/auth/user`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    })
}

async function changePassword(data) {
    const res = await axios.post(`/auth/user/changepassword`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    })
    return res
}

async function deleteUser(data) {
    try {
        const response = await axios.post(`/auth/user/delete`, { username: data.username }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
        window.location.reload(true)
    } catch (error) {
        console.log(error)
    }
}

async function resetSystem() {
    try {
        const response = await axios.get(`/auth`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { signin, getAllAccount, getOneAccount, register, updateUser, changePassword, deleteUser, resetSystem };