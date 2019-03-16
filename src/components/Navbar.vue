<template>
  <div>
    <!-- Navigation bar -->
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="pull-left">
          <a href="#" data-toggle="offcanvas" class="navbar-toggle">
            <i class="ti-menu"></i>
          </a>

          <div class="logo-wrapper show-logo-1">
            <router-link :to="{ name: 'Home' }" class="logo">
              <img src="static/img/logo_partial.png" alt="logo" />
            </router-link>
            <router-link :to="{ name: 'Home' }" class="logo-alt">
              <img src="static/img/logo_partial_alt.png" alt="logo-alt" />
            </router-link>
          </div>
          <div class="logo-wrapper show-logo-2">
            <router-link :to="{ name: 'Home' }" class="logo">
              <img src="/static/img/logo_full.png" alt="logo" />
            </router-link>
            <router-link :to="{ name: 'Home' }" class="logo-alt">
              <img src="/static/img/logo_full_alt.png" alt="logo-alt" />
            </router-link>
          </div>
        </div>
        <!-- END Logo -->
        <!-- User account -->
        <div class="pull-right user-login" v-if="!isAuthenticated">
          <router-link :to="{ name: 'Login' }" class="btn btn-sm btn-primary" id="loginButton"
            >Hyr</router-link
          >ose
          <router-link :to="{ name: 'Register' }">Regjistrohu</router-link>
        </div>
        <div class="pull-right user-login" v-else>
          <div class="become-inline">
            <router-link
              :to="{ name: 'Profile', params: { id: currentUser.id } }"
            >
              <i class="fa fa-user fa-2x profile-icon become-inline"></i>
              <div class="become-inline become-margin-right">Profili</div>
            </router-link>
          </div>
          <div @click="logout" class="become-inline">
            <div class="btn btn-sm btn-primary">Dil</div>
          </div>
        </div>
        <!-- END User account -->
        <!-- Navigation menu -->
        <ul class="nav-menu">
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
                <router-link :to="{ name: 'Contact' }"
                  >Na kontaktoni</router-link
                >
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
            <router-link :to="{ name: 'Directory' }"
              >Kerko per anetare</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'MemberArea' }" v-if="isAuthenticated"
              >Zona e anetareve</router-link
            >
            <ul>
              <li>
                <router-link
                  :to="{ name: 'Profile', params: { id: currentUser.id } }"
                  >Profili</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'Application' }"
                  v-if="currentUser.register_status == 'blank'"
                  >Forma e aplikimit</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'ReApplication' }"
                  v-if="
                    currentUser.register_status == 'rebutted' ||
                      currentUser.register_status == 'accepted'
                  "
                  >Forma e riaplikimit</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'ApplicationStatus' }"
                  >Statusi i aplikimit</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Communications' }"
                  >Komunikime zyrtare</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'ComingSoon' }">Votime</router-link>
              </li>
              <!-- <li @click="logout" v-if="isAuthenticated">
                <a href="#">Log-out</a>
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
import { LOGOUT } from "@/store/actions.type";
export default {
  name: "AppNavbar",
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
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
@media screen and (min-width: 620px) {
  .show-logo-1 {
    display: none !important;
  }

  .navbar-toggle{
  margin-top: 10px;
}

#loginButton{
  margin-bottom: 11px;
}
}
/* dont show big logo on small screens */
@media screen and (min-width: 0px) and (max-width: 619px) {
  .show-logo-2 {
    display: none !important;
  }
}




</style>
