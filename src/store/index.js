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
  ads: [],
  users: [],
  ranks: [],
  authuser: null
}

// to handle state
const getters = {
}

// to handle actions
const actions = {
  getAds ({ commit }) {
    axios.get('/ad')
      .then(response => {
        commit('SET_ADS', response.data)
      })
  },
  addGems ({ commit }, data) {
    axios.put('/users/' + data[0], {
      wallet: state.authuser.wallet + data[1]
    })
      .then(User.auth().then(response => {
        commit('SET_USER_DATA', response.data)
      }))
  },
  getUsers ({ commit }) {
    axios.get('/users')
      .then(response => {
        commit('SET_USERS', response.data)
      })
  },
  getRanks ({ commit }) {
    axios.get('/rank')
      .then(response => {
        commit('SET_RANKS', response.data)
      })
  },
  bookIt ({ commit }, data) {
    axios.put('/ads', {
      student_id: state.authuser.id,
      student_rank: state.authuser.rank_id,
      pending: 1
    })
      .then(response => commit('BOOK_AD', response.data))
  }
}

// to handle mutations
const mutations = {
  SET_ADS (state, ads) {
    state.ads = ads
    console.log(state.ads)
  },
  SET_USER_DATA (state, userData) {
    state.authuser = userData
  },

  CLEAR_USER_DATA (state) {
    state.authuser = null
    location.reload()
  },
  SET_USERS (state, users) {
    state.users = users
  },
  SET_RANKS (state, ranks) {
    state.ranks = ranks
  },
  BOOK_AD (state, ad) {
    state.ads = ad
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
