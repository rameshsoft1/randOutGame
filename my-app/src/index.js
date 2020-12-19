import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import randReducer from './store/reducers/randReducer';

import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    randReducer: randReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
       
            <App />
        
    </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
