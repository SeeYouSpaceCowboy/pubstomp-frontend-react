import { userAdapter } from '../adapters/userAdapter'

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const ADD_AUTH = 'ADD_AUTH'

export const signUpUser = ( credentials ) => {
  console.log('hi')
  return function(dispatch) {
    userAdapter.signUpUser( credentials );
    .then(response => {
      console.log( response.token)
      localStorage.setItem('token', response.token);
      dispatch({ type: ADD_AUTH });
      // browserHistory.push('/feed');
    })
    .catch(() => {
      // dispatch(authError('Bad Login Info'));
    });
  }
}

export const loginUser = ( credentials ) => {
  return function(dispatch) {
    userAdapter.loginUser( credentials );
    .then(response => {
      localStorage.setItem('token', response.token);
      dispatch({ type: ADD_AUTH });
      // browserHistory.push('/feed');
    })
    .catch(() => {
      // dispatch(authError('Bad Login Info'));
    });
  }
}

export const logoutUser = () => {

  return {
    type: LOGOUT_USER,
    payload: null
  }
}
