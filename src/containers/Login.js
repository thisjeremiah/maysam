import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

// firebase needs to be accessed via props
// react-router needs to be accessed via props

class Login extends React.Component {
  handleSignIn = () => {
    this.props.firebase
      .login({ provider: 'google' })
      .then(() => {
        console.log('User is logged in')
        console.log('Redirecting...')
        this.props.history.replace('/') // navigate to /
      })
      .catch(err => {
        console.log('You had trouble logging in...')
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
