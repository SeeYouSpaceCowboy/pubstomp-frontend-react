import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions/index'

import Avatar from '../components/UserOverlay/Avatar'
import UserMenu from '../components/UserOverlay/UserMenu'

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
    const user = this.props.user && 'email' in this.props.user ? this.props.user : null

    return (
      <div className='user-overlay-container'>
        <Avatar
          user={ user }
          handleAvatarClick={ this.handleAvatarClick.bind( this ) }
        />
        <UserMenu
          show={ this.state.show }
          user={ user }
          form={ this.state.form}
          onChange={ this.onChange }
          onSubmit={ this.onSubmit }
          onLogout={ this.onLogout }
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect( mapStateToProps, mapDispatchToProps )(UserOverlay)
