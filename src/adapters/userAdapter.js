import axios from './index'

export const userAdapter = {

  submitProfile: ( form ) => {
    return axios.post('/profiles', form)
      .then( response => response.data.data )
      .catch( err => console.error( err.message ) );
  },
  fetchUser: () => {
    return axios.get('/profiles/test')
      .then( response => response.data.data )
      .catch( err => console.error( err.message ) );
  }
}
