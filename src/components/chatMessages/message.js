import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message-body">{this.props.message}</div>
        <div className="message-time">{this.props.time}</div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.string,
  time: PropTypes.string
}

export default Message
