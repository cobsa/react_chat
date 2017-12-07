import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message-body">{this.props.text}</div>
        <div className="message-time">{this.props.time}</div>
      </div>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Message
