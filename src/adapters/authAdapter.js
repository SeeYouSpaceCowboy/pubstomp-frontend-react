import axios from './index'

export const authAdapter = {

  signUpUser: ( credentials ) => {
    return axios.post('/signup', credentials)
      .then( response => response.data )
      .catch( err => err );
  },

  loginUser: ( credentials ) => {
    return axios.post('/login', credentials)
      .then( response => response.data )
      .catch( err => err );
  }

}
