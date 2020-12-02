<template>
  <div>
      <h1 class="blue">Composant de test</h1>
          <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      <h2 v-for="post in posts" v-bind:key="post.id">{{ post.title }}</h2>
      <button class="btn btn-outline-secondary">Boo</button>
      <button class="btn btn-primary"></button>
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
