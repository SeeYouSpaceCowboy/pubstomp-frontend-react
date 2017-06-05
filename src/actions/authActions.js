import { userAdapter } from '../adapters/userAdapter'

const ADD_AUTH = 'ADD_AUTH'
const REMOVE_AUTH = 'REMOVE_AUTH'

export const signUpUser = ( credentials ) => {
  return function(dispatch) {
    userAdapter.signUpUser( credentials )
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

export const loginUser = ( credentials ) => {
  return function(dispatch) {
    userAdapter.loginUser( credentials )
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
    type: REMOVE_AUTH,
    payload: null
  }
}
