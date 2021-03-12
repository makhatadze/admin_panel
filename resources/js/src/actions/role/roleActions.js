import axios from 'axios';
import {
    CLEAR_ROLE_SEARCH_DATA,
    GET_ROLES,
    ROLES_LOADING, SET_ROLE_SEARCH_QUERY, SET_ROLE_SHOW_MODAL,
    SET_ROLES_SEARCH, SET_SHOW_ROLE_MODAL_VIEW,
    SET_UPDATE_ROLE
} from "./roleTypes";
import {GET_ERRORS} from "../types";

// AddRole
export const addRole = roleData => (dispatch,getState) => {
    return new Promise(async (resolve, reject) => {
        axios
            .post('http://127.0.0.1:8000/api/v1/role', roleData)
            .then(res => {
                dispatch(clearSearchData())
                dispatch(getRoles(''));
                resolve('Role Created SuccessFull');
            })
            .catch(err => {
                reject('Role Not Created');
                dispatch({
                    type: GET_ERRORS,
                    payload: JSON.parse(err.response.data.errors)
                })
            });
    })
};

// UpdateRole
export const updateRole = roleData => (dispatch,getState) => {
    return new Promise(async (resolve, reject) => {
        axios
            .put(`http://127.0.0.1:8000/api/v1/role/${roleData.id}`, roleData)
            .then(res => {
                dispatch(setUpdateRole(res.data));
                resolve('Role Updated');
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: JSON.parse(err.response.data.errors)
                })
                reject('Role Not Updated');

            });
    })
};


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

// Set Roles loading
export const setRolesLoading = () => {
    return {
        type: ROLES_LOADING
    };
};

// Set Roles Params
export const setRolesSearchParams = (payload) => {
    return {
        type: SET_ROLES_SEARCH,
        payload
    };
};

// Set ShowModal
export const setModalShow = (payload) => {
    return {
        type: SET_ROLE_SHOW_MODAL,
        payload
    };
};

// Show Role Modal View
export const setRoleModalView = (payload) => {
    return {
        type: SET_SHOW_ROLE_MODAL_VIEW,
        payload
    };
};

// Set
export const clearSearchData = () => {
    return {
        type: CLEAR_ROLE_SEARCH_DATA
    };
};

// Set ShowModal
export const setUpdateRole = (payload) => {
    return {
        type: SET_UPDATE_ROLE,
        payload
    };
};

export const setRoleSearchQuery = () => {
    return {
        type: SET_ROLE_SEARCH_QUERY
    }
}
