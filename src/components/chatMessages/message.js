import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class Message extends React.Component {
  render() {
    var messageStyle = {
      width: '%95',
      display: 'flex',
      flexDirection: 'row',
      margin: '1em'
    }
    var bodyStyle = {
      width: '100%',
      margin: '0',
      fontSize: '20px'
    }
    var timeStyle = {
      flex: 'end',
      fontSize: '12px'
    }
    return (
      <div style={messageStyle}>
        <div style={bodyStyle}>{this.props.message}</div>
        <div style={timeStyle}>{moment(this.props.time).format('HH:mm DD/MM/YYYY')}</div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.string,
  time: PropTypes.string
}

export default Message
