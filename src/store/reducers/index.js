import {combineReducers} from 'redux';
import {AuthReducer} from './authReducer';
import {MainReducer} from './mainReducer';

export const reducers = combineReducers({
    AuthReducer,
    MainReducer
})
