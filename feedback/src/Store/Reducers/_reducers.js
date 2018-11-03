import { combineReducers } from 'redux';
import Types from './Types/_reducer_types';
import Questions from './Questions/_reducer_questions';
import {  Authenticate, isAuthenticated } from './Auth/_reducer_auth';

const feedBack = combineReducers({
    Types,
    Questions,
    Authenticate,
    isAuthenticated
});

export default feedBack;