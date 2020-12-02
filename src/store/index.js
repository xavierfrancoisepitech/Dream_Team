// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// to handle state
const state = {
  posts: []
}

// to handle state
const getters = {}

// to handle actions
const actions = {
  getPosts ({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
  }
}

// to handle mutations
const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
    console.log(state.posts)
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
