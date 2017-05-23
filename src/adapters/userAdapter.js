import axios from './index'

export const userAdapter = {

  signUpUser: ( credentials ) => {
    return axios.post('/users', credentials).then( response => response.data.user )
  },

  loginUser: ( credentials ) => {
    return axios.get(`/users/${credentials.email}`)
      .then( response => response.data.user )
      .catch( err => console.error( err.message ) )
  },

  queryUsers: ( query ) => {
    // return axios.get(`users/query/${query}`).then(response => response.data)
  }

}
