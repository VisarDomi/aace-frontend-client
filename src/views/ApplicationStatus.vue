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
          <h4>Emri i aplikantit:</h4>
          <p>{{ currentUser.first_name }} {{ currentUser.last_name }}</p>
          <br>
          <h4>Data e aplikimit:</h4>
          <p>{{ getFormattedDate(currentUser.application_date) }}</p>
          <br>
          <h4>Status i aplikimit:</h4>
          <div
            class="alert alert-warning"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="currentUser.register_status == 'rebutted'"
          >
            <strong>Mangesi ne dokumenta.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="currentUser.register_status == 'blank'"
          >
            <strong>Nuk eshte derguar.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="currentUser.register_status == 'applying' || currentUser.register_status == 'reapplying'"
          >
            <strong>Derguar.</strong>
          </div>
          <div
            class="alert alert-danger"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="currentUser.register_status == 'rejected'"
          >
            <strong>Refuzuar.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="currentUser.register_status == 'accepted'"
          >
            <strong>Pranuar.</strong>
          </div>
          <br>
          <h4 v-if="currentUser.comment_from_administrator">Koment nga administratori:</h4>
          <p>{{ currentUser.comment_from_administrator }}</p>
          <br>
          <router-link
            :to="{ name: 'ReApplication' }"
            v-if="currentUser.register_status == 'rebutted'"
          >
            <button type="submit" class="btn btn-primary">Rregullo aplikimin</button>
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
export default {
  name: "ApplicationStatus",
  data() {
    return {
      application_date: ""
    };
  },
  methods: {
    getFormattedDate(time) {
      return DateFilter(time);
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
