import * as constants from '../constants/messages'

export const initial = {
  status: {
    code: 'NOT_FETCHED',
    message: undefined
  },
  messages: []
}

const messageReducer = (state = initial, action) => {
  switch (action.type) {
    case constants.SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload.messages
      }
    }
    case constants.SET_MESSAGE: {
      return {
        ...state,
        messages: state.messages.concat({
          message: action.payload.message,
          uid: action.payload.uid
        })
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default messageReducer
