<template>
  <div>
     <div class="home col-5 mx-auto py-5 mt-5">
        <h1 class="text-center">Create a coaching Ad </h1>
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="description">Describe your coaching</label>
              <input
                type="text"
                v-model="form.description"
                class="form-control"
                id="description"
              />
              <span class="text-danger" v-if="this.$store.state.errors.description">
                {{ this.$store.state.errors.description[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="coaching_date">When do you want to coach ?</label>
              <input
                type="date"
                v-model="form.coaching_date"
                class="form-control"
                id="coaching_date"
              />
              <span class="text-danger" v-if="this.$store.state.errors.coaching_date">
                {{ this.$store.state.errors.coaching_date[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="duration">Coaching duration (in hours):</label>
              <b-form-spinbutton
                id="demo-sb"
                v-model="form.duration"
                min="1" max="10">
              </b-form-spinbutton>
              <span class="text-danger" v-if="this.$store.state.errors.duration">
                {{ this.$store.state.errors.duration[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="hourly_rate">Hourly rate <img src="../assets/gem.svg" height="20px" alt=""> /hours</label>
              <b-form-spinbutton
                id="demo-sb"
                v-model="form.hourly_rate"
                min="1" max="1000">
              </b-form-spinbutton>
              <span class="text-danger" v-if="this.$store.state.errors.hourly_rate">
                {{ this.$store.state.errors.hourly_rate[0] }}
              </span>
            </div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                @click="createAd()"
              >
                Become a Sensei !
              </button>
              <br>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      currentDateWithFormat: '',
      form: {
        description: '',
        coaching_date: '',
        duration: null,
        hourly_rate: null
      },
      errors: []
    }
  },
  methods: {
    createAd () {
      this.$store.dispatch('createAd', [this.$store.state.authuser.id, this.form])
      // .then(this.$router.push({ name: 'Ads' }))
      // .then(alert('Ad créé'))
    }
  }
}
</script>

<style>

</style>
