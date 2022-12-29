import { startFetch, endFetch, errorFetch } from './statusActions';

import { signin, settingAccount } from '../api/fakeAPI';

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

            const user = await signin(email, password);

            if (user) {
                dispatch(setAuth(user));
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

function fetchSettingAccount(dateUser) {
    return async function (dispatch) {
        try {
            dispatch(startFetch());

            const user = await settingAccount(dateUser);

            if (user) {
                dispatch(setAuth(user));
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

export { setAuth, fetchAuthAsync, fetchSettingAccount };