<template>
  <div>
    <!-- Navigation bar -->
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="pull-left">
          <a href="#" data-toggle="offcanvas" class="navbar-toggle" style="padding-top:20px;">
            <i class="ti-menu"></i>
          </a>

          <div class="logo-wrapper show-logo-1">
            <router-link :to="{ name: 'Home' }" class="logo">
              <img src="/static/img/logo_partial.png" alt="logo">
            </router-link>
            <router-link :to="{ name: 'Home' }" class="logo-alt">
              <img src="/static/img/logo_partial_alt.png" alt="logo-alt">
            </router-link>
          </div>
          <div class="logo-wrapper show-logo-2">
            <router-link :to="{ name: 'Home' }" class="logo">
              <img src="/static/img/logo_full.png" alt="logo">
            </router-link>
            <router-link :to="{ name: 'Home' }" class="logo-alt">
              <img src="/static/img/logo_full_alt.png" alt="logo-alt">
            </router-link>
          </div>
        </div>
        <!-- END Logo -->
        <!-- User account -->
        <div class="pull-right user-login" v-if="!isAuthenticated">
          <router-link :to="{ name: 'Login' }" class="btn btn-sm btn-primary" id="loginButton">Hyr</router-link>ose
          <router-link :to="{ name: 'Register' }">Regjistrohu</router-link>
        </div>
        <div class="pull-right" v-else>
          <ul class="profile-menu become-inline">
            <li>
              <a href="#" v-if="getCurrentUser.application_status == 'blank'">
                <i class="fa fa-user fa-2x profile-icon become-inline"></i>
                <div class="become-inline become-margin-right">Profili</div>
              </a>
              <router-link :to="{ name: 'Profile', params: { id: getCurrentUser.id } }" v-else>
                <i class="fa fa-user fa-2x profile-icon become-inline"></i>
                <div class="become-inline become-margin-right">Profili</div>
              </router-link>
              <ul>
                <li>{{ getCurrentUser.email }}</li>
                <li
                  v-if="getCurrentUser.first_name"
                >{{ getCurrentUser.first_name + " " + getCurrentUser.last_name }}</li>
              </ul>
            </li>
          </ul>
          <div @click="logout" class="user-login become-inline">
            <div class="btn btn-sm btn-primary">Dil</div>
          </div>
        </div>
        <!-- END User account -->
        <!-- Navigation menu -->
        <ul class="nav-menu" @click="closeNav()">
          <li>
            <router-link :to="{ name: 'Home' }">SHOSHIK</router-link>
            <ul>
              <li>
                <router-link :to="{ name: 'Home' }">Faqja kryesore</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'About' }">Rreth nesh</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Contact' }">Na kontaktoni</router-link>
              </li>
              <!-- <li>
                <router-link :to="{name: 'Board'}">Board</router-link>
              </li>-->
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'Membership' }">Anetaresia</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Directory' }">Indeksi i inxhiniereve</router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link :to="{ name: 'MemberArea' }">Zona e anetareve</router-link>
            <ul>
              <li v-if="getCurrentUser.application_status != 'blank'">
                <router-link :to="{ name: 'Profile', params: { id: getCurrentUser.id } }">Profili</router-link>
              </li>
              <li v-if="getCurrentUser.application_status == 'blank'">
                <router-link :to="{ name: 'Application' }">Forma e aplikimit</router-link>
              </li>
              <li v-if="getCurrentUser.application_status == 'rebutted'">
                <router-link :to="{ name: 'Reapplication' }">Forma e riaplikimit</router-link>
              </li>
              <li v-if="getCurrentUser.payment_status == 'blank'">
                <router-link :to="{ name: 'SendingPayment' }">Mandati i pageses</router-link>
              </li>
              <li v-if="getCurrentUser.payment_status == 'rebutted_payment'">
                <router-link :to="{ name: 'SendingPayment' }">Mandati i pageses</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'ApplicationStatus' }">Statusi i aplikimit</router-link>
              </li>
              <li v-if="getCurrentUser.application_status == 'accepted'">
                <router-link :to="{ name: 'Communications' }">Komunikime zyrtare</router-link>
              </li>
              <li v-if="getCurrentUser.application_status == 'accepted'">
                <router-link :to="{ name: 'ComingSoon' }">Votime</router-link>
              </li>
              <!-- <li @click="logout" v-if="isAuthenticated">
                <a href="#">Dil</a>
              </li>-->
              <!-- <li><router-link to="/board">Board of directors</router-link></li> -->
            </ul>
          </li>
        </ul>
        <!-- END Navigation menu -->
      </div>
    </nav>
    <!-- END Navigation bar -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT, FETCH_APPLICATION_INFO } from "@/store/actions.type";
