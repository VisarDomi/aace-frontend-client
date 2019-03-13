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
            <h2>Application Status</h2>
          </header>
          <h4>Name of applicant:</h4>
          <p>{{ currentUser.first_name }} {{ currentUser.last_name }}</p>
          <br>
          <h4>Date of application:</h4>
          <p>{{ getFormattedDate(currentUser) }}</p>
          <br>
          <h4>Status:</h4>
          <div
            class="alert alert-warning"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="status == 'rebutted'"
          >
            <strong>Rebutted</strong>.
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="status == 'blank' || status == 'reapplying'"
          >
            <strong>Not sent.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="status == 'applying'"
          >
            <strong>Sent.</strong>
          </div>
          <div
            class="alert alert-danger"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="status == 'rejected'"
          >
            <strong>Rejected.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="status == 'approved'"
          >
            <strong>Approved.</strong>
          </div>
          <br>
          <h4 v-if="currentUser.comment_from_administrator">Comment from secretary:</h4>
          <p>{{ currentUser.comment_from_administrator }}</p>
          <br>
          <router-link :to="{ name: 'ReApplication' }" v-if="status == 'rebutted'">
            <button type="submit" class="btn btn-primary">Fix application</button>
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
import { FETCH_STATUS } from "@/store/actions.type";
import store from "@/store";
export default {
  name: "ApplicationStatus",
  data() {
    return {
      application_date: ""
    };
  },
  methods: {
    getFormattedDate(currentUser) {
      let date_object = new Date(currentUser.application_date);
      this.application_date = date_object.toISOString().split("T")[0];
      return this.application_date;
    }
  },
  computed: {
    ...mapGetters(["status", "currentUser"])
  },
  mounted() {
    this.$store.dispatch(FETCH_STATUS);
  }
};
</script>
