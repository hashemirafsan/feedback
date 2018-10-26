import { 
    TYPE_GET_DATA,
    TYPE_POST_DATA
} from '../../Types/_action_types';
import Env from '../../../Env';
import axios from 'axios';

const getTypes = () => {
    return (dispatch) => {
        axios.get(`${Env.app_url}/types/`)
        .then(res => {
            dispatch({
                type: TYPE_GET_DATA,
                payload: res.data
            }) 
        })
    }
}

const postTypes = (formData) => {
    return (dispatch) => {
        dispatch({
            type: TYPE_POST_DATA,
            payload: {
                loading: true
            }
        })

        axios.post(`${Env.app_url}/types/create`, formData)
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