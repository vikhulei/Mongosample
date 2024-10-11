import { applyMiddleware }  from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

const store = configureStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    // window.devToolsExtension ? window.devToolsExtension() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store