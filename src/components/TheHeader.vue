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
            <router-link to="/" class="logo">
              <img src="/static/img/eeee.png" alt="logo">
            </router-link>
            <router-link to="/" class="logo-alt">
              <img src="/static/img/eeee.png" alt="logo-alt">
            </router-link>
          </div>
        </div>
        <!-- END Logo -->
        <!-- User account -->
        <div class="pull-right user-login" v-if="!isAuthenticated">
          <router-link to="/login" class="btn btn-sm btn-primary">Login</router-link>or
          <router-link to="/register">register</router-link>
        </div>
        <div v-else class="pull-right user-login" >
          <i class="fa fa-user fa-2x"></i>
          {{currentUser.email}}
          <!-- <router-link to="/logout"> <h5>Log-out</h5> </router-link> -->
        </div>
        <!-- END User account -->
        <!-- Navigation menu -->
        <ul class="nav-menu">
          <li>
            <router-link to="/" active-class="active">AACE</router-link>
            <ul>
                <li><router-link to="/" active-class="active">Home</router-link></li>
                <li><router-link to="/about">About us</router-link></li>
                <!-- <li><router-link to="/board">Board of directors</router-link></li> -->
            </ul>
          </li>
          <li>
            <router-link to="/membership">Membership</router-link>
          </li>
          <li>
            <router-link to="/directory">Directory</router-link>
          </li>
          <!-- <li>
            <router-link to="/events">Events</router-link>
          </li>
          <li>
            <router-link to="/publications">Publications</router-link>
          </li> -->
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/memberarea">User area</router-link>
            <ul>
                <li><router-link to="/" active-class="active">Application Form</router-link></li>
                <li><router-link to="/about">Application Status</router-link></li>
                <li><router-link to="/about">Communications</router-link></li>
                <li><router-link to="/about">Profile</router-link></li>
                <li><router-link to="/about">Polls</router-link></li>
                <li @click="logout" v-if="isAuthenticated"> <a href="#">Log-out</a> </li>
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
        this.$router.push({ name: "home" });
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
</style>
