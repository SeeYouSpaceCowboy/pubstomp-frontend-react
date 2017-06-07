export default function userReducer(state={}, action){

  switch (action.type) {

    case 'FETCH_USER':
      return action.payload

    case 'REMOVE_USER':
      return {}

    case 'UPDATE_USER':
      return {}

    default:
      return state
  }
}
