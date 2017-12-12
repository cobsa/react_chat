import * as constants from '../constants/messages'

export const getMessages = () => {
  return {
    type: constants.GET_MESSAGES
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

export const setMessage = (message, time, uid) => {
  return {
    type: constants.SET_MESSAGE,
    payload: {
      message,
      time,
      uid
    }
  }
}

export const addMessage = message => {
  return {
    type: constants.ADD_MESSAGE,
    payload: {
      message
    }
  }
}
