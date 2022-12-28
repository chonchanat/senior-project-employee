const setAuth = (data) => {
    return {
        type: 'SET_AUTH',
        payload: data,
    }
}

export { setAuth };