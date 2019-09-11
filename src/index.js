import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store/store'
import {createNewPost } from './actions/posts'

console.log(store.getState())
store.dispatch(createNewPost('firstpicture','Jerry','Washington D.C.'))
console.log(store.getState())
store.dispatch(createNewPost('secondpicture','William','Washington D.C.'))
console.log(store.getState())
store.dispatch(createNewPost('thirdpicture','Davidson','Washington D.C.'))
console.log(store.getState())

ReactDOM.render(<Provider store={store}>
    <Router><App /></Router>
    </Provider>,document.getElementById('root'));


