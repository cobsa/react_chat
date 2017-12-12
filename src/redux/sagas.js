import { put, takeEvery, all, call, select, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import moment from 'moment'

import firebase from './firebase'

import * as messageConstants from './constants/messages'
import * as messageActions from './actions/messageActions'

const messagesDatabase = firebase.database().ref('messages')

export function getMessages() {
  // Get old messages from db and set up listener to new messages
  return eventChannel(emitter => {
    messagesDatabase.on('child_added', message => {
      emitter(
        messageActions.setMessage(
          message.child('message').val(),
          message.child('time').val(),
          message.key
        )
      )
    })
    // The subscriber must return an unsubscribe function
    return () => {
      messagesDatabase.off('child_added')
    }
  })
}

export function* addMessage(action) {
  // Add message to cloud
  const newRef = messagesDatabase.push()
  newRef.set({
    message: action.payload.message,
    time: moment().toISOString()
  })
}

// Watcher sagas
export function* watchGetMessages() {
  const chan = yield call(getMessages)
  try {
    while (true) {
      const emitter = yield take(chan)
      yield put(emitter)
    }
  } finally {
    console.log('Something is done')
  }
}

export function* watchAddMessage() {
  yield takeEvery(messageConstants.ADD_MESSAGE, addMessage)
}

export default function* rootSaga() {
  yield all([watchGetMessages(), watchAddMessage()])
}
