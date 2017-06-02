import { authAdapter } from '../adapters/authAdapter'

const ADD_AUTH = 'ADD_AUTH'
const REMOVE_AUTH = 'REMOVE_AUTH'

export const signUpUser = ( credentials ) => {
  const response = authAdapter.signUpUser( credentials );

  return {
    type: ADD_AUTH,
    payload: response
  }
}

export const loginUser = ( credentials ) => {
  const response = authAdapter.loginUser( credentials );

  // Add thunk to add error message that email/ password does not match

  return {
    type: ADD_AUTH,
    payload: response
  }
}

export const logoutUser = () => {

  return {
    type: REMOVE_AUTH,
    payload: null
  }
}
