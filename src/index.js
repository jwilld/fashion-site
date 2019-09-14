import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store/store'
import { user_creator } from './actions/actions'


// store.dispatch(user_creator({first_name: 'jerry', last_name:'davidson',email:'email@email.com',password:'password1'}))
// store.dispatch(user_creator({first_name: 'jay', last_name:'idson',email:'email@eml.com',password:'word1'}))
// console.log(store.getState())


ReactDOM.render(
<Provider store={store}>
<Router> <App /></Router>
</Provider>
,document.getElementById('root'));




