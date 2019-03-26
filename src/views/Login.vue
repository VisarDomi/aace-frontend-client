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
            <h1>Hyr ne llogarine e juaj</h1>

            <div class="summary text-red" v-if="invalid">Email/password eshte gabim</div>

            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <div class="input-group" :class="{ 'hasError': $v.login_form.email.$error}">
                  <span class="input-group-addon">
                    <i class="ti-email"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email-i juaj"
                    @input="invalid = false"
                    v-model="login_form.email"
                  >
                </div>
                <div
                  class="summary text-red"
                  v-if="$v.login_form.email.$error"
                >Vendos nje email te sakte</div>
              </div>

              <hr class="hr-xs">

              <div class="form-group">
                <div class="input-group" :class="{ 'hasError': $v.login_form.password.$error}">
                  <span class="input-group-addon">
                    <i class="ti-unlock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Fjalekalimi juaj"
                    @input="invalid = false"
                    v-model="login_form.password"
                  >
                </div>
                <div
                  class="summary text-red"
                  v-if="$v.login_form.password.$error"
                >Passwordi juaj eshte shume i shkurter</div>
              </div>

              <button class="btn btn-primary btn-block" type="submit" :disabled="isLoading">Hyr</button>

              <hr class="hr-xs">
              <div class="card border-info mb-3 become-centered" v-if="isLoading">
                <div class="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="card-header">Duke u futur ne platform</div>
              </div>
            </form>
          </div>

          <div class="login-links">
            <!-- <a href="#" class="pull-left btn btn-light"
              >Keni harruar fjalekalimin?</a
            >-->
            <router-link
              :to="{ name: 'Register' }"
              class="pull-right btn btn-light go-to-pull-left"
            >Regjistrohu</router-link>
          </div>
        </main>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { LOGIN } from "@/store/actions.type";
import { required, email, minLength } from "vuelidate/lib/validators";
import { STOP_LOADING } from "@/store/mutations.type";

export default {
  name: "Login",
  data() {
    return {
      login_form: {
        email: null,
        password: null
      },
      invalid: false
    };
  },
  validations: {
    login_form: {
      email: { required, email },
      password: { required, min: minLength(6) }
    }
  },
  methods: {
    onSubmit() {
      this.$v.login_form.$touch();
      if (this.$v.login_form.$error) return;

      let credentials = {
        username: this.login_form.email,
        password: this.login_form.password
      };

      this.$store
        .dispatch(LOGIN, credentials)
        .then(() => this.$router.push({ name: "MemberArea" }))
        .catch(err => {
          if (err.response.status == 401) {
            this.invalid = true;
            this.$store.commit(STOP_LOADING)
          }
        });
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["isLoading"])
  }
};
</script>

<style scoped>
@media screen and (max-width: 456px) {
  .go-to-pull-left {
    float: left !important;
    margin-top: 10px;
  }
}
.hasError {
  border: solid 2px;
}
.text-red {
  color: red;
}
</style>
