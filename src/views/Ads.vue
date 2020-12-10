<template>
  <div>
    <b-card v-for="ad in ads" :key="ad.id">
      <div>{{ad.description}}</div>
      <div>Price: {{ad.hourly_rate}} €</div>
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
    </b-card>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  name: 'Ads',
  computed: {
    ...mapState(['ads', 'users', 'ranks'])
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
