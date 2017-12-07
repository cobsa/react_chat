import React from 'react'
import PropTypes from 'prop-types'

class ChatInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input value={this.props.value} type="text" onChange={this.props.onChange} />
      </form>
    )
  }
}

ChatInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ChatInput
