import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Middleware, compose, applyMiddleware } from 'redux'
import { App } from './App';
import reducers from './reducers';

// control action state using query string below
// http://localhost:3000/?debug_session=logged_in  =>redux state stay even refearch page seen in redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
);