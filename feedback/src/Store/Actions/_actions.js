import { 
    postLogin,
    setIsAuthenticated
} from './Auth/_auth';

import { 
    getTypes,
    postTypes 
} from './Types/_get_types';

import {
    getQuestions
} from './Questions/_get_questions';

export {
    setIsAuthenticated,
    postLogin,
    getTypes,
    postTypes,
    getQuestions
}