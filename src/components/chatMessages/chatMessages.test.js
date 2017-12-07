import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import React from 'react'

import ChatMessages from './chatMessages'

Enzyme.configure({ adapter: new Adapter() })

const messages = [
  {
    text: 'Message 1',
    time: '12-23-2319',
    uid: '0jklsadlsajd09123'
  },
  {
    text: 'Message 2',
    time: '12-23-2319',
    uid: '8u21hashd78a9sh'
  },
  {
    text: 'Message 3',
    time: '12-23-2319',
    uid: '021389hjaskdhaskl'
  }
]

// At the top of your tests:
beforeEach(() => {
  sinon.stub(console, 'error')
})

afterEach(() => {
  console.error.restore() //eslint disable no-console
})

test('Should render component with proper props', () => {
  const component = shallow(<ChatMessages messages={messages} />)
  expect(component.exists()).toBeTruthy()
  sinon.assert.notCalled(console.error)
})
