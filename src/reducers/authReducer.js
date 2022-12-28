const initialState = null

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return action.payload;

        default:
            return state;
    }
}

export default authReducer;