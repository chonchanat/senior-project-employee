import axios, { getToken } from "./index";

async function getAllActivity() {
    try {
        const response = await axios.get(`/activity/waitround`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        if (response.data.data) return response.data.data;
        else return [];
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getOneActivity(data) {
    try {
        const response = await axios.get(`/activity/code/${data}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.activity;
    } catch (error) {
        console.log(error)
        return null;
    }
}

async function postActivity(data) {
    await axios.post(`/activity`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    })
}

async function deleteActivity(data) {
    try {
        await axios.post(`/activity/delete`, { code: data.code }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
    }
}

async function putActivity(data) {
    await axios.put(`/activity`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    })
}

export { getAllActivity, getOneActivity, postActivity, deleteActivity, putActivity };
