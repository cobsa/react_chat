import firebaseInstance from './firebase'
import { config } from './firebase'

test('Firebase is initialized', () => {
  expect(firebaseInstance.options).toEqual(config)
})
