import messageReducer from './messageReducer'
import { initial } from './messageReducer'

test('Default case returns different object', () => {
  expect(messageReducer(initial, {}) === initial).toBeFalsy()
})