export default {
  name: "AppNavbar",
  methods: {
    closeNav() {
      document.querySelector("#body").classList.remove("offcanvas-show");
      document.querySelector("html").style.cssText += "overflow: visible;";
      let element = document.querySelectorAll(".offcanvas-backdrop");
      Array.prototype.forEach.call(element, function(node) {
        node.parentNode.removeChild(node);
      });
    },
    async logout() {
      await this.$store.dispatch(LOGOUT)
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    ...mapGetters(["getCurrentUser", "isAuthenticated"])
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$store.dispatch(FETCH_APPLICATION_INFO);
    }
  }
};
</script>

<style scoped>
/* go to profile margin */
.become-margin-top {
  margin-top: 10px;
}

.profile-icon {
  margin-right: 10px;
}

.become-inline {
  display: inline-block;
}

.become-margin-right {
  margin-right: 10px;
}

/* show only small logo on small screens */
@media screen and (min-width: 1122px) {
  .show-logo-1 {
    display: none !important;
  }

  .navbar-toggle {
    margin-top: 10px;
  }

  /* #loginButton {
    margin-bottom: 11px;
  } */
}
/* dont show big logo on these screens */
@media screen and (min-width: 992px) and (max-width: 1121px) {
  .show-logo-2 {
    display: none !important;
  }
}

@media screen and (min-width: 639px) and (max-width: 991px) {
  .show-logo-1 {
    display: none !important;
  }
}

@media screen and (min-width: 0px) and (max-width: 638px) {
  .show-logo-2 {
    display: none !important;
  }
  .logo-alt {
    margin-top: 11px;
  }

  .user-login {
    margin-top: 11px;
  }
}

.navbar .logo-alt img,
.navbar .logo img {
  margin-top: 0px;
}

.profile-menu {
  display: inline-block;
  text-align: center;
}

.profile-menu > li {
  position: relative;
  display: inline-block;
  padding: 0 2px;
}

.profile-menu > li:hover > a {
  color: #29aafe;
}

.profile-menu a {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0 12px;
  line-height: 60px;
  color: #7e8890;
  -webkit-transition: color 0.2s linear;
  -o-transition: color 0.2s linear;
  transition: color 0.2s linear;
}

.profile-menu a.active,
.profile-menu a:focus,
.profile-menu a:hover {
  color: #29aafe;
  text-decoration: none;
}

.profile-menu strong {
  font-weight: 700;
}

.profile-menu ul {
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 2;
  background-color: #fff;
  text-align: left;
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  -webkit-box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.15);
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.15);
  -webkit-transition: opacity 0.4s ease-in-out, top 0.2s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out, top 0.2s ease-in-out;
  transition: opacity 0.4s ease-in-out, top 0.2s ease-in-out;
}

