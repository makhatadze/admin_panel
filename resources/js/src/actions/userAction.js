import axios from 'axios';

import {
    USERS_LOADING, GET_USERS
} from './types';

// Get current profile
export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
        .get('/api/v1/users')
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_USERS,
                payload: {}
            })
        );
};

// Users loading
export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    };
};

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//     axios
//         .post('/api/v1/auth/profile', profileData)
//         .then(res => history.push('/admin/dashboard'))
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };


