import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store/store'

import { createUser } from './actions/users'

store.subscribe(() => console.log(store.getState()));
store.dispatch(createUser({first_name:'terer',last_name:'sfefaesf',email:'aewfaef',password:'aefweaf'}))



ReactDOM.render(<Provider store={store}>
    <Router><App /></Router>
    </Provider>,document.getElementById('root'));


