import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  reactReduxFirebase,
  firebaseStateReducer as firebase
} from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension'

const firebaseConfig = {
  apiKey: 'AIzaSyAAkBQ0Iaf-eBrC3TBLZKgFf1O1oEzjpoc',
  authDomain: 'maysam-6237e.firebaseapp.com',
  databaseURL: 'https://maysam-6237e.firebaseio.com',
  projectId: 'maysam-6237e',
  storageBucket: '',
  messagingSenderId: '924702171677'
}

const config = {
  userProfile: 'users'
}

const rootReducer = combineReducers({
  firebase
})

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: []
})

export const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebaseConfig, config),
    applyMiddleware()
  )
)
