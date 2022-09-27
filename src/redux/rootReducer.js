import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import CartReducer from './CartReducer'
let store = createStore(CartReducer, applyMiddleware(thunk))

export default store