import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'element-theme-default';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import FeedBack from './Store/Reducers/_reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middleware = applyMiddleware(thunk);
const store = createStore(FeedBack, middleware);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
