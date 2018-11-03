import { 
    QUESTION_GET_DATA
} from '../../Types/_action_types';
import Initial from '../../Initial/_initial_state';

const Questions = (state = Initial.questions, action) => {
    switch(action.type) {
        case QUESTION_GET_DATA:
            return action.payload;
        default: 
            return state;
    }
}

export default Questions;