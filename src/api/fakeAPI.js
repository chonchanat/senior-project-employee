import StaffData from '../fakeData/StaffData';
import ActivityData from '../fakeData/ActivityData';

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
        }, 1000)
    })
}

export { signin, settingAccount, getActivityAPI };