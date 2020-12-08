<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <img src="../assets/non.jpg" class="animate__animated animate__infinite animate__shakeY" v-if="this.form.email === 'maroua'" alt="">
    <h1 class="text-center">Login</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            v-model="form.email"
            class="form-control"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <button @click.prevent="login" class="btn btn-primary btn-block">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../apis/User'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    login () {
      User.login(this.form)
        .then(() => {
          localStorage.setItem('auth', 'true')
          this.$router.push({ name: 'Dashboard' })
          location.reload()
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>

<style>
.card {
  background-color: #263646 !important;
}
</style>
