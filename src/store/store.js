import { createStore,applyMiddleware } from 'redux'
import userReducer from '../reducers/users'
import thunk  from 'redux-thunk'



export default createStore(
    userReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)