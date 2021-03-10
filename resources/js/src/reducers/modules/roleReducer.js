import {GET_ROLES, ROLES_LOADING, SET_ROLES_SEARCH, SET_SHOW_MODAL} from "../../actions/role/roleTypes";


const initialState = {
    data: null,
    searchData: {
        loading: false,
        keyword: '',
        count: null,
        per_page: 2,
        current: 1,
        total: null,
        pageSize: 1,
    },
    showModal: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ROLES_LOADING:
            return {
                ...state,
                searchData: {
                    loading: true
                }
            };
        case GET_ROLES:
            return {
                ...state,
                data: action.payload.data,
                searchData: {
                    loading : false,
                    ...action.payload.pagination
                }
            };
        case SET_ROLES_SEARCH:
            return {
                ...state,
                searchData: action.payload
            }
        case SET_SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        default:
            return state;
    }
}
