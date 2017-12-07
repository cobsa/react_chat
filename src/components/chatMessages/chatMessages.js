import React from 'react'
import PropTypes from 'prop-types'

import Message from './message'

class ChatMessages extends React.Component {
  render() {
    const { messages } = this.props
    const listOfMessages = messages.map(message => {
      return <Message key={message.uid} text={message.text} time={message.time} />
    })
    return <div>{listOfMessages}</div>
  }
}

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      time: PropTypes.string,
      uid: PropTypes.string.isRequired
    })
  )
}

export default ChatMessages
