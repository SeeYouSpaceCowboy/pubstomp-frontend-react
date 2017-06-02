export function onChange( event ) {
  let form = Object.assign( {}, this.state.form, { [event.target.name]: event.target.value });

  this.setState({
    form: form
  });
}

export function onLogout( event ) {
  event.preventDefault();
  this.props.actions.logoutUser();
}

export function onLogin( event ) {
  event.preventDefault();

  let credentials = this.state.form;
  this.props.actions.loginUser( credentials );
}

export function onSignUp( event ) {
  event.preventDefault();

  let credentials = this.state.form;
  this.props.actions.signUpUser( credentials );
}
