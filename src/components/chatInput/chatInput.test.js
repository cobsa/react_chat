import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import React from 'react'
import ChatInput from './chatInput'

Enzyme.configure({ adapter: new Adapter() })

// At the top of your tests:
beforeEach(() => {
  sinon.stub(console, 'error')
})

afterEach(() => {
  console.error.restore() //eslint disable no-console
})

test('Should render component', () => {
  const component = shallow(
    <ChatInput value={'somestring'} onChange={sinon.spy()} onSubmit={sinon.spy()} />
  )
  expect(component.exists()).toBeTruthy()
  sinon.assert.notCalled(console.error)
})
