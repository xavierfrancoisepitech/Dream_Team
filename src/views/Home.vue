<template>
<div>
    <div class="container row mx-auto mb-3 pl-5" id="introwithimage">

        <div class="container col-12 col-md-6 py-5 bg-transparent mx-0 text-left wow animate__animated animate__fadeInLeft">
            <h1 class="display-4">Welcome to </h1>
            <h1 class="display-4 mb-3"><b>RiftSensei !</b></h1>
            <h5 class="mb-4">Start your training and become a legend !</h5>
            <p class="lead">
              <a class="btn btn-primary btn-lg mr-2" href="" role="button">Find your sensei</a>
              <a class="btn btn-outline-secondary text-white btn-lg" href="" role="button">Become a sensei</a>
            </p>

        </div>
              <div class="col-4 col-md-5 mr-3">
                <img class= "wow animate__animated animate__backInRight" src="../assets/proto persolol.png" height="500px">
              </div>
    </div>

    <div style="height: 900px;" class="container-fluid bg-light py-5" id="Features">
        <div class="wow animate__animated animate__fadeInLeft">
        <div class="intro">
            <h3 class="text-center">Features </h3>
        </div>
        <div class="container py-4">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card mb-3 card-team">
                        <div class="card-body text-center">
                            <p><i class="fas fa-bolt mt-5 mb-4"></i></p>
                            <h4 class="card-title mb-5">Easy to use</h4>
                            <p class="card-text mb-4">Sneaker'z is really easy to use. Sell or buy shoes very quickly.</p>

                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">

                    <div class="card mb-3 card-team">
                        <div class="card-body text-center">
                            <p><i class="fas fa-mobile-alt mt-5 mb-4"></i></p>
                            <h4 class="card-title mb-5">Responsive</h4>
                            <p class="card-text mb-4">Sneaker'z is a full responsive service. Use it on your phone, tablet, desktop.</p>

                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">

                    <div class="card mb-3 card-team">
                        <div class="card-body text-center">
                            <p><i class="fas fa-tree mt-5 mb-4"></i></p>
                            <h4 class="card-title mb-5">Green</h4>
                            <p class="card-text mb-4">Sneaker'z is a green start-up ! One tree is planted for each sell.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
            <!-- Team -->
    <div class="container-fluid containergrey py-5 wow animate__animated animate__backInRight" id="Team">
        <h3 class="text-center">Our team</h3>
            <div class="container py-4">

                <div class="row">

                    <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                                    <div class="card mb-3 card-team">
                                        <div class="card-body text-center">
                                            <p><img class="profilePicture " src="" width="200px" height="200px" alt="card image"></p>
                                            <h4 class="card-title">Alexandre</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>
                    <!-- ./Team member -->
                  <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                                    <div class="card card-team mb-3">
                                        <div class="card-body text-center">
                                            <p><img class="profilePicture" src="" width="200px" height="200px" alt="card image"></p>
                                            <h4 class="card-title">François</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>
                    <!-- ./Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                        <div class="card  card-team mb-3">
                            <div class="card-body text-center">
                                <p><b-avatar :src="require('../assets/xavier.png')" size="6rem"></b-avatar></p>
                                <h4 class="card-title">Xavier</h4>
                                <p class="card-text">2020 Epitech Coding Academy student.</p>
                                <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                            </div>
                        </div>

                    </div>
                    <!-- ./Team member -->

                </div>
            </div>
    </div>

    <div class="container mt-0">
        <footer class="pt-4 my-md-5 pt-md-5">
            <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="../assets/proto logo RIFT sensei.png" alt="" height="40">
                <small class="d-block mb-3 text-muted">&copy; 2020</small>
            </div>
            <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="">Recent ads</a></li>
                <li><a class="text-muted" href="">All ads</a></li>
                <li><a class="text-muted" href="">Create ad</a></li>
                <li><a class="text-muted" href="">My profile</a></li>
                <li><a class="text-muted" href="">Register</a></li>
                <li><a class="text-muted" href="">Login</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="">Service Features</a></li>
                <li><a class="text-muted" href="">Team</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
