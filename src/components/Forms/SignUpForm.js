import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class SignUpForm extends Component {

  render() {
    return (
      <div>
          <TextField
            name="email"
            value={this.props.form.email}
            onChange={ this.props.onChange }
            hintText="You@Gmail.com"
            floatingLabelText="E-mail"
          />
          <br />
          <TextField
            name="password"
            value={this.props.form.password}
            onChange={ this.props.onChange }
            hintText="Don't Use Password"
            floatingLabelText="Password"
            type={"password"} />
      </div>
    )
  }
}

export default SignUpForm
