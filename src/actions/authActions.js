import { startFetch, endFetch, errorFetch, startUpdateFetch, endUpdateFetch } from './statusActions';

import { settingAccount } from '../api/fakeAPI';
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
            console.log(error)
            dispatch(setAuth(null));
            dispatch(errorFetch(error.message));
            dispatch(endFetch());
        }
        // dispatch(startFetch());
        // dispatch(errorFetch(''));

        // const user = await signin(email, password);

        // if (user.status === 200) {
        //     dispatch(setAuth(user.data.user));
        //     Cookies.set('accesstoken', user.data.accesstoken);
        //     Cookies.set('userCookie', JSON.stringify(user.data.user));
        //     dispatch(errorFetch(''));
        //     dispatch(endFetch());
        // } else {
        //     dispatch(setAuth(null));
        //     dispatch(errorFetch(user.data.message));
        //     dispatch(endFetch());
        // }
    }
}

function fetchUpdateAccount(data) {
    return async function (dispatch) {
        try {
            dispatch(startUpdateFetch());

            const user = await settingAccount(data);

            if (user) {
                dispatch(setAuth(user));
                dispatch(errorFetch(''));
                dispatch(endUpdateFetch());
            }
        } catch (error) {
            dispatch(setAuth(null));
            dispatch(errorFetch(error));
            dispatch(endUpdateFetch());
        }
    }
}

export { setAuth, fetchAuthAsync, fetchUpdateAccount };