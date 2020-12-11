<template>
  <div>
      <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://picsum.photos/200" class="rounded-circle" alt=""/>
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

        <div class="container emp-profile">
          <h4>Sensei dashboard</h4>
          <div>
            <b-tabs>
              <b-tab active>
                <template #title>
                  <b class="text-success">Posted ads</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="(!(ad.pending === 1)) && (ad.user_id === authuser.id)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                              <div>
                                <!-- Using modifiers -->
                                <b-button v-b-toggle.collapse-2 class="mt-5 btn btn-info"><b>Edit</b></b-button>
                              </div>
                            <button class="btn btn-danger mt-1" @click= "deleteAd(ad.id)"><b>Delete</b></button>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>
                    <!-- Element to collapse -->
                                <b-collapse id="collapse-2">
                                  <form>
                                    <div class="form-row">
                                      <div class="form-group col-md-6">
                                        <div>
                                          <label for="example-datepicker">Choose a date</label>
                                          <b-form-datepicker id="example-datepicker" v-model="editForm.coaching_date" class="mb-2"></b-form-datepicker>

                                        </div>
                                      </div>
                                      <div class="form-group col-md-6">
                                        <div>
                                          <label for="demo-sb">Duration in hours</label>
                                          <b-form-spinbutton id="demo-sb" v-model="editForm.duration" min="1" max="10"></b-form-spinbutton>

                                        </div>
                                      </div>
                                      <div class="form-group col-md-6 mx-auto">
                                        <div>
                                          <label for="demo-sb">Hourly rate <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""> /hour</label>
                                          <b-form-spinbutton id="demo-sb" v-model="editForm.hourly_rate" min="1" max="10"></b-form-spinbutton>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label for="inputAddress">Description</label>
                                      <input type="text" class="form-control" id="inputAddress" v-model="editForm.description" :placeholder="ad.description">

                                    </div>
                                    <button class="btn btn-primary" @click="editAd(ad.id)">Edit Ad</button>
                                  </form>
                                </b-collapse>
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <template #title>
                  <b class="text-success">Accepted coachings</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="(!(ad.pending === 0)) && (ad.user_id === authuser.id) && (ad.finished === 0)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                                  </div>
                                  <div v-if="ad.student_rank === rank.id">
                                    <br>
                                    <h6><b>Student rank :</b></h6>
                                    <h6><b>{{rank.name}}</b>
                                      <img :src="rank.image" height="50" width="50">
                                    </h6>
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
                            <button class="btn btn-primary mt-5" @click="coachingDone({'cost' : (ad.hourly_rate)*(ad.duration), 'id' : ad.id})"><b>Coaching done</b></button>
                            <button class="btn btn-info mt-1"><b>Mail student</b></button>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <template #title>
                  <b class="text-success">History coachings</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="(!(ad.pending === 0)) && (ad.user_id === authuser.id) && (ad.finished === 1)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                                  </div>
                                  <div v-if="ad.student_rank === rank.id">
                                    <br>
                                    <h6><b>Student rank :</b></h6>
                                    <h6><b>{{rank.name}}</b>
                                      <img :src="rank.image" height="50" width="50">
                                    </h6>
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
                            <h6><b>Ad rating</b></h6>
                            <div>{{ad.ad_rating}}/5</div>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>

        <div class="container emp-profile">
          <h4>Student dashboard</h4>
          <div>
            <b-tabs>
              <b-tab active>
                <template #title>
                  <b class="text-info">Current classes</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="((ad.pending === 1)) && (ad.student_id === authuser.id) && (ad.finished === 0)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                            <button class="btn btn-info mt-5"><b>Mail the sensei</b></button>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <template #title>
                  <b class="text-info">Classes to rate</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="((ad.pending === 1)) && (ad.student_id === authuser.id) && (ad.rated === 0) && (ad.finished === 1)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                                    <b-button v-b-toggle.collapse-3 class="btn btn-info mb-1"><b>Comment the class</b></b-button>
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
                            <div>
                              <b-form-rating id="rating-sm" variant="warning" v-model="addrating" size="sm" class="rating bg-transparent"></b-form-rating>
                              <button class="btn btn-warning text-dark btn-block" @click="rateAd(ad.id)">Rate class</button>
                            </div>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>

                    <!-- Element to collapse -->
                                <b-collapse id="collapse-3">
                                  <form>
                                    <div class="form-group">
                                      <label for="inputAddress">Comment</label>
                                      <input type="text" class="form-control" id="inputAddress" v-model="comment" placeholder="Let the sensei know what you think about this coaching">
                                    </div>
                                    <button class="btn btn-primary" v-b-toggle.collapse-3 @click="commentAd(ad.id)">Send comment</button>
                                  </form>
                                </b-collapse>
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <template #title>
                  <b class="text-info">History classes</b>
                </template>
                <div v-for="ad in ads" :key="ad.id">
                  <div v-if="((ad.pending === 1)) && (ad.student_id === authuser.id) && (ad.rated === 1) && (ad.finished === 1)">
                    <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mt-3 mb-3 p-3 bglight">
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
                            <h6><b>Ad rating</b></h6>
                            <div>{{ad.ad_rating}}/5</div>
                          </div>
                        </div>
                      </b-card-text>
                    </b-card>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import User from '../apis/User'
export default {
  data () {
    return {
      value: 4,
      addrating: 0,
      editForm: {
        coaching_date: '',
        duration: 0,
        hourly_rate: 0,
        description: ''
      },
      comment: ''
    }
  },
  methods: {
    deleteAd (id) {
      this.$store.dispatch('deleteAd', id)
        .then(this.$store.dispatch('getAds'))
    },
    editAd (id) {
      this.$store.dispatch('editAd', [id, this.editForm])
        .then(this.$store.dispatch('getAds'))
    },
    coachingDone (data) {
      this.$store.dispatch('coachingDone', data.id)
        .then(this.$store.dispatch('getAds'))
        .then(this.$store.dispatch('addGems', [this.$store.state.authuser.id, data.cost]))
    },
    commentAd (id) {
      this.$store.dispatch('commentAd', [id, this.comment])
        .then(this.$store.dispatch('getAds'))
        .then(alert('Commentaire envoyé !'))
    },
    rateAd (id) {
      this.$store.dispatch('rateAd', [id, this.addrating])
        .then(this.$store.dispatch('getAds'))
    }
  },
  created () {
    User.auth().then(response => {
      // console.log(response.data)
      this.$store.commit('SET_USER_DATA', response.data)
    })
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
