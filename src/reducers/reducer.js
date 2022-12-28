// const initialState = {
//     data: [
//         {
//             id: 1,
//             name: "Chonchanat",
//             score: 12,
//         },
//         {
//             id: 2,
//             name: "Pokpong",
//             score: 25,
//         },
//     ]
// }

const initialState = [
    {
        id: 1,
        name: "Chonchanat",
        score: 12,
    },
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            const addData = [...state, action.payload];
            return addData;
        case 'REMOVE_DATA':
            const removeData = state.filter(item => item.id !== action.payload);
            return removeData;
        default:
            break;
    }
    return state;
}

export default reducer;