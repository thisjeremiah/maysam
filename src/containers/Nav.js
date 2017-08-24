import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'

const Nav = ({ firebase }) =>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <button onClick={() => console.log(firebase.logout) || firebase.logout()}>
      Logout
    </button>
  </div>

const enhance = compose(connect(), firebaseConnect())

export default enhance(Nav)
