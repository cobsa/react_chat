//@flow

import * as constants from '../constants/chats'

export type ChatActionType = {
  type: string,
  payload: {
    uid: string,
    role: number,
    chatID: string
  }
}

export const addChat = (chatID: string, uid: string, role: number): ChatActionType => {
  return {
    type: constants.ADD_CHAT,
    payload: {
      chatID,
      uid,
      role
    }
  }
}

type NewChatType = {
  type: string,
  payload: {
    name: string,
    uid: string
  }
}

export const newChat = (name: string, defaultUserUID: string): NewChatType => {
  return {
    type: constants.NEW_CHAT,
    payload: {
      name,
      uid: defaultUserUID
    }
  }
}
