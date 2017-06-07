export default function authReducer(state={ authentication: false }, action){

  switch (action.type) {

    case 'ADD_AUTH':
      return { ...state, loading: false, authentication: true }

    case 'REMOVE_AUTH':
      return { ...state, loading: false, authentication: false }

    case 'AUTH_ERROR':
      return { ...state, loading: false, error: action.payload }

    case 'LOADING_AUTH':
      return { ...state, loading: true }

    default:
      return state
  }
}
