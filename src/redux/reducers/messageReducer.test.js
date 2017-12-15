import messageReducer from './messageReducer'
import * as _ from 'lodash'

import * as actions from '../actions/messageActions'

const initial = {
  chats: {}
}

test('Add new message and new chat', () => {
  const message = {
    message: 'Message 3',
    id: '90218jaksld',
    time: 'now',
    chatID: 'JA8921hpölajsdjk'
  }
  let expectedState = _.cloneDeep(initial)
  expectedState.chats[message.chatID] = {
    messages: [
      {
        message: message.message,
        id: message.id,
        time: message.time
      }
    ]
  }

  expect(
    messageReducer(
      initial,
      actions.setMessage(message.message, message.time, message.id, message.chatID)
    )
  ).toEqual(expectedState)
})

test('Add multiple messages and a new chat', () => {
  const message = {
    message: 'Message 1',
    id: '21398ulknasd',
    time: 'notnow',
    chatID: 'adsasdsadsasda'
  }
  const message2 = {
    message: 'Message 2',
    id: '90218jaksld',
    time: 'now',
    chatID: 'JA8921hpölajsdjk'
  }
  expect(
    messageReducer(
      messageReducer(
        initial,
        actions.setMessage(message.message, message.time, message.id, message.chatID)
      ),
      actions.setMessage(message2.message, message2.time, message2.id, message2.chatID)
    )
  ).toEqual({
    chats: {
      JA8921hpölajsdjk: { messages: [{ id: '90218jaksld', message: 'Message 2', time: 'now' }] },
      adsasdsadsasda: { messages: [{ id: '21398ulknasd', message: 'Message 1', time: 'notnow' }] }
    }
  })
})
