export const initial = {
  status: {
    code: 'NOT_FETCHED',
    message: undefined
  },
  messages: []
}

const messageReducer = (state = initial, action) => {
  switch (action.type) {
    default: {
      return { ...state }
    }
  }
}

export default messageReducer
