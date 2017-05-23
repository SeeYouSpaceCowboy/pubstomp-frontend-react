import * as userActions from './userActions'

export const signUpUser = ( credentials ) => userActions.signUpUser( credentials )
export const loginUser = ( credentials ) => userActions.loginUser( credentials )
export const logoutUser = ( ) => userActions.logoutUser( )
