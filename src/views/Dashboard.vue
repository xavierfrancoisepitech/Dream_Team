<template>
  <div>
      <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="../assets/user.jpg" class="rounded-circle" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 my-md-auto">
                        <div class="profile-head mt-2">
                                    <h3>
                                        {{ authuser.name }}
                                    </h3>
                                    <h5 v-if="authuser.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                                    </h5>
                                      <img class = "mt-3" src="../assets/ranks/9.png" height="50px"/>
                        </div>
                    </div>
                    <div class="col-md-2 mt-2 ">
                        <b-button :to="{ name: 'EditProfile' }"> Edit Profile </b-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-coach mt-5">
                            <h6>COACHING HOURS</h6>
                            {{ authuser.hours }}
                            <h6 class = "mt-5">RATE</h6>
                            <b-form-rating v-model="value" variant="warning" class="mb-2 bg-transparent rating"></b-form-rating>
                        </div>
                        <div class="profile-coach mt-5">
                            <h6 class="mb-4">SOCIAL MEDIAS</h6>
                            <a class="text-white" :href="authuser.twitter_link">
                              <i class="fab fa-twitter fa-2x mx-3"></i>
                            </a>
                            <a class="text-white" :href="authuser.discord_link">
                              <i class="fab fa-discord fa-2x mx-3"></i>
                            </a>
                            <a class="text-white" :href="authuser.opgg_link">
                              <i class="fab fa-gg fa-2x mx-3"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-8 text-left">
                      <b-card title="Description" class="bglight mt-5">
                        <b-card-text>
                          {{ authuser.description }}
                        </b-card-text>
                      </b-card>
                      <b-card title="Pedagogy" class="bglight mt-5">
                        <b-card-text>
                          {{ authuser.pedagogy }}
                        </b-card-text>
                      </b-card>
                      <b-card title="Comments" class="bglight mt-5">
                        <b-card-text>
                          {{ authuser.description }}
                        </b-card-text>
                      </b-card>
                    </div>
                </div>
            </form>
        </div>
  </div>
</template>

<script>
import User from '../apis/User'
export default {
  data () {
    return {
      value: 4
    }
  },
  created () {
    User.auth().then(response => {
      // console.log(response.data)
      this.$store.commit('SET_USER_DATA', response.data)
    })
  },
  computed: {
    authuser () {
      return this.$store.state.authuser
    }
  }
}
</script>

<style scoped>

.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #263646;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: 10%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h6{
    color: #ccc500;
}

.profile-coach{
    padding: 14%;
    background-color: #293a4b;
}

.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
.rating {
  border: none;
}
.bglight {
  background-color: #293a4b !important;
  border: none;
}
</style>
