import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';

// remove later. only here for testing
// const survey = { title: 'My Title', subject: 'Give Us Feedback!', recipients: 'dan.dh.lee@gmail.com', body: 'We would love to hear if you enjoyed our services!' };
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

console.log(process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.NODE_ENV);