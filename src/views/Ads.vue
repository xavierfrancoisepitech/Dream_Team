<template>
<div>
  <div class="container-fluid">
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="mt-2"
    >
      <p>You have successfully booked a coaching, you can now see it on your <router-link to="/dashboard">dashboard</router-link> !</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <div class="row">
      <div class="container col-md-3 pt-4 pb-4 pl-4 pr-0">
          <div class="card" style="height: 700px">
            Search zone
            <b-input type="text" v-model="search" placeholder="Search for an ad"/>
          </div>
      </div>

      <div class="container col-md-9 p-4">
          <div v-for="ad in filteredAds" :key="ad.id">
            <div v-if="authuser">
              <div v-if="(!(ad.pending === 1))">
                <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mb-3 p-3">
                  <b-card-text>
                    <div class="row">
                      <div class="container col-md-4 text-left">
                        <div v-for="user in users" :key="user.id">
                          <div v-if="ad.user_id === user.id">
                            <h6><b>{{user.name}}</b></h6>
                              <h5 v-if="user.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                              </h5>
                            <div v-for="rank in ranks" :key="rank.id">
                              <div v-if="user.rank_id === rank.id">
                                <h6><b>{{rank.name}}</b>
                                  <img :src="rank.image" height="50" width="50">
                                </h6>
                                <b-button variant="outline-info" :to="{ path: 'profile/' + ad.user_id }">Coach profile</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Description</b></h6>
                        <div>{{ad.description}}</div>
                        <br>
                        <h6><b>Date of coaching</b></h6>
                        <div>{{ad.coaching_date}}</div>
                        <br>
                        <h6><b>Duration : </b> {{ad.duration}} hour(s)</h6>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Price</b></h6>
                        <div>{{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""> /hour</div>
                        <br>
                        <div v-if="!(authuser.id === ad.user_id)">
                        <button class="btn btn-primary mt-5 btn-block " @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id}); showAlert();"><b> Book it ! {{(ad.hourly_rate)*(ad.duration)}} </b><img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></button>
                        </div>
                        <div v-else>
                          <button class="btn btn-primary mt-5 btn-block" disabled>You posted this ad</button>
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
            </div>
            <div v-else>
              <div v-if="!(ad.pending === 1)">
                <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mb-3 p-3">
                  <b-card-text>
                    <div class="row">
                      <div class="container col-md-4 text-left">
                        <div v-for="user in users" :key="user.id">
                          <div v-if="ad.user_id === user.id">
                            <h6><b>{{user.name}}</b></h6>
                              <h5 v-if="user.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                              </h5>
                            <div v-for="rank in ranks" :key="rank.id">
                              <div v-if="user.rank_id === rank.id">
                                <h6><b>{{rank.name}}</b>
                                  <img :src="rank.image" height="50" width="50">
                                </h6>
                                <b-button variant="outline-info" :to="{ path: 'profile/' + ad.user_id }">Coach profile</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Description</b></h6>
                        <div>{{ad.description}}</div>
                        <br>
                        <h6><b>Date of coaching</b></h6>
                        <div>{{ad.coaching_date}}</div>
                        <br>
                        <h6><b>Duration : </b> {{ad.duration}} hour(s)</h6>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Price</b></h6>
                        <div>{{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""> /hour</div>
                        <br>
                        <button class="btn btn-primary mt-5 btn-block " @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id}); showAlert();"><b> Book it ! {{(ad.hourly_rate)*(ad.duration)}} </b><img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></button>
                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ads',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      search: ''
    }
  },
  methods: {
    async bookIt (value) {
      if (!this.$store.state.authuser) {
        window.alert('Please login to book an Ad !')
        this.$router.push('login')
      } else if (this.$store.state.authuser.wallet + value.cost <= 0) {
        alert('Please head to the Wallet shop to buy some gems before booking !')
        this.$router.push('Market')
      } else {
        await this.$store.dispatch('bookIt', [this.$store.state.authuser.id, value.id, this.$store.state.authuser.rank_id])
        await this.$store.dispatch('getAds')
        await this.$store.dispatch('addGems', [this.$store.state.authuser.id, value.cost])
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  computed: {
    ...mapState(['ads', 'users', 'ranks', 'authuser']),
    filteredAds () {
      return this.ads.filter(ad => ad.description.toLowerCase().includes(this.search.toLowerCase()))
    }
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
