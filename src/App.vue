<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/profile" v-if="isLogged">Profile</router-link>
        <router-link to="/login" v-else>Login</router-link>
        <button type="button" class="btn btn-primary" @click="logout()" v-if="isLogged">
          Logout
        </button>
      </div>
    </nav>
    <img src="./assets/proto persolol.png" height="200px">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
