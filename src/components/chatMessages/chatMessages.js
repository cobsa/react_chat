import React from 'react'
import PropTypes from 'prop-types'

import Message from './message'

class ChatMessages extends React.Component {
  render() {
    const { messages } = this.props
    const listOfMessages = messages.map(message => {
      return <Message key={message.uid} message={message.message} time={message.time} />
    })
    return <div>{listOfMessages}</div>
  }
}

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.string,
      uid: PropTypes.string
    })
  )
}

export default ChatMessages
