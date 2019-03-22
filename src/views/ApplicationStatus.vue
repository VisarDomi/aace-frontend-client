<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-sm"
      style="background-image: url(static/img/bg-banner2.jpg)"
    ></header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <!-- Company detail -->
      <section style="padding-top:0px; padding-bottom:50px;">
        <div class="container text-center">
          <header class="section-header">
            <h2>Status i aplikimit</h2>
          </header>
          <div v-if="getCurrentUser.application_status != 'blank'">
            <h4>Emri i aplikantit:</h4>
            <p>{{ getCurrentUser.first_name }} {{ getCurrentUser.last_name }}</p>
          </div>
          <br>
          <div v-if="getCurrentUser.application_status == 'applying'">
            <h4>Data e aplikimit:</h4>
            <p>{{ getFormattedDate(getCurrentUser.application_date) }}</p>
          </div>
          <div v-else-if="getCurrentUser.application_status == 'reapplying'">
            <h4>Data e aplikimit:</h4>
            <p>{{ getFormattedDate(getCurrentUser.reapplication_date) }}</p>
          </div>
          <br>
          <h4>Status i aplikimit:</h4>
          <div
            class="alert alert-warning"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.application_status == 'rebutted'"
          >
            <strong>Aplikimi ka nevoje per ndryshime, ndiqni udhezimet e administratorit.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.application_status == 'blank'"
          >
            <strong>Nuk eshte derguar.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="
              getCurrentUser.application_status == 'applying' ||
                getCurrentUser.application_status == 'reapplying'
            "
          >
            <strong>Derguar.</strong>
          </div>
          <div
            class="alert alert-danger"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.application_status == 'rejected'"
          >
            <strong>Refuzuar.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.application_status == 'accepted_application'"
          >
            <strong>Aplikimi eshte pranuar.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.application_status == 'accepted'"
          >
            <strong>Jeni pranuar si anetar i shoqates.</strong>
          </div>
          <br>
          <div v-if="getCurrentUser.payment_status == 'sending_payment'">
            <h4>Data e dergimit te mandatit te pageses:</h4>
            <p>{{ getFormattedDate(getCurrentUser.send_payment_date) }}</p>
          </div>
          <div v-else-if="getCurrentUser.payment_status == 'resending_payment'">
            <h4>Data e dergimit te mandatit te pageses:</h4>
            <p>{{ getFormattedDate(getCurrentUser.resend_payment_date) }}</p>
          </div>

          <br>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.payment_status == 'blank'"
          >
            <strong>Mandati i pageses nuk eshte derguar.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="
              getCurrentUser.payment_status == 'sending_payment' ||
                getCurrentUser.payment_status == 'resending_payment'
            "
          >
            <strong>Mandati i pageses eshte derguar.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="getCurrentUser.payment_status == 'accepted_payment'"
          >
            <strong>Mandati i pageses eshte pranuar.</strong>
          </div>
          <br>
          <h4 v-if="commentFromAdmin">Koment nga administratori:</h4>
          <p>{{ commentFromAdmin }}</p>
          <br>
          <router-link
            :to="{ name: 'Reapplication' }"
            v-if="getCurrentUser.application_status == 'rebutted'"
          >
            <button type="submit" class="btn btn-primary">Rregullo aplikimin</button>
          </router-link>
          <router-link
            :to="{ name: 'Application' }"
            v-if="getCurrentUser.application_status == 'blank'"
          >
            <button type="submit" class="btn btn-primary">Apliko</button>
          </router-link>
        </div>
      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DateFilter from "@/common/date.filter";
import store from "@/store";
import { FETCH_APPLICATION_INFO } from "../store/actions.type";

export default {
  name: "ApplicationStatus",
  methods: {
    getFormattedDate(time) {
      console.log("getCurrentUser.send_payment_date is", this.getCurrentUser.send_payment_date);
      console.log("time is", time);
      return DateFilter(time);
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_APPLICATION_INFO);
  },
  computed: {
    ...mapGetters(["getCurrentUser", "commentFromAdmin"])
  }
};
</script>
