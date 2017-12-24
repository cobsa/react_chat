import React from 'react'
import PropTypes from 'prop-types'

class ChatListItem extends React.Component {
  render() {
    let users = this.props
    let chatUsers = users.map((user) => {
      return <li>{user}</li>
    })
    return (
      <div className="chatListItemContainer" onClick={(e) => this.props.onClick(this.props.id)}>
        <div className="chatName">{this.props.name}</div>
        <ul class="chatUsers">{this.props.users}</ul>
      </div>
    )
  }
}

ChatListItem.propTypes = {
  name: PropTypes.string.isRequired
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropType.func.isRequired
}

export default ChatListItem