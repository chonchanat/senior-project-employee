const startFetch = () => {
    return {
        type: 'FETCH_START',
    };
}

const endFetch = () => {
    return {
        type: 'FETCH_END',
    };
}

const errorFetch = (error) => {
    return {
        type: 'FETCH_ERROR',
        payload: error,
    };
}

const startUpdateFetch = () => {
    return {
        type: 'FETCH_START_UPDATE',
    };
}

const endUpdateFetch = () => {
    return {
        type: 'FETCH_END_UPDATE',
    };
}

export { startFetch, endFetch, errorFetch, startUpdateFetch, endUpdateFetch };