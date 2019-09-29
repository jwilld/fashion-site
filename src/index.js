import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store/store'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPlusSquare, faUser, faSignOutAlt,faWindowMinimize} from "@fortawesome/free-solid-svg-icons";
library.add(
    faPlusSquare,
    faUser,
    faSignOutAlt,
    faWindowMinimize
);



ReactDOM.render(
<Provider store={store}>
<Router> <App /></Router>
</Provider>
,document.getElementById('root'));




