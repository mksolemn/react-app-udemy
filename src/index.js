import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from "redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./containers/App";
import {searchRobots} from "./reducers";

const store = createStore(searchRobots);

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1 className="f1">Robo Friends</h1>
            <Provider store = {store}>
            <App />
            </Provider>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
