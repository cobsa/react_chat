import chatsReducer from './chatsReducer'

import * as actions from '../actions/chatActions'

test('Should return initial state', () => {
  expect(chatsReducer(undefined, {})).toEqual({
    chats: {}
  })
})

test('Should add chat and user to that chat', () => {
  expect(chatsReducer(undefined, actions.addChat('jlasd0812j3123', '9josad89asdad', 9213))).toEqual(
    {
      chats: {
        jlasd0812j3123: {
          users: {
            '9josad89asdad': {
              role: 9213
            }
          }
        }
      }
    }
  )
})

test('Should add new user to existing chat', () => {
  expect(
    chatsReducer(
      {
        chats: {
          jlasd0812j3123: {
            users: {
              '9josad89asdad': {
                role: 9213
              }
            }
          }
        }
      },
      actions.addChat('jlasd0812j3123', '0jasfjkojasf', 23)
    )
  ).toEqual({
    chats: {
      jlasd0812j3123: {
        users: {
          '9josad89asdad': {
            role: 9213
          },
          '0jasfjkojasf': {
            role: 23
          }
        }
      }
    }
  })
})
