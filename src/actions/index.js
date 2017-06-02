import * as authActions from './authActions'

export const signUpUser = ( credentials ) => authActions.signUpUser( credentials )
export const loginUser = ( credentials ) => authActions.loginUser( credentials )
export const logoutUser = ( ) => authActions.logoutUser( )
