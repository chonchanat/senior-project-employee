import { getAllActivity } from "../api/activityAPI";
import { endFetch, startFetch } from "./statusActions";

const setActivity = (data) => {
    return {
        type: 'SET_ACTIVITY',
        payload: data,
    }
}

function fetchAllActivity() {
    return async function(dispatch) {
        dispatch(startFetch());
        
        const data = await getAllActivity();
        dispatch(setActivity(data));
        
        dispatch(endFetch());
    }
}

export { setActivity, fetchAllActivity };