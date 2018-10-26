import { 
    TYPE_POST_DATA,
    TYPE_GET_DATA
} from '../../Types/_action_types';
import Initial from '../../Initial/_initial_state';

const Types = (state = Initial.types, action) => {
    switch(action.type) {
        case TYPE_POST_DATA: 
            return action.payload;
        case TYPE_GET_DATA:
            return action.payload;
        default: 
            return state;
    }
}

export default Types;