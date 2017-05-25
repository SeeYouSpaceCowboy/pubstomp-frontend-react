import React, { Component } from 'react'

import SessionForm from '../components/Session/SessionForm'
import { onSubmit, onChange } from '../helpers/UserOverlay'

class UserOverlay extends Component {
  constructor() {
    super()

    this.state = {
      show: {

      },
      form: {
        email: '',
        password: ''
      }
    };

    this.onSubmit = onSubmit.bind( this )
    this.onChange = onChange.bind( this )
  }

  render() {
    return (
      <div>
        <SessionForm
          show={ true }
          form={ this.state.form }
          onChange={ this.onChange.bind( this ) }
          onSubmit={ this.onSubmit.bind( this ) }
          />
      </div>
    )
  }
}

export default UserOverlay
