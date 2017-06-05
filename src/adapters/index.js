import axios from 'axios'

const URL = 'http://localhost:4000/api'
// const URL = 'https://pubstomp.herokuapp.com/api'

axios.defaults.baseURL = URL
axios.defaults.headers.common['AUTHORIZATION'] = localStorage.getItem('token')

export default axios
