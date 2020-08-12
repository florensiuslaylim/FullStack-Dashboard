import hostAxios from './axios/hostAxios'

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
      .catch(err => console.log(err))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
