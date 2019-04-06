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
            <h1>Regjistrohu</h1>
            <form @submit.prevent="register">
              <div class="form-group">
                <div
                  class="input-group"
                  :class="{ 'hasError': $v.register_form.email.$error || email_exists }"
                >
                  <span class="input-group-addon">
                    <i class="ti-email"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email-i juaj"
                    @input="email_exists = false"
                    v-model="register_form.email"
                  >
                </div>
                <div
                  class="summary text-red"
                  v-if="$v.register_form.email.$error"
                >Vendosni nje email te sakte</div>
                <div
                  class="summary text-red"
                  v-if="email_exists"
                >Personi me kete email eshte regjistruar njehere</div>
              </div>

              <hr class="hr-xs">

              <div class="form-group">
                <div class="input-group" :class="{ 'hasError': $v.register_form.password.$error }">
                  <span class="input-group-addon">
                    <i class="ti-unlock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Fjalekalimi juaj"
                    v-model="register_form.password"
                  >
                </div>
                <div
                  class="summary text-red"
                  v-if="$v.register_form.password.$error"
                >Passwordi juaj eshte shume i shkurter</div>
              </div>
              <div >
                <br>
                <router-link :to="{ name: 'Terms' }">Kushtet e perdorimit</router-link>
                &nbsp;
                <router-link :to="{ name: 'Privacy' }">Polica e privacise</router-link>
                <br>
                <input type="checkbox" id="terms" @change="submit_disabled = !submit_disabled">
              <label for="terms">Pranoj kushtet e mesiperme</label>
              </div>

              <button
                class="btn btn-primary btn-block"
                type="submit"
                :disabled="!submit_disabled || isLoading"
              >Regjistrohu</button>

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
                <div class="card-header">Duke u regjistruar</div>
              </div>
            </form>
          </div>

          <div class="login-links text-center">
            <p >
              Keni nje llogari te meparshme?
              
            </p>
            <router-link :to="{ name: 'Login' }" class="txt-brand btn btn-light ">Hyr</router-link>
          </div>
        </main>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { REGISTER } from "@/store/actions.type";
import { STOP_LOADING } from "@/store/mutations.type";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      register_form: {
        email: "",
        password: ""
      },
      email_exists: false,
      submit_disabled: false
    };
  },
  validations: {
    register_form: {
      password: { required, min: minLength(6) },
      email: { required, email }
    }
  },
  methods: {
    register() {
      this.$v.register_form.$touch();
      if (this.$v.register_form.$error) return;
      this.$store
        .dispatch(REGISTER, {
          email: this.register_form.email,
          password: this.register_form.password
        })
        .then(() => this.$router.push({ name: "MemberArea" }))
        .catch(err => {
          this.$store.commit(STOP_LOADING)
          if (err.response.status == 409) {
            this.email_exists = true;
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
.hasError {
  border: solid 2px;
}
.text-red {
  color: red;
}
</style>
