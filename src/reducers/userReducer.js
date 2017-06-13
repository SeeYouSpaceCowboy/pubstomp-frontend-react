export default function userReducer(state={}, action){

  switch (action.type) {

    case 'ADD_PROFILE':
      return {...state.user, email: action.payload.email, profile: action.payload.profile}

    case 'UPDATE_GAMES':
      return {...state.user, gamelist: action.payload.gamelist}

    case 'REMOVE_USER':
      return {}

    case 'UPDATE_USER':
      return {}

    default:
      return state
  }
}
