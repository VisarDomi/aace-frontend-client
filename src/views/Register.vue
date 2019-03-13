<template>
  <div>
    <header
      class="page-header"
      style="background-image: url(static/img/home_banner_grayed_short.jpg); margin-bottom: 0px;"
    >
      <div class="login-page">
        <main style="margin-bottom: 0px; margin-top: 20px; padding-bottom: 50px;">
          <div class="login-block">
            <img src="static/img/logo_partial2.png" alt="AACE logo">
            <h1>Register a new account</h1>

            <form @submit.prevent="register">
              <!-- <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="ti-user"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Your name">
                </div>
              </div>

              <hr class="hr-xs">-->
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="ti-email"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your email address"
                    v-model="email"
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
                    placeholder="Choose a password"
                    v-model="password"
                  >
                </div>
              </div>

              <button class="btn btn-primary btn-block" type="submit">Sign up</button>

              <hr class="hr-xs">
              <!-- <div class="form-group">{{ loading }}</div> -->
            </form>
            <ul v-if="errors" class="error-messages">
              <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
            </ul>
          </div>

          <div class="login-links">
            <p class="text-center">Already have an account?
              <router-link to="/login" class="txt-brand btn btn-light">Login</router-link>
            </p>
          </div>
        </main>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push({ name: "MemberArea" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
