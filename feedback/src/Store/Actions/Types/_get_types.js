import { 
    UNAUTHORIZED,
    TYPE_GET_DATA,
    TYPE_POST_DATA
} from '../../Types/_action_types';
import Env from '../../../Env';
import Initial from '../../Initial/_initial_state';
import axios from 'axios';


const getToken = () => {
    if (Initial.isAuthenticated) {
        console.log(Initial, 'aaa')
        axios.defaults.headers.common = {'Authorization': Initial.isAuthenticated.token};
    }
}

const getTypes = () => {
    
    getToken();

    return (dispatch, getState) => {
        console.log(getState)
        dispatch({
            type: TYPE_GET_DATA,
            payload: {
                loading: true,
                types: []
            }
        });
        axios.get(`${Env.api_url}/types/`)
        .then(res => {
            dispatch({
                type: TYPE_GET_DATA,
                payload: {
                    loading: false,
                    ...res.data
                }
            }) 
        })
        .catch((err) => {
            if (err.response.data === "Unauthorized" && err.response.status === 401) {
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

const postTypes = (formData) => {
    
    getToken();

    return (dispatch) => {
        dispatch({
            type: TYPE_POST_DATA,
            payload: {
                loading: true
            }
        })

        axios.post(`${Env.api_url}/types/create`, formData)
        .then(res => {
            dispatch({
                type: TYPE_POST_DATA,
                payload: {
                    loading: false,
                    ...res.data
                }
            })
        })
    }
}

export {
    getTypes,
    postTypes
}