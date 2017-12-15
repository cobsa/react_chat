// @flow

import * as constants from '../constants/messages'
import * as _ from 'lodash'

type MessageItem = { message: string, time: string, id: string }
type StateAlias = {
  chats: {
    [key: string]: {
      messages: Array<MessageItem>
    }
  }
}

type ActionAlias = {
  type: string,
  payload: { message: string, time: string, id: string, chatID: string }
}

const initial = {
  chats: {}
}

const messageReducer = (state: StateAlias = initial, action: ActionAlias) => {
  switch (action.type) {
    case constants.SET_MESSAGE: {
      let newState: StateAlias = _.cloneDeep(state) // Clone state
      if (newState.chats[action.payload.chatID] !== undefined) {
        // Add messages to existing chat
        newState.chats[action.payload.chatID].messages = newState.chats[
          action.payload.chatID
        ].messages.concat({
          message: action.payload.message,
          time: action.payload.time,
          id: action.payload.id
        })
      } else {
        // Add message to new chat
        newState.chats[action.payload.chatID] = {
          messages: [
            {
              message: action.payload.message,
              time: action.payload.time,
              id: action.payload.id
            }
          ]
        }
      }
      return newState
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default messageReducer
