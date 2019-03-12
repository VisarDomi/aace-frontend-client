<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-lg overlay-light"
      style="background-image: url(static/img/publication1.jpg)"
    >
      <div class="container no-shadow">
        <h1 class="text-center">Coming soon&trade;.</h1>
      </div>
      <div class="container no-shadow">
        <router-link :to="{ name: 'Home' }">
          <h1 class="text-center" id="home">Go to homepage</h1>
        </router-link>
        <router-link :to="{ name: 'Membership' }">
          <h3 class="text-center" id="home">Membership</h3>
        </router-link>
        <router-link :to="{ name: 'Directory' }">
          <h3 class="text-center" id="home">Directory</h3>
        </router-link>
        <router-link :to="{ name: 'Contact' }">
          <h3 class="text-center" id="home">Contact us</h3>
        </router-link>
        <router-link :to="{ name: 'MemberArea' }">
          <h3 class="text-center" id="home">Member Area</h3>
        </router-link>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="nav-on-header smart-nav" id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Page coming soon.</h3>
          </div>
          <h2>We are sorry, but the page that was requested is coming soon.</h2>
        </div>
      </div>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "ComingSoon"
};
</script>

<style scoped>
#home {
  color: rgb(85, 85, 255);
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 240px;
}

.notfound .notfound-404 h1 {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notfound .notfound-404 h1 > span {
  text-shadow: -8px 0px 0px #fff;
}

.notfound .notfound-404 h3 {
  font-family: "Cabin", sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #262626;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound h2 {
  font-family: "Cabin", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  margin-top: 0px;
  margin-bottom: 25px;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 200px;
  }
  .notfound .notfound-404 h1 {
    font-size: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 162px;
  }
  .notfound .notfound-404 h1 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .notfound h2 {
    font-size: 16px;
  }
}
</style>
