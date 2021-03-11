import {
    CLEAR_SEARCH_DATA,
    GET_ROLES,
    ROLES_LOADING,
    SET_ROLES_SEARCH,
    SET_SHOW_MODAL, SET_UPDATE_ROLE
} from "../../actions/role/roleTypes";


const initialState = {
    data: [],
    searchData: {
        loading: false,
        keyword: '',
        count: null,
        per_page: 2,
        current: 1,
        total: null,
        pageSize: 1,
    },
    showModal: false,
    modalRole: {}
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
                showModal: action.payload.showModal,
                modalRole: action.payload.modalRole
            }
        case SET_UPDATE_ROLE:
            return {
                ...state,
                data: state.data.map(el => el.id === action.payload.data.id ? action.payload.data : el)
            }
        case CLEAR_SEARCH_DATA:
            return {
                ...state,
                searchData: {
                    loading: false,
                    keyword: '',
                    count: null,
                    per_page: null,
                    current: 1,
                    total: null,
                    pageSize: null,
                },
            }
        default:
            return state;
    }
}
