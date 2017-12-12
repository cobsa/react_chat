import React from 'react'
import ReactDom from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import { store, history } from './redux/createStore'
import Chat from './containers/chat'

var app = document.getElementById('app')
ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Chat />
    </ConnectedRouter>
  </Provider>,
  app
)
