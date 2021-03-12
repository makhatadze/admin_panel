const queryString = require('query-string');

import {
    CLEAR_ROLE_SEARCH_DATA,
    GET_ROLES,
    ROLES_LOADING, SET_ROLE_SEARCH_QUERY,
    SET_ROLE_SHOW_MODAL,
    SET_ROLES_SEARCH, SET_SHOW_ROLE_MODAL_VIEW,
    SET_UPDATE_ROLE
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
        pageSize: 10,
        id: '',
        name: '',
        sort: 'id',
        order: 'desc'
    },
    searchQuery: '',
    showModal: false,
    modalRole: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ROLES_LOADING:
            return {
                ...state,
                searchData: {
                    ... state.searchData,
                    loading: true
                }
            };
        case GET_ROLES:
            return {
                ...state,
                data: action.payload.data,
                searchData: {
                    ...state.searchData,
                    ... action.payload.pagination,
                    loading: false
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
        case SET_SHOW_ROLE_MODAL_VIEW:
            return {
                ...state,
                showRoleModalView: action.payload.showRoleModalView,
                roleModalView: action.payload.roleModalView
            }
        case SET_UPDATE_ROLE:
            return {
                ...state,
                data: state.data.map(el => el.id === action.payload.data.id ? action.payload.data : el)
            }
        case CLEAR_ROLE_SEARCH_DATA:
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
        case SET_ROLE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: `?${queryString.stringify(getSearchQueryParams(state.searchData))}`
            }

        default:
            return state;
    }
}

function getSearchQueryParams(searchData) {
    return {
        per_page: searchData.pageSize,
        page: searchData.current,
        id: searchData.id,
        name: searchData.name,
        sort: searchData.sort,
        order: searchData.order
    }
}
