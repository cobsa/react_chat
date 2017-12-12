import { applyMiddleware, createStore } from 'redux'
import createSageMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'

import messageReducer from './reducers/messageReducer'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  router: routerReducer,
  message: messageReducer
})

const history = createBrowserHistory()
const sagaMiddleware = createSageMiddleware()
const middleware = [routerMiddleware(history), logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export { store, history }
