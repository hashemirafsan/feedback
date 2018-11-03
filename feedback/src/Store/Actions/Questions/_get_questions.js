import { 
    UNAUTHORIZED,
    QUESTION_GET_DATA
} from '../../Types/_action_types';
import Env from '../../../Env';
import Initial from '../../Initial/_initial_state';
import axios from 'axios';

const getToken = () => {
    if (Initial.isAuthenticated) {
        axios.defaults.headers.common = {'Authorization': Initial.isAuthenticated.token};
    }
}

const removeToken = () => {
    sessionStorage.setItem('feedback_session', null);
}

const getQuestions = (type_id) => {
    
    getToken();

    return (dispatch, getState) => {
        dispatch({
            type: QUESTION_GET_DATA,
            payload: {
                loading: true,
                questions: []
            }
        });
        axios.get(`${Env.api_url}/questions/`, {type_id})
        .then(res => {
            dispatch({
                type: QUESTION_GET_DATA,
                payload: {
                    loading: false,
                    ...res.data
                }
            }) 
        })
        .catch((err) => {
            if (err.response.data === "Unauthorized" && err.response.status === 401) {
                removeToken();
                
                dispatch({
                    type: UNAUTHORIZED,
                    payload: {
                        isAuthenticate: false
                    }
                })
            }
        })
    }
}

export {
    getQuestions
}