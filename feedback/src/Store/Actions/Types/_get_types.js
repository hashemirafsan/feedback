import { 
    TYPE_GET_DATA
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

export {
    getTypes
}