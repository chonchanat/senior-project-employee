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
            if (user) {
                dispatch(setAuth(user.data.user));
                Cookies.set('accesstoken', user.data.accesstoken);
                Cookies.set('userCookie', JSON.stringify(user.data.user));
                dispatch(errorFetch(''));
                dispatch(endFetch());
            }
        } catch (error) {
            dispatch(setAuth(null));
            dispatch(errorFetch(error.response.data.message));
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