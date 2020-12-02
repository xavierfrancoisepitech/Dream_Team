<template>
  <div>
      <h1 class="blue">Composant de test</h1>
      <h2 v-for="post in posts" v-bind:key="post.id">{{ post.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Test',
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style scoped>
.blue {
    color: blue;
}
</style>
