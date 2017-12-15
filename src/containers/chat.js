import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../redux/actions/messageActions'
import ChatMessages from '../components/chatMessages/chatMessages'
import ChatInput from '../components/chatInput/chatInput'

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: chatID => {
      dispatch(actions.getMessages(chatID))
    },
    addMessage: (message, chatID) => {
      dispatch(actions.addMessage(message, chatID))
    }
  }
}

export class ChatComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      chatInput: '',
      valid: false
    }
    this.handleChatSubmit = this.handleChatSubmit.bind(this)
    this.HandleChatChange = this.HandleChatChange.bind(this)
  }

  componentDidMount() {
    this.props.getMessages(this.props.chatID)
  }

  handleChatSubmit(event) {
    event.preventDefault()
    if (this.state.valid) {
      this.props.addMessage(this.state.chatInput, this.props.chatID)
      this.setState({
        chatInput: '',
        valid: false
      })
    } else {
      // Print error
      console.log('Implement error message')
    }
  }

  HandleChatChange(event) {
    // Validate Chat input??
    let valid = event.target.value ? true : false
    this.setState({
      chatInput: event.target.value,
      valid
    })
  }

  render() {
    const chatStyle = {
      width: '80%',
      margin: 'auto',
      maxWidth: '1200px'
    }
    if (this.props.message.chats[this.props.chatID] !== undefined) {
      return (
        <div style={chatStyle}>
          <ChatMessages messages={this.props.message.chats[this.props.chatID].messages} />
          <ChatInput
            onChange={this.HandleChatChange}
            onSubmit={this.handleChatSubmit}
            value={this.state.chatInput}
            placeholder="Write something"
          />
        </div>
      )
    }
    return (
      <ChatInput
        onChange={this.HandleChatChange}
        onSubmit={this.handleChatSubmit}
        value={this.state.chatInput}
        placeholder="Write something"
      />
    )
  }
}

ChatComponent.propTypes = {
  chatID: PropTypes.string.isRequired
}
const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent)

export default Chat
