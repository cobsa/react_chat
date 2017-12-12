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
        status: {
          code: 'FETCHED'
        },
        messages: action.payload.messages
      }
    }
    case constants.SET_MESSAGE: {
      return {
        ...state,
        status: {
          code: 'FETCHED'
        },
        messages: state.messages.concat({
          message: action.payload.message,
          uid: action.payload.uid,
          time: action.payload.time
        })
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default messageReducer
