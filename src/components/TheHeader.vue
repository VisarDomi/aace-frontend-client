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

          <div class="logo-wrapper">
            <router-link :to="{name: 'Home'}" class="logo">
              <img src="/static/img/eeee.png" alt="logo">
            </router-link>
            <router-link :to="{name: 'Home'}" class="logo-alt">
              <img src="/static/img/eeee_alt.png" alt="logo-alt">
            </router-link>
          </div>
        </div>
        <!-- END Logo -->
        <!-- User account -->
        <div class="pull-right user-login" v-if="!isAuthenticated">
          <router-link :to="{name: 'Login'}" class="btn btn-sm btn-primary">Login</router-link>or
          <router-link :to="{name: 'Register'}">Register</router-link>
        </div>
        <div v-else class="pull-right user-login">
          <i class="fa fa-user fa-2x"></i>
          {{currentUser.email}}
          <button
            class="btn btn-sm btn-primary"
            @click="logout"
          >Logout</button>
        </div>
        <!-- END User account -->
        <!-- Navigation menu -->
        <ul class="nav-menu">
          <li>
            <router-link to="/">AACE</router-link>
            <ul>
              <li>
                <router-link :to="{name: 'Home'}">Home</router-link>
              </li>
              <li>
                <router-link :to="{name: 'About'}">About us</router-link>
              </li>
              <!-- <li>
                <router-link :to="{name: 'Board'}">Board</router-link>
              </li>-->
            </ul>
          </li>
          <li>
            <router-link :to="{name: 'Membership'}">Membership</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Directory'}">Directory</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Contact'}">Contact</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Member Area'}">Member area</router-link>
            <ul>
              <li>
                <router-link :to="{name: 'Application'}">Application Form</router-link>
              </li>
              <li>
                <router-link :to="{name: 'Application Status'}">Application Status</router-link>
              </li>
              <li>
                <router-link :to="{name: 'Communications'}">Communications</router-link>
              </li>
              <li>
                <router-link :to="{name:'Profile', params: { id: currentUser.id}}">Profile</router-link>
              </li>
              <li>
                <a href="#">Polls</a>
              </li>
              <li @click="logout" v-if="isAuthenticated">
                <a href="#">Log-out</a>
              </li>
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
  name: "CompHeader",
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
.navbar .logo img,
.navbar .logo-alt img {
  height: 70px;
}

/* .navbar .container {
  width: 100%;
} */

@media screen and (min-width: 0px) and (max-width: 770px) {
  .logo-wrapper {
    display: none !important;
  } /* dont show logo on small screens */
}
</style>
