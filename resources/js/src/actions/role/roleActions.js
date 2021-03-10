import axios from 'axios';
import {GET_ROLES, ROLES_LOADING, SET_ROLES_SEARCH, SET_SHOW_MODAL} from "./roleTypes";


// Get current profile
export const getRoles = (query) => dispatch => {
    dispatch(setRolesLoading());
    axios
        .get(`/api/v1/role${query}`)
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

// Users loading
export const setRolesSearchParams = (payload) => {
    return {
        type: SET_ROLES_SEARCH,
        payload
    };
};

// Set ShowModal
export const setModalShow = (payload) => {
    console.log(123)
    return {
        type: SET_SHOW_MODAL,
        payload
    };
};

