//@flow
import * as _ from 'lodash'

import type { ChatActionType } from '../actions/chatActions'
import * as constants from '../constants/chats'

opaque type StateAlias = {
  chats: {
    [key: string]: {
      users: {
        [key: string]: {
          role: number // abstraction of access class
        }
      }
    }
  }
}

const initial = {
  chats: {}
}

const chatsReducer = (state: StateAlias = initial, action: ChatActionType): StateAlias => {
  switch (action.type) {
    case constants.ADD_CHAT: {
      let newState: StateAlias = _.cloneDeep(state)
      // Add new user to existing chat
      if (
        newState.chats[action.payload.chatID] !== undefined &&
        newState.chats[action.payload.chatID].users !== undefined
      ) {
        newState.chats[action.payload.chatID].users[action.payload.uid] = {
          role: action.payload.role
        }
      } else {
        // Add new chat and user to it
        newState.chats[action.payload.chatID] = { users: {} }
        newState.chats[action.payload.chatID].users[action.payload.uid] = {
          role: action.payload.role
        }
      }
      return newState
    }
    default: {
      return _.cloneDeep(state)
    }
  }
}

export default chatsReducer