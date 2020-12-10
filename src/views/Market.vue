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
                <b-dropdown-item @click="addGems(100)">Newbie pack: {{this.money.gems[0]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
                <b-dropdown-item @click="addGems(500)">Intermediate pack: {{this.money.gems[1]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
                <b-dropdown-item @click="addGems(999)">Pro pack: {{this.money.gems[2]}}<img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></b-dropdown-item>
              </b-dropdown>
            </div>
            <br>
            <form>
            <div class="form-group" id="easter">
              <label for="code">Code:</label>
              <input
                type="text"
                v-model="form.code"
                class="form-control"
                id="code"
              />
            </div>
              <div v-if="(this.form.code === 'WeLoveEpitech')">
                <button class="btn btn-info" @click="failedInput">Submit</button>
              </div>
              <div v-else-if="(this.form.code === 'Seb4Ever' || this.form.code === 'TeamJess')">
                <button class="btn btn-info" @click="failedInput2">Submit</button>
              </div>
              <div v-else>
                <button class="btn btn-info" @click="addGems(999)">Submit</button>
              </div>
            </form>
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
      money: {
        gems: [100, 500, 999]
      },
      form: {
        code: ''
      },
      newWallet: ''
    }
  },
  methods: {
    addGems (value) {
      this.$store.dispatch('addGems', [this.$store.state.authuser.id, value])
    },
    failedInput () {
      var img = document.createElement('IMG')
      img.setAttribute('src', 'https://media1.tenor.com/images/d774a5a63588bbb75193a07b635f1389/tenor.gif?itemid=16279809')
      img.setAttribute('width', '304')
      img.setAttribute('height', '228')
      img.setAttribute('alt', '')
      var div = document.createElement('DIV')
      div.innerHTML = 'Are you mocking me?'
      document.getElementById('easter').appendChild(img)
      document.getElementById('easter').appendChild(div)
    },
    failedInput2 () {
      let img = document.createElement('IMG')
      img.setAttribute('src', 'https://townsquare.media/site/295/files/2015/01/Loser.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89')
      img.setAttribute('width', '304')
      img.setAttribute('height', '228')
      img.setAttribute('alt', '')
      document.getElementById('easter').appendChild(img)
    }
  }
}
</script>

<style>

</style>
