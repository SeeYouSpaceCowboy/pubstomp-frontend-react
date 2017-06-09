import axios from './index'

export const userAdapter = {

  submitProfile: ( form ) => {
    return axios.post('/profiles', form)
      .then( response => response.data )
      .catch( err => console.error( err.message ) );
  }
}
