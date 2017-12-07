import firebase from 'firebase'
export const config = {
  apiKey: 'AIzaSyDmm09AEF-xPcZZfoCDUZCGERSeleg9VJs',
  authDomain: 'simplechat-f13ad.firebaseapp.com',
  databaseURL: 'https://simplechat-f13ad.firebaseio.com',
  projectId: 'simplechat-f13ad',
  storageBucket: 'simplechat-f13ad.appspot.com',
  messagingSenderId: '253410808349'
}

const firebaseInstance = firebase.initializeApp(config)

export default firebaseInstance