.profile-menu ul:before {
  content: "";
  position: absolute;
  top: -4px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.profile-menu ul li a {
  font-family: Open Sans, sans-serif;
  text-transform: none;
  letter-spacing: 1px;
  line-height: 32px;
  padding-top: 3px;
  padding-bottom: 3px;
  white-space: nowrap;
  display: block;
  min-width: 150px;
  font-weight: 500;
  font-size: 13px;
  color: #7e8890;
  border-bottom: 1px solid #f8f9fa;
}

.profile-menu ul li:last-child a {
  border-bottom: 0;
}

.profile-menu ul a.active {
  border-top: none;
}

.nav-on-header .navbar .profile-menu a,
.nav-on-header .navbar .navbar-toggle {
  color: #fff;
  font-weight: 500;
  opacity: 0.6;
  -webkit-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
}

.nav-on-header .navbar .profile-menu a.active,
.nav-on-header .navbar .profile-menu a:focus,
.nav-on-header .navbar .profile-menu a:hover,
.nav-on-header .navbar .navbar-toggle.active,
.nav-on-header .navbar .navbar-toggle:focus,
.nav-on-header .navbar .navbar-toggle:hover {
  color: #fff;
  opacity: 1;
}

.nav-on-header .navbar .profile-menu ul li a {
  color: #7e8890;
  font-weight: 500;
  opacity: 1;
}

.nav-on-header .navbar .profile-menu ul li a.active,
.nav-on-header .navbar .profile-menu ul li a:focus,
.nav-on-header .navbar .profile-menu ul li a:hover {
  color: #29aafe;
  opacity: 1;
}

.nav-on-header .navbar .profile-menu > li:hover > a {
  color: #fff;
  opacity: 1;
}

.smart-nav.body-scrolled .navbar .profile-menu a,
.smart-nav.body-scrolled .navbar .navbar-toggle,
.sticky-nav.body-scrolled .navbar .profile-menu a,
.sticky-nav.body-scrolled .navbar .navbar-toggle {
  color: #9da7ad;
  font-weight: 500;
  opacity: 1;
}

.smart-nav.body-scrolled .navbar .profile-menu > li:hover > a,
.smart-nav.body-scrolled .navbar .profile-menu a.active,
.smart-nav.body-scrolled .navbar .profile-menu a:focus,
.smart-nav.body-scrolled .navbar .profile-menu a:hover,
.smart-nav.body-scrolled .navbar .navbar-toggle.active,
.smart-nav.body-scrolled .navbar .navbar-toggle:focus,
.smart-nav.body-scrolled .navbar .navbar-toggle:hover,
.sticky-nav.body-scrolled .navbar .profile-menu > li:hover > a,
.sticky-nav.body-scrolled .navbar .profile-menu a.active,
.sticky-nav.body-scrolled .navbar .profile-menu a:focus,
.sticky-nav.body-scrolled .navbar .profile-menu a:hover,
.sticky-nav.body-scrolled .navbar .navbar-toggle.active,
.sticky-nav.body-scrolled .navbar .navbar-toggle:focus,
.sticky-nav.body-scrolled .navbar .navbar-toggle:hover {
  color: #29aafe;
}

@media (max-width: 991px) {
  body,
  html {
    overflow-x: hidden;
  }
  .navbar .profile-menu {
    position: fixed;
    left: -80%;
    top: 0;
    bottom: 0;
    z-index: 99;
    width: 80%;
    max-width: 300px;
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    margin-left: 0;
    padding: 24px 16px;
    -webkit-transition: left 0.5s;
    -o-transition: left 0.5s;
    transition: left 0.5s;
  }
  .navbar .profile-menu a {
    line-height: 50px !important;
  }
  .navbar .profile-menu a.active {
    border-top: 0;
  }
  .navbar .profile-menu > li {
    display: block;
    border-bottom: 1px solid #eceeef;
  }
  .navbar .profile-menu > li:last-child {
    border-bottom: 0;
  }
  .navbar .profile-menu > li > a {
    color: #373a3c !important;
    opacity: 1 !important;
  }
  .navbar .profile-menu > li > a.active {
    color: #29aafe !important;
  }
  .navbar .profile-menu ul {
    visibility: visible;
    opacity: 1;
    position: static;
    border-top: 0;
  }
  .navbar .profile-menu ul li a {
    border-bottom: 0;
    line-height: 40px !important;
  }
  .offcanvas-show .navbar .profile-menu {
    left: 0;
    -webkit-box-shadow: 8px 0 10px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 8px 0 10px 0 rgba(0, 0, 0, 0.05);
  }
  .navbar {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  .navbar .profile-menu {
    text-align: left;
  }
  .navbar .profile-menu > li > a {
    font-weight: 600 !important;
  }
  .navbar .profile-menu ul {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .navbar .navbar-toggle {
    display: inline-block;
  }
  .nav-on-header .navbar {
    margin-top: 0;
  }
}
</style>
