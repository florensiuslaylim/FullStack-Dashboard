import hostAxios from './axios/hostAxios'
import { Notify } from 'quasar'

const state = {
  users: ''
}

const getters = {
  users: state => state.users
}

const mutations = {
  clearUser (state) {
    state.userLogin = {}
  }
}

const actions = {
  postRegister ({ commit }, userData) {
    return hostAxios.post('/register', { email: userData.email, password: userData.password })
      .then(response => {
        if (response) {
          return response.data.message
        }
      })
      .catch(err => {
        console.log(err)
        if (err.response) {
          Notify.create({
            message: err.response.data.message,
            position: 'top-right',
            color: 'red-10',
            icon: 'warning'
          })
        }
      })
  },
  postLogin ({ commit }, userData) {
    return hostAxios.post('/auth', { email: userData.email, password: userData.password })
      .then(response => {
        if (response) {
          return response.data.message
        }
      })
      .catch(err => {
        console.log(err)
        if (err.response) {
          Notify.create({
            message: err.response.data.message,
            position: 'top-right',
            color: 'red-10',
            icon: 'warning'
          })
        }
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
