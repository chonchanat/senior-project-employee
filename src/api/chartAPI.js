import axios, { getToken } from "./index";

async function getCustomerDay(fromDate, toDate) {
    const isoFromDate = new Date(fromDate).toISOString();
    const isoToDate = new Date(toDate).toISOString();
    try {
        const response = await axios.get(`/auth/user/perweek/customer?min=${isoFromDate}&max=${isoToDate}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getCustomerYear(toDate) {
    const isoToDate = new Date(toDate).toISOString();
    try {
        const response = await axios.get(`/auth/user/peryear/customer?max=${isoToDate}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getCustomerGroup() {
    try {
        const response = await axios.get(`/auth/user/customer-filter-by-member`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getActivityDay(fromDate, toDate, code) {
    const isoFromDate = new Date(fromDate).toISOString();
    const isoToDate = new Date(toDate).toISOString();
    try {
        const response = await axios.get(`/activity/perweek/${code}?min=${isoFromDate}&max=${isoToDate}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getActivityYear(toDate, code) {
    const isoToDate = new Date(toDate).toISOString();
    try {
        const response = await axios.get(`/activity/peryear/${code}?&max=${isoToDate}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

async function getActivityGroup(code) {
    try {
        const response = await axios.get(`/activity/queuesize/${code}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data.stat;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export { getCustomerDay, getCustomerYear, getCustomerGroup, getActivityDay, getActivityYear, getActivityGroup }