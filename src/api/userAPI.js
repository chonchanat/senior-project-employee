import axios from "./index";

async function signin(username, password) {
    try {
        const response = await axios.post(`/auth/login`, {
            username: username,
            password: password,
        })
        console.log(response.data.accesstoken)
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
}

async function getAllStaff() {
    try {
        const response = await axios.get(`/auth/user/all`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTAxNDQsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.T_UClvBvSTISSmBZesz2bGWovuKzDHwE-gP_-WfvgB8',
                'Content-Type': 'application/json',
            }
        })
        console.log(response);
        return response.data.user;
    } catch (error) {
        console.log(error);
    }
}

async function register(data) {
    console.log(data)
    try {
        const response = await axios.post(`/auth/register`, data, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { signin, getAllStaff, register, updateUser, deleteUser };