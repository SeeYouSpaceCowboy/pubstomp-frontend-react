import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions/index'

import Avatar from '../components/UserOverlay/Avatar'
import UserMenu from '../components/UserOverlay/UserMenu'

import { onSignUp, onChange, onLogout } from '../helpers/UserOverlay'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      form: {
        email: '',
        password: ''
      }
    };

    this.onSignUp = onSignUp.bind( this );
    this.onChange = onChange.bind( this );
  }

  render() {
    const user = this.props.user && 'email' in this.props.user ? this.props.user : null

    return (
      <div className='user-overlay-container'>
        <UserMenu
          show={ this.state.show }
          user={ user }
          form={ this.state.form}
          onChange={ this.onChange }
          onSignUp={ this.onSignUp }
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect( mapStateToProps, mapDispatchToProps )(SignUp)
