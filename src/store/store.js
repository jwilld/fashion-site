import { createStore } from 'redux'
import postReducer from '../reducers/posts'

export default createStore(
    postReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)