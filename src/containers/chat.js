import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../redux/actions/messageActions'
import ChatMessages from '../components/chatMessages/chatMessages'
import ChatInput from '../components/chatInput/chatInput'

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
    status: state.message.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(actions.getMessages())
    },
    addMessage: message => {
      dispatch(actions.addMessage(message))
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
    this.props.getMessages()
  }

  handleChatSubmit(event) {
    event.preventDefault()
    if (this.state.valid) {
      this.props.addMessage(this.state.chatInput)
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
    if (this.props.status.code == 'FETCHED') {
      return (
        <div>
          <ChatMessages messages={this.props.messages} />
          <ChatInput
            onChange={this.HandleChatChange}
            onSubmit={this.handleChatSubmit}
            value={this.state.chatInput}
          />
        </div>
      )
    }
    return null
  }
}

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent)

export default Chat
