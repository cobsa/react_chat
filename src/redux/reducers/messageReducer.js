const initial = {
  status: {
    code: 'NOT_FETCHED',
    message: undefined
  },
  messages: []
}

const messageReducer = (state, action) => {
  switch (action.type) {
    default: {
      return state.slice()
    }
  }
}

export default messageReducer
