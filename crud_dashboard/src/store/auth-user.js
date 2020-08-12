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
  postLogin ({ commit }, userData) {
    console.log(userData)
    return hostAxios.post('/register', { email: userData.email, password: userData.password })
      .then(response => {
        console.log(response.status)
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
