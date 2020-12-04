// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

// to handle state
const state = {
  posts: [],
  user: null
}

// to handle state
const getters = {
  isLogged: state => !!state.user
}

// to handle actions
const actions = {
  getPosts ({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
  },
  login ({ commit }, credentials) {
    return axios
      .post('/login', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },

  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

// to handle mutations
const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
    console.log(state.posts)
  },
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA () {
    localStorage.removeItem('user')
    location.reload()
  }
}

// export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
/** we have just created a boiler plate for our vuex store module**/
