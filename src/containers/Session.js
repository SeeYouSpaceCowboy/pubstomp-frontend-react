import React, { Component } from 'react'

import LoginForm from '../components/Session/LoginForm'

class Session extends Component {
  constructor() {
    super()

    this.state = {
      inputs: {
        email: '',
        password: ''
      }
    };
  }

  onChange( event ) {
    let inputs = Object.assign( {}, this.state.inputs, { [event.target.name]: event.target.value })

    this.setState({
      inputs: inputs
    });
  }

  onSubmit( event ) {
    event.preventDefault()

    let credentials = this.state.inputs
    this.props.actions.loginUser( credentials )

    this.setState({
      inputs: {
        email: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <div>
        <LoginForm
          inputs={ this.state.inputs }
          onChange={ this.onChange.bind( this ) }
          onSubmit={ this.onSubmit.bind( this ) }
          />
      </div>
    )
  }
}

export default Session
