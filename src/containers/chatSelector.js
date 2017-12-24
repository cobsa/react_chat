import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* 
Allows user to select chat and create new chats
*/

class ChatSelectorComponent extends React.Component {
  render() {
    let chats = this.props.chat
    let chatList = chats.map(chat => {
      return (
        <ChatList key={chat.id} name={chat.name} users={chat.users} onChange={this.handleChat} />
      )
    })
  }
}
