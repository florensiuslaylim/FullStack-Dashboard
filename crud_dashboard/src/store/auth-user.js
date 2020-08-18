import hostAxios from './axios/hostAxios'
import { Notify, LocalStorage } from 'quasar'

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
    return hostAxios.post('/register', { username: userData.username, password: userData.password })
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
    return hostAxios.post('/auth', { username: userData.username, password: userData.password })
      .then(response => {
        if (response) {
          LocalStorage.set('token', response.data.access_token)
          return response.data.access_token
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          Notify.create({
            message: 'Your email or password is wrong',
            position: 'top-right',
            color: 'red-10',
            icon: 'warning'
          })
        }
      })
  },
  onLogout ({ commit }) {
    LocalStorage.remove('token')
    return { message: 'Logout successfully' }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
