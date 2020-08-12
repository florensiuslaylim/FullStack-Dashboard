import axios from 'axios'

const hostAxios = axios.create({
  baseURL: 'http://' + process.env.REST_SERVER,
  timeout: 0,
  responseType: 'json' // default,
})

export default hostAxios
