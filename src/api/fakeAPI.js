import StaffData from '../fakeData/StaffData';
import ActivityData from '../fakeData/ActivityData';
import CustomerData from '../fakeData/CustomerData';

function signin(email, password) {
    return new Promise((resolve, reject) => {
        const foundUser = StaffData.find(
            (user) => user.email === email && user.password === password
        )

        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser);
            } else {
                reject('Email or password is invalid');
            }
        }, 1000)
    })
}

function settingAccount(dataUser) {
    return new Promise((resolve, reject) => {
        const foundUser = StaffData.find(
            (user) => user.id === dataUser.id
        )

        setTimeout(() => {
            if (foundUser) {
                resolve(dataUser);
            } else {
                reject('Save failed');
            }
        }, 2000)
    })
}

function getActivityAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ActivityData);
        }, 500)
    })
}

function getStaffAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(StaffData);
        }, 500)
    })
}

function getCustomerAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CustomerData);
        }, 1000)
    })
}

export { signin, settingAccount, getActivityAPI, getStaffAPI, getCustomerAPI };