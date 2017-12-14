import React from 'react'
import PropTypes from 'prop-types'

class ChatInput extends React.Component {
  render() {
    var formStyle = {
      position: 'fixed',
      bottom: '10px',
      maxWidth: '500px',
      width: '80%',
      margin: 'auto'
    }
    var inputStyle = {
      width: '100%'
    }
    return (
      <form onSubmit={this.props.onSubmit} style={formStyle}>
        <input
          value={this.props.value}
          type="text"
          onChange={this.props.onChange}
          style={inputStyle}
          placeholder={this.props.placeholder}
        />
      </form>
    )
  }
}

ChatInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ChatInput
