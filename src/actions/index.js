import * as authActions from './authActions'
import * as userActions from './userActions'

export const signUpUser = ( credentials ) => authActions.signUpUser( credentials )
export const loginUser = ( credentials ) => authActions.loginUser( credentials )
export const logoutUser = ( ) => authActions.logoutUser()

export const submitProfile = ( form ) => userActions.submitProfile( form )
export const fetchUser = () => userActions.fetchUser()
