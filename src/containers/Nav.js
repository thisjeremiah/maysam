import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { pathToJS, firebaseConnect } from 'react-redux-firebase'

const Nav = ({ firebase, auth }) =>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    {auth
      ? <button onClick={() => firebase.logout()}>Logout</button>
      : <p>Go to login page</p>}
  </div>

const mapStateToProps = ({ firebase }) => ({
  auth: pathToJS(firebase, 'auth')
})

const enhance = compose(firebaseConnect(), connect(mapStateToProps))
export default enhance(Nav)
