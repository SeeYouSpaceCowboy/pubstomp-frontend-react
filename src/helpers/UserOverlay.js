function resetForm() {
  this.setState({
    form: {
      email: '',
      password: ''
    }
  });
}

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

export function onSubmit( event ) {
  let selfThis = this;
  event.preventDefault();

  let credentials = this.state.form
  this.props.actions.loginUser( credentials )
    .then( ( response ) => {
      if ( !response.payload || !( 'email' in response.payload ) ) {
        selfThis.props.actions.signUpUser( credentials )
          .then( ( response ) => {
            if ( !response.payload || !( 'email' in response.payload ) ) {
              // create error message for user unable to login or signup
              resetForm.call( selfThis );
            }
            else {
              resetForm.call( selfThis );
            }
          })
          .catch( (err) => {
            console.error( err.message );
          });
      }
      else {
        resetForm.call( selfThis );
      }
    })
    .catch( (err) => {
      console.error( err.message );
    });
}
