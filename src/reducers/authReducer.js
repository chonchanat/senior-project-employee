const initialState = {
    auth: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                auth: action.payload
            };

        default:
            return state;
    }
}

export default authReducer;