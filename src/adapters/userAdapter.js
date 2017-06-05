import axios from './index'

export const userAdapter = {

  signUpUser: ( credentials ) => {
    return axios.post('/signup', credentials)
      .then( response => response.data )
      .catch( err => console.error( err.message ) );
  },

  loginUser: ( credentials ) => {
    return axios.post('/login', credentials)
      .then( response => response.data )
      .catch( err => console.error( err.message ) );
  },

  queryUsers: ( query ) => {
    // return axios.get(`users/query/${query}`).then(response => response.data)
  }

}
