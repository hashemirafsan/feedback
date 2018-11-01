import { 
    AUTH_LOGIN,
    IS_AUTHENTICATE,
    AUTH_REGISTER,
    SET_IS_AUTH_DATA
} from '../../Types/_action_types';
import Env from '../../../Env';
import axios from 'axios';

const setIsAuthenticated = () => {
    return (dispatch) => {
        const data = JSON.parse(sessionStorage.getItem('feedback_session'));
        dispatch({
            type: SET_IS_AUTH_DATA,
            payload: {
                ...data
            }
        })
    }
}

const postLogin = (email, password, history) => {
    return (dispatch) => {
        dispatch({
            type: AUTH_LOGIN,
            payload: {
                loading: true
            }
        });
        axios.post(`${Env.auth_url}/login`, { username: email, password })
        .then(({ data }) => {
            sessionStorage.setItem('feedback_session', JSON.stringify({ ...data }));
            dispatch({
                type: AUTH_LOGIN,
                payload: {
                    loading: false,
                    ...data
                }
            })
            dispatch({
                type: IS_AUTHENTICATE,
                payload: {
                    ...data
                }
            })
            history.push(data.redirect);
        })
        .catch((err) => console.log(err));
    }   
}

export {
    setIsAuthenticated,
    postLogin
}