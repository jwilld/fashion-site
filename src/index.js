import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store/store'

import { makeUser } from './actions/users'

store.subscribe(() => console.log(store.getState()));
store.dispatch( makeUser({first_name:'Jerry',last_name:'Davidson',email:'willdjerry@gmail.com',password:'password1'}))



ReactDOM.render(<Provider store={store}>
    <Router><App /></Router>
    </Provider>,document.getElementById('root'));


