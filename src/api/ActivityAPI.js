import axios from "axios";
import Cookies from 'js-cookie';

const token = Cookies.get("accesstoken")

async function getAllActivity() {
    try {
        const response = await axios.get(`/activity/all`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.activity;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getOneActivity(data) {
    try {
        const response = await axios.get(`/activity/code/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
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
    try {
        await axios.post(`/activity`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteActivity(data) {
    try {
        await axios.delete(`/activity`, { code: data.code }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
    }
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

export { getAllActivity, getOneActivity, postActivity, deleteActivity, putActivity };