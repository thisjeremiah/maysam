import { compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAAkBQ0Iaf-eBrC3TBLZKgFf1O1oEzjpoc',
  authDomain: 'maysam-6237e.firebaseapp.com',
  databaseURL: 'https://maysam-6237e.firebaseio.com',
  projectId: 'maysam-6237e',
  storageBucket: '',
  messagingSenderId: '924702171677'
}

const config = {
  userProfile: 'users',
  enableLogging: false
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialState = {}

export const store = createStoreWithFirebase(rootReducer, initialState)
