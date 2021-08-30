import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { createStore ,applyMiddleware,compose} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));