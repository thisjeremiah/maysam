import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './containers/Nav'
import Home from './containers/Home'
import Login from './containers/Login'
import { store } from './createStore.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <hr />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
