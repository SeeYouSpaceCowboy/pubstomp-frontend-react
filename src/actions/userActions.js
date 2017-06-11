import { userAdapter } from '../adapters/userAdapter'

const ADD_PROFILE = 'ADD_PROFILE'
const PROFILE_ERROR = 'PROFILE_ERROR'
const UPDATE_GAMES = 'UPDATE_GAMES'
const GAMELIST_ERROR = 'GAMELIST_ERROR'

export const submitProfile = ( form ) => {
  return function(dispatch) {
    userAdapter.submitProfile( form )
      .then(response => {
        dispatch({
          type: ADD_PROFILE,
          payload: response
        });
      })
      .catch(() => {
        dispatch({
          type: PROFILE_ERROR,
          payload: 'Bad Profile Info'
        });
      });
  }
}

export const updateGames = ( form ) => {
  return function(dispatch) {
    userAdapter.updateGames( form )
      .then(response => {
        dispatch({
          type: UPDATE_GAMES,
          payload: response
        });
      })
      .catch(() => {
        dispatch({
          type: GAMELIST_ERROR,
          payload: 'Bad Game Info'
        });
      });
  }
}

export const fetchUser = () => {
  return function(dispatch) {
    userAdapter.fetchUser()
      .then(response => {
        dispatch({
          type: ADD_PROFILE,
          payload: response
        });
      })
      .catch(() => {
        dispatch({
          type: PROFILE_ERROR,
          payload: 'Profile was not found'
        });
      });
  }
}
