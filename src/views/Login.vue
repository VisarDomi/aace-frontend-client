<template>
  <div>
    <header
      class="page-header"
      style="background-image: url(static/img/home_banner_grayed_short.jpg); margin-bottom: 0px;"
    >
      <div class="login-page">
        <main style="margin-bottom: 0px; margin-top: 20px; padding-bottom: 50px;">
          <div class="login-block">
            <img src="static/img/aace_only_logo.png" alt="AACE logo">
            <h1>Log into your account</h1>

            <form @submit.prevent="onSubmit(username,password)">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="ti-email"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="myname@example.com"
                    v-model="username"
                  >
                </div>
              </div>

              <hr class="hr-xs">

              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="ti-unlock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                  >
                </div>
              </div>

              <button class="btn btn-primary btn-block" type="submit">Login</button>

              <hr class="hr-xs">
              <!-- <div class="form-group">{{ loading }}</div> -->
            </form>
            <ul v-if="errors" class="error-messages">
              <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
            </ul>
          </div>

          <div class="login-links">
            <a class="pull-left btn btn-light" href="#">Forgot Password?</a>
            <router-link to="/register" class="pull-right btn btn-light">Register an account</router-link>
          </div>
        </main>
      </div>
    </header>

  </div>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit(username, password) {
      this.$store.dispatch(LOGIN, {username, password})
      .then(()=> this.$router.push({name: "memberarea"}));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
