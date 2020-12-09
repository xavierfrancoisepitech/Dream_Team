<template>
  <div class="container">
    <h1>Market</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Buy Gems</div>

          <div class="card-body">
            <div>
              <b-dropdown id="dropdown-1" text="Select your bundle" class="m-md-2" variant="info">
                <b-dropdown-item @click="addGems(100)">Newbie pack: {{this.form.gems[0]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
                <b-dropdown-item @click="addGems(500)">Intermediate pack: {{this.form.gems[1]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
                <b-dropdown-item @click="addGems(999)">Pro pack: {{this.form.gems[2]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  data () {
    return {
      form: {
        gems: [100, 500, 999]
      },
      newWallet: ''
    }
  },
  methods: {
    addGems (value) {
      this.$store.dispatch('addGems', [this.$store.state.authuser.id, value])
    }
  }
}
</script>

<style>

</style>
