export function onChange( event ) {
  let form = Object.assign( {}, this.state.form, { [event.target.name]: event.target.value });

  this.setState({
    form: form
  });
}

export function onProfileChange( event ) {
  let profileForm = Object.assign( {}, this.state.profileForm, { [event.target.name]: event.target.value });

  this.setState({profileForm})
}

export function onGameChange( id ) {
    if (id.toString() in (this.state.gamesForm.selectedGames)) {
      let selectedGames = {}
      for(let key in this.state.gamesForm.selectedGames) {
          if(key !== id.toString()) {
            selectedGames[key]= this.state.gamesForm.selectedGames[key]
          }
        }
      this.setState({gamesForm: {selectedGames}})
    } else {
      this.setState({gamesForm: {selectedGames: {...this.state.gamesForm.selectedGames, [id.toString()]: id} }})
    }
  }



export function handleGenderChange(event, index, value) {
  let profileForm = Object.assign( {}, this.state.profileForm, { gender: value });

  this.setState({profileForm})
}

export function handleDateChange(event, date) {
  let profileForm = Object.assign( {}, this.state.profileForm, { dob: date });

  this.setState({profileForm})
}

export function onLogout( event ) {
  event.preventDefault();
  this.props.actions.logoutUser();
  this.props.history.push('/');
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
