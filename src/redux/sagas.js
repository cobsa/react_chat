import { put, takeEvery, all, call, select, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import moment from 'moment'

import firebase from './firebase'

import * as messageConstants from './constants/messages'
import * as messageActions from './actions/messageActions'

import * as chatConstants from './constants/chats'
import * as chatActions from './actions/chatActions'

const messagesDatabase = firebase.database().ref('messages')
const chatDatabase = firebase.database().ref('chats')
export function getMessages(action) {
  // Get old messages from db and set up listener to new messages
  return eventChannel(emitter => {
    messagesDatabase
      .orderByChild('chatID')
      .equalTo(action.payload.chatID)
      .on('child_added', message => {
        emitter(
          messageActions.setMessage(
            message.child('message').val(),
            message.child('time').val(),
            message.key,
            message.child('chatID').val()
          )
        )
      })
    // The subscriber must return an unsubscribe function
    return () => {
      messagesDatabase.off('child_added')
    }
  })
}

export function getChats(action) {
  return eventChannel(emitter => {
    chatDatabase.on('child_added', chat => {
      let users = chat.child('users')
      // Loop list of users
      users.forEach(user => {
        chatActions.addChat(chat.key, user.child('uid').val(), user.role.val())
      })
      emitter(chatActions.addChat(message.key)
    })
    // return unsubscribe function
    return chatDatabase.off('child_added')
  })
}

export function* addMessage(action) {
  // Add message to cloud
  const newRef = messagesDatabase.push()
  newRef.set({
    message: action.payload.message,
    time: moment().toISOString(),
    chatID: action.payload.chatID
  })
}

// Watcher sagas
export function* watchGetMessages() {
  const action = yield take(messageConstants.GET_MESSAGES)
  const chan = yield call(getMessages, action)
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
