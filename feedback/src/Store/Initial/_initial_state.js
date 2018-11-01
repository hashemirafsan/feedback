const initialState = {
    types: [],
    get isAuthenticated() {
        return JSON.parse(sessionStorage.getItem('feedback_session')) || null;
    }
}

export default initialState;