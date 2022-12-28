const ADD_DATA = 'ADD_DATA';

const addData = (addedData) => {
    return {
        type: ADD_DATA,
        payload: addedData
    }
}

const removeData = (removedDataId) => {
    return {
        type: 'REMOVE_DATA',
        payload: removedDataId,
    }
}

export { addData, removeData };