const initialState = {
    types: [],
    questions: [],
    get isAuthenticated() {
        return JSON.parse(sessionStorage.getItem('feedback_session')) || null;
    }
}

export default initialState;