<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-lg overlay-light"
      style="background-image: url(static/img/publication1.jpg)"
    >
      <div class="container no-shadow">
        <router-link :to="{ name: 'Home' }">
          <h1 class="text-center" id="home">Shko ne faqen kryesore</h1>
        </router-link>
        <router-link :to="{ name: 'Contact' }">
          <h3 class="text-center" id="home">Na kontaktoni</h3>
        </router-link>
        <router-link :to="{ name: 'Membership' }">
          <h3 class="text-center" id="home">Behu anetar</h3>
        </router-link>
        <router-link :to="{ name: 'Directory' }">
          <h3 class="text-center" id="home">Kerko anetaret</h3>
        </router-link>
        <router-link :to="{ name: 'MemberArea' }" v-if="isAuthenticated">
          <h3 class="text-center" id="home">Zona e anetareve</h3>
        </router-link>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="nav-on-header smart-nav" id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Faqja nuk u gjend</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>Na vjen keq, por faqja qe kerkuat nuk u gjet</h2>
        </div>
      </div>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NotFound",
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
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
