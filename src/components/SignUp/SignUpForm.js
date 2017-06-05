import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/index'
import { Row, Col } from 'react-bootstrap'
import TextField from 'material-ui/TextField'
import { onChange } from '../../helpers/AuthHelpers'

class SignUpForm extends Component {
  constructor() {
    super()

    this.state = {
        email: '',
        password: ''
    }
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
          <TextField
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
            hintText="You@Gmail.com"
            floatingLabelText="E-mail"
          />
          <br />
          <TextField
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
            hintText="Don't Use Password"
            floatingLabelText="Password"
            type={"password"} />
      </div>
    )
  }
}

export default SignUpForm
