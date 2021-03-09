import axios from 'axios';
import {GET_ROLES, ROLES_LOADING} from "./roleTypes";


// Get current profile
export const getRoles = () => dispatch => {
    dispatch(setRolesLoading());
    axios
        .get('/api/v1/role')
        .then(res =>
            dispatch({
                type: GET_ROLES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ROLES,
                payload: {}
            })
        );
};

// Users loading
export const setRolesLoading = () => {
    return {
        type: ROLES_LOADING
    };
};



