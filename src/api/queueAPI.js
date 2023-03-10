import axios, { getToken } from "./index";

async function getQueueOneActivity(data) {
    try {
        const response = await axios.get(`/queue/round-per-activity/${data}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        if (response.data.queues) return response.data.queues;
        else return [];
    } catch (error) {
        console.log(error)
        return [];
    }
}

export { getQueueOneActivity }