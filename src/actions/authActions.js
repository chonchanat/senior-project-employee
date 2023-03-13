import { startFetch, endFetch, errorFetch } from './statusActions';

import { signin, getOneAccount } from '../api/userAPI';

import Cookies from 'js-cookie';

const setAuth = (data) => {
    return {
        type: 'SET_AUTH',
        payload: data,
    }
}

function fetchAuthAsync(phone, password) {
    return async function (dispatch) {
        try {
            dispatch(startFetch());
            dispatch(errorFetch(''));

            const user = await signin(phone, password);
            if (user) {
                Cookies.set('accessToken', user.accesstoken, { sameSite: "None", secure: true });
                dispatch(errorFetch(''));
                dispatch(endFetch());
            }
        } catch (error) {
            console.log(error)
            dispatch(setAuth(null));
            dispatch(errorFetch(error.message));
            dispatch(endFetch());
        }
    }
}

function fetchUpdateAccount(data) {
    return async function (dispatch) {
        dispatch(setAuth(data));
    }
}

function fetchUserData(username) {
    return async function (dispatch) {
        try {
            dispatch(startFetch());
            dispatch(errorFetch(''));

            const user = await getOneAccount(username);
            if (user) {
                dispatch(setAuth(user));
                dispatch(errorFetch(''));
                dispatch(endFetch());
            }
        } catch (error) {
            console.log(error)
            dispatch(setAuth(null));
            dispatch(errorFetch(error.message));
            dispatch(endFetch());
        }
    }
}

export { setAuth, fetchAuthAsync, fetchUpdateAccount, fetchUserData };