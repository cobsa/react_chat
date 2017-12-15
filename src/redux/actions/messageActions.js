import * as constants from '../constants/messages'

export const getMessages = chatID => {
  return {
    type: constants.GET_MESSAGES,
    payload: {
      chatID
    }
  }
}

export const setMessages = messages => {
  return {
    type: constants.SET_MESSAGES,
    payload: {
      messages
    }
  }
}

export const setMessage = (message, time, id, chatID) => {
  return {
    type: constants.SET_MESSAGE,
    payload: {
      message,
      time,
      id,
      chatID
    }
  }
}

export const addMessage = (message, chatID) => {
  return {
    type: constants.ADD_MESSAGE,
    payload: {
      message,
      chatID
    }
  }
}
