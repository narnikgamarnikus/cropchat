import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBkyu_-FT-MotYYNGq-5cegVR3NfsgWhyg',
  authDomain: 'cropchat-3e81c.firebaseapp.com',
  databaseURL: 'https://cropchat-3e81c.firebaseio.com',
  projectId: 'cropchat-3e81c',
  storageBucket: 'cropchat-3e81c.appspot.com',
  messagingSenderId: '104203513504'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
