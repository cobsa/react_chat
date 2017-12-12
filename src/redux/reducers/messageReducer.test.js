import messageReducer from './messageReducer'
import { initial } from './messageReducer'

import * as actions from '../actions/messageActions'

const messages = [
  {
    message: 'Some messaage',
    uid: ' 0123hklasjdklasd'
  },
  {
    message: 'JOLasdkl 12 ',
    uid: '12321839721'
  }
]

test('Default case returns different object', () => {
  expect(messageReducer(initial, {}) === initial).toBeFalsy()
})

test('Set messages as in replace current array of messages', () => {
  expect(messageReducer(initial, actions.setMessages(messages))).toEqual({
    ...initial,
    messages
  })
})

test('Add new message to array', () => {
  const initialStateWithMessages = {
    ...initial,
    messages
  }
  const message = {
    message: 'Message 3',
    uid: '90218jaksld'
  }
  expect(
    messageReducer(initialStateWithMessages, actions.setMessage(message.message, message.uid))
  ).toEqual({
    ...initialStateWithMessages,
    messages: messages.concat(message)
  })
})
