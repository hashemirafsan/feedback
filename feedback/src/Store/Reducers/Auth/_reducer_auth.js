import {
    UNAUTHORIZED,
    AUTH_LOGIN,
    IS_AUTHENTICATE,
    SET_IS_AUTH_DATA
} from '../../Types/_action_types';
import Initial from '../../Initial/_initial_state';

const Authenticate = (state, action) => {
    switch(action.type) {
        default: 
            return {};
        case AUTH_LOGIN:
            return action.payload;
    }
} 

const isAuthenticated = (state = Initial.isAuthenticated, action) => {
    switch(action.type) {
        default: 
            return JSON.parse(sessionStorage.getItem('feedback_session')) || null;
        case SET_IS_AUTH_DATA: 
            return action.payload;
        case IS_AUTHENTICATE:
            return action.payload;
        case UNAUTHORIZED:
            return action.payload;
    }
}

export {
    Authenticate,
    isAuthenticated
}