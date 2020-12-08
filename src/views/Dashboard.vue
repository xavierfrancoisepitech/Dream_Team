<template>
  <div>
      <h1>Bonjour {{ this.$store.state.user }}</h1>
  </div>
</template>

<script>
import User from '../apis/User'
export default {
  mounted () {
    User.auth().then(response => {
      // console.log(response.data)
      this.$store.commit('SET_USER_DATA', response.data)
    })
  }
}
</script>

<style>

</style>
