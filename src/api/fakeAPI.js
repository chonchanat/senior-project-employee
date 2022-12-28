import StaffData from "../fakeData/StaffData"

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

export { signin };