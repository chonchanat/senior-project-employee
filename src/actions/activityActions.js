const setActivity = (data) => {
    return {
        type: 'SET_ACTIVITY',
        payload: data,
    }
}

export { setActivity };