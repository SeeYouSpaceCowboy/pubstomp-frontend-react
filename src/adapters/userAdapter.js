import axios from './index'

export const userAdapter = {

  submitProfile: ( form ) => {
    return axios.post('/profiles', form)
      .then( response => response.data.user )
      .catch( err => console.error( err.message ) );
  },
  fetchUser: () => {
    return axios.get('/fetchUser')
      .then( response => response.data.user )
      .catch( err => console.error( err.message ) );
  }
}
