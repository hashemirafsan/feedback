import { combineReducers } from 'redux';
import Types from './Types/_reducer_types';
import {  Authenticate, isAuthenticated } from './Auth/_reducer_auth';

const feedBack = combineReducers({
    Types,
    Authenticate,
    isAuthenticated
});

export default feedBack;