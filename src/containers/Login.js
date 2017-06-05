import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import * as Actions from '../actions/index'

import LoginForm from '../components/Auth/LoginForm'
import { onChange, onLogin } from '../helpers/AuthHelpers'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      form: {
        email: '',
        password: ''
      }
    };

  }

  componentWillMount() {
    if ( this.props.auth.authentication ) {
      this.props.history.push('/feed')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ( this.props.auth.authentication ) {
      this.props.history.push('/feed')
    }
  }

  render() {

    return (
      <div>
        <LoginForm
          onChange={ onChange.bind(this)}
          onLogin={ onLogin.bind(this)}
          form={ this.state.form }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    actions: bindActionCreators(Actions, dispatch)
})}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( Login ) )
