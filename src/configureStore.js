import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

export const middleware = [ReduxThunk]

const createStoreWitheMiddleware = applyMiddleware(...middleware)(createStore)

export default createStoreWitheMiddleware(rootReducer)
