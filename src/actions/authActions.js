import { startFetch, endFetch, errorFetch, startUpdateFetch, endUpdateFetch } from './statusActions';

import { settingAccount } from '../api/fakeAPI';
import { signin } from '../api/userAPI';

const setAuth = (data) => {
    return {
        type: 'SET_AUTH',
        payload: data,
    }
}

function fetchAuthAsync(email, password) {
    return async function (dispatch) {
        dispatch(startFetch());
        dispatch(errorFetch(''));

        const user = await signin(email, password);

        if (user) {
            dispatch(setAuth(user.user));
            dispatch(errorFetch(''));
            dispatch(endFetch());
        } else {
            dispatch(setAuth(null));
            dispatch(errorFetch(user));
            dispatch(endFetch());
        }
    }
}

function fetchUpdateAccount(dateUser) {
    return async function (dispatch) {
        try {
            dispatch(startUpdateFetch());

            const user = await settingAccount(dateUser);

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