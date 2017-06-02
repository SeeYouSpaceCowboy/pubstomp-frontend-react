export default function userReducer(state={}, action){

  switch (action.type) {

    case 'LOGIN_USER':
      if ( !action.payload ) {
        return state
      }
      return action.payload

    case 'LOGOUT_USER':
      return {}

    case 'UPDATE_USER':
      return {}

    default:
      return state
  }
}
