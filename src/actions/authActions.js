import { userAdapter } from '../adapters/userAdapter'

const ADD_AUTH = 'ADD_AUTH'
const REMOVE_AUTH = 'REMOVE_AUTH'
const AUTH_ERROR = 'AUTH_ERROR'

export const signUpUser = ( credentials ) => {
  return function(dispatch) {
    userAdapter.signUpUser( credentials )
      .then(response => {
        localStorage.setItem('token', response.token);
        dispatch({ type: ADD_AUTH });
      })
      .catch(() => {
        dispatch({
          type: AUTH_ERROR,
          payload: 'Bad Login Info'
        });
      });
  }
}

export const loginUser = ( credentials ) => {
  const self = this;
  return function(dispatch) {
    userAdapter.loginUser( credentials )
      .then(response => {
        localStorage.setItem('token', response.token);
        dispatch({ type: ADD_AUTH });
        self.props.history.push('/feed')
      })
      .catch(() => {
        dispatch({
          type: AUTH_ERROR,
          payload: 'Bad Login Info'
        });
      });
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  
  return {
    type: REMOVE_AUTH,
    payload: null
  }
}
