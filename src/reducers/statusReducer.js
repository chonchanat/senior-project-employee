const initialState = {
    loading: false,
    error: '',
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_END':
            return {
                ...state,
                loading: false,
            };

        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default statusReducer;