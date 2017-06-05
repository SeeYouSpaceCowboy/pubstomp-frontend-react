import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions/index'

import Avatar from '../components/UserOverlay/Avatar'
import UserMenu from '../components/UserOverlay/UserMenu'

import { onChange, onLogin, onLogout } from '../helpers/AuthHelpers'

class UserOverlay extends Component {
  constructor() {
    super()

    this.state = {
      show: {
        userMenu: false
      },
      form: {
        email: '',
        password: ''
      }
    };

    this.onChange = onChange.bind( this );
    this.onLogin = onLogin.bind( this );
    this.onLogout = onLogout.bind( this );
  }

  handleAvatarClick() {
    let show = Object.assign( {}, this.state.show, { userMenu: !this.state.show.userMenu})

    this.setState({
      show: show
    })
  }

  render() {
    const user = 'email' in this.props.user ? this.props.user : null

    return (
      <div className='user-overlay-container'>
        <Avatar
          user={ user }
          handleAvatarClick={ this.handleAvatarClick.bind( this ) }
        />
        <UserMenu
          show={ this.state.show }
          user={ user }
          auth={ this.props.auth }
          form={ this.state.form}
          onChange={ this.onChange }
          onLogin={ this.onLogin }
          onLogout={ this.onLogout }
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect( mapStateToProps, mapDispatchToProps )(UserOverlay)
