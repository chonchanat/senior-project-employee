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

export { startFetch, endFetch, errorFetch };