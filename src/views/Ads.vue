<template>
  <div> {{authuser}}
  <div v-for="ad in ads" :key="ad.id">
    <div v-if="authuser">
      <div v-if="(!(authuser.id === ad.user_id) && !(ad.pending === 1))">
        <b-card>
      <div>{{ad.description}}</div>
      <div>Price: {{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></div>
      <div>Date of coaching: {{ad.coaching_date}}</div>
          <div>Coaching time: {{ad.duration}}</div>
      <div>
        <div v-for="user in users" :key="user.id">
          <div v-if="ad.user_id === user.id">
            <div>{{user.name}}</div>
            <div v-for="rank in ranks" :key="rank.id">
              <div v-if="user.rank_id === rank.id">
                <span>{{rank.name}}</span>
                <img :src="rank.image" height="150" width="150">
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-info" @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id})">Book it ! <br> {{(ad.hourly_rate)*(ad.duration)}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></button>
    </b-card>
      </div>
    </div>
    <div v-else>
      <div v-if="!(ad.pending === 1)">
        <b-card>
          <div>{{ad.description}}</div>
          <div>Price: {{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></div>
          <div>Date of coaching: {{ad.coaching_date}}</div>
          <div>
            <div v-for="user in users" :key="user.id">
              <div v-if="ad.user_id === user.id">
                <div>{{user.name}}</div>
                <div v-for="rank in ranks" :key="rank.id">
                  <div v-if="user.rank_id === rank.id">
                    <span>{{rank.name}}</span>
                    <img :src="rank.image" height="150" width="150">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-info" @click="notConnected">Book it !</button>
        </b-card>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  name: 'Ads',
  methods: {
    notConnected () {
      window.alert('Please login to book an Ad !')
      window.location.href = 'http://localhost:8080/#/login'
    },
    async bookIt (value) {
      if (this.$store.state.authuser.wallet + value.cost <= 0) {
        alert('Please head to the Wallet shop to buy some gems before booking !')
        window.location.href = 'http://localhost:8080/#/market'
      } else {
        await this.$store.dispatch('bookIt', [this.$store.state.authuser.id, value.id, this.$store.state.authuser.rank_id])
        await this.$store.dispatch('getAds')
        await this.$store.dispatch('addGems', [this.$store.state.authuser.id, value.cost])
      }
    }
  },
  computed: {
    ...mapState(['ads', 'users', 'ranks', 'authuser'])
  },
  mounted () {
    this.$store.dispatch('getAds')
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getRanks')
  }
}
</script>

<style scoped>

</style>
