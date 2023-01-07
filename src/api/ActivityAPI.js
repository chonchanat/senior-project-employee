import axios from "axios";

async function getAllActivity() {
    try {
        const response = await axios.get(`/activity/all`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
        return response.data.activity;
    } catch (error) {
        console.log(error)
    }
}

async function postActivity(data) {
    try {
        await axios.post(`/activity`, data, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzMyOTE0NjEsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiZGF2ZXBva3BvbmcifQ.bvL4Ce1mph1zrcTogyd8te2T14QQ1ym8fjMx0ldxTaA',
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// function deleteActivity(data) {
//     axios.delete(`/activity`, {
//         code: data.code
//     })
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

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