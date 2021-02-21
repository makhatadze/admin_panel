import {
    GET_USERS,
    USERS_LOADING
} from '../../actions/types';

const initialState = {
    data: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
