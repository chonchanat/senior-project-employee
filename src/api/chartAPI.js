import axios, { getToken } from "./index";

async function getCustomerDay(fromDate, toDate) {
    // console.log(fromDate, toDate)
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

export { getCustomerDay, getCustomerYear, getCustomerGroup }