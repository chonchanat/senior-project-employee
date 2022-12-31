const initialState = {
    loading: false,
    updating: false,
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

        case 'FETCH_START_UPDATE':
            return {
                ...state,
                updating: true,
            };

        case 'FETCH_END_UPDATE':
            return {
                ...state,
                updating: false,
            };

        default:
            return state;
    }
}

export default statusReducer;