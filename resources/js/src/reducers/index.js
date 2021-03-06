import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import userReducer from "./modules/userReducer";
import layout from './layout';
import roleReducer from "./modules/roleReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    users: userReducer,
    layout: layout,
    roles: roleReducer
});
