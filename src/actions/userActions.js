import { userAdapter } from '../adapters/userAdapter'

const SUBMIT_PROFILE = 'SUBMIT_PROFILE'
const PROFILE_ERROR = 'PROFILE_ERROR'

export const submitProfile = ( form ) => {
  return function(dispatch) {
    userAdapter.submitProfile( form )
      .then(response => {
        dispatch({ type: SUBMIT_PROFILE });
      })
      .catch(() => {
        dispatch({
          type: PROFILE_ERROR,
          payload: 'Bad Profile Info'
        });
      });
  }
}
