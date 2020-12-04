<template>
  <div>
      <h1>Bonjour {{ this.$store.state.user.user }}</h1>
      <h1>Token de connexion {{ this.$store.state.user.token }}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
