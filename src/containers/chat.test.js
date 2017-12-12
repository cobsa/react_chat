import React from 'react'
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { initial } from '../redux/reducers/messageReducer'
import { ChatComponent } from '../containers/chat'
import ChatInput from '../components/chatInput/chatInput'
import ChatMessages from '../components/chatMessages/chatMessages'

Enzyme.configure({ adapter: new Adapter() })

const messageStore = initial

test('Should render page', () => {
  const page = shallow(
    <ChatComponent messages={messageStore.messages} status={messageStore.status} />
  )
  expect(page.exists()).toBeTruthy()
})

test('Should render ChatMessages and ChatInput components', () => {
  const messageStoreFetched = Object.assign({}, messageStore, {
    status: {
      code: 'FETCHED'
    }
  })
  const page = shallow(
    <ChatComponent messages={messageStoreFetched.messages} status={messageStoreFetched.status} />
  )
  expect(page.find(ChatInput).length).toEqual(1)
  expect(page.find(ChatMessages).length).toEqual(1)
})
