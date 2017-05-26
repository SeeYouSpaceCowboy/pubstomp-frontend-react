import React, { Component } from 'react'

import UserOverlayComponent from '../components/Session/UserOverlay'

import { onSubmit, onChange, onLogout } from '../helpers/UserOverlay'

class UserOverlay extends Component {
  constructor() {
    super()

    this.state = {
      show: {
        userMenu: true
      },
      form: {
        email: '',
        password: ''
      }
    };

    this.onSubmit = onSubmit.bind( this );
    this.onChange = onChange.bind( this );
    this.onLogout = onLogout.bind( this );
  }

  handleAvatarClick() {
    let show = Object.assign( {}, this.state.show, { userMenu: !this.state.show.userMenu})

    this.setState({
      show: show
    })
  }

  render() {
    return (
      <div>
        <UserOverlayComponent
          user={ this.props.user }
          show={ this.state.show }
          form={ this.state.form }
          handleAvatarClick={ this.handleAvatarClick.bind( this ) }
          onChange={ this.onChange.bind( this ) }
          onSubmit={ this.onSubmit.bind( this ) }
          onLogout={ this.onLogout.bind( this ) }
        />
      </div>
    )
  }
}

export default UserOverlay
