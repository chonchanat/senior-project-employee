import { startFetch, endFetch, errorFetch } from './statusActions';

import { signin } from '../api/userAPI';

import Cookies from 'js-cookie';

const setAuth = (data) => {
    return {
        type: 'SET_AUTH',
        payload: data,
    }
}

function fetchAuthAsync(email, password) {
    return async function (dispatch) {
        try {
            dispatch(startFetch());
            dispatch(errorFetch(''));

            const user = await signin(email, password);
            const accesstoken = user.accesstoken;
            delete user.accesstoken;

            if (user) {
                dispatch(setAuth(user));
                Cookies.set('accesstoken', accesstoken);
                Cookies.set('userCookie', JSON.stringify(user));
                dispatch(errorFetch(''));
                dispatch(endFetch());
            }
        } catch (error) {
            dispatch(setAuth(null));
            dispatch(errorFetch(error));
            dispatch(endFetch());
        }
    }
}

function fetchUpdateAccount(data) {
    return async function (dispatch) {
        dispatch(setAuth(data));
    }
}

export { setAuth, fetchAuthAsync, fetchUpdateAccount };