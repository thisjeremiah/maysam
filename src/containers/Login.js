import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  handleSignIn = () => {
    this.props.firebase
      .login({ provider: 'google' })
      .then(() => {
        console.log('Logged in')
        console.log('Redirecting...')
        this.props.history.replace('/')
      })
      .catch(err => {
        console.log('There was an error')
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSignIn}>Sign In With Google</button>
      </div>
    )
  }
}

const enhance = compose(firebaseConnect(), connect(), withRouter)

export default enhance(Login)
