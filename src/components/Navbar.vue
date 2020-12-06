<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
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

</style>
