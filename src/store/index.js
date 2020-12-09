// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import User from '../apis/User'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.withCredentials = true

// to handle state
const state = {
  posts: [],
  authuser: null
}

// to handle state
const getters = {
}

// to handle actions
const actions = {
  getPosts ({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
  },
  addGems ({ commit }, data) {
    axios.put('/users/' + data[0], {
      wallet: state.authuser.wallet + data[1]
    })
      .then(User.auth().then(response => {
        commit('SET_USER_DATA', response.data)
      }))
  }
}

// to handle mutations
const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
    console.log(state.posts)
  },
  SET_USER_DATA (state, userData) {
    state.authuser = userData
  },

  CLEAR_USER_DATA (state) {
    state.authuser = null
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
