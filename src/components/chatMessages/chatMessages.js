import React from 'react'
import PropTypes from 'prop-types'

import Message from './message'

class ChatMessages extends React.Component {
  constructor() {
    super()
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }
  scrollToBottom() {
    this.endDiv.scrollIntoView({
      behavior: 'smooth'
    })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  render() {
    let chatBox = {
      maxHeight: '95vh',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
    const { messages } = this.props
    const listOfMessages = messages.map(message => {
      return <Message key={message.uid} message={message.message} time={message.time} />
    })
    return (
      <div style={chatBox} id="chatBox">
        <div>{listOfMessages}</div>
        <div
          style={{
            display: 'block',
            height: '1px'
          }}
          ref={div => {
            this.endDiv = div
          }}
        />
      </div>
    )
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
