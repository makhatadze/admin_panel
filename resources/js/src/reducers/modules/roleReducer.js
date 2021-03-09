import {GET_ROLES, ROLES_LOADING} from "../../actions/role/roleTypes";


const initialState = {
    payload: null,
    params: {

    },
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ROLES_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ROLES:
            return {
                ...state,
                payload: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
