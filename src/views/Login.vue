<template>
  <div>
    {{errors}}
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">
                        <h5 class="mb-3">Login</h5>
                        <img class="mb-4 rounded-circle" src="../assets/user.jpg" alt="" width="72" height="72">
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-mail Adress</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="password" required autocomplete="current-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary col-5">
                                        Login
                                    </button>
                                    <p>
                                        Not yet a member? Register
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Profile' })
        })
        .catch(err => {
          this.errors = err
        })
    }
  }
}
</script>
