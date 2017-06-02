export default function authReducer(state={ authentication: false }, action){

  switch (action.type) {

    case 'ADD_AUTH':
      return { ...state, authentication: true }

    case 'REMOVE_AUTH':
      return { ...state, authentication: false }

    case 'AUTH_ERROR':
      return { ...state, error: action.payload }

    default:
      return state
  }
}
