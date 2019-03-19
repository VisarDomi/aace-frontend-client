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
          <div>
            <h4>Emri i aplikantit:</h4>
            <p>{{ currentUser.first_name }} {{ currentUser.last_name }}</p>
          </div>
          <br />
          <div v-if="applicationStatus == 'applying'">
            <h4>Data e aplikimit:</h4>
            <p>{{ getFormattedDate(applicationDate) }}</p>
          </div>
          <div v-else-if="applicationStatus != 'blank'">
            <h4>Data e aplikimit:</h4>
            <p>{{ getFormattedDate(reapplicationDate) }}</p>
          </div>
          <br />
          <h4>Status i aplikimit:</h4>
          <div
            class="alert alert-warning"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="applicationStatus == 'rebutted'"
          >
            <strong>Aplikimi jo i sakte.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="applicationStatus == 'blank'"
          >
            <strong>Nuk eshte derguar.</strong>
          </div>
          <div
            class="alert alert-info"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="
              applicationStatus == 'applying' ||
                applicationStatus == 'reapplying'
            "
          >
            <strong>Derguar.</strong>
          </div>
          <div
            class="alert alert-danger"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="applicationStatus == 'rejected'"
          >
            <strong>Refuzuar.</strong>
          </div>
          <div
            class="alert alert-success"
            role="alert"
            style="width:33%; margin:auto;"
            v-if="applicationStatus == 'accepted'"
          >
            <strong>Pranuar.</strong>
          </div>
          <br />
          <h4 v-if="commentFromAdmin">Koment nga administratori:</h4>
          <p>{{ commentFromAdmin }}</p>
          <br />
          <router-link
            :to="{ name: 'Reapplication' }"
            v-if="applicationStatus == 'rebutted'"
          >
            <button type="submit" class="btn btn-primary">
              Rregullo aplikimin
            </button>
          </router-link>
          <router-link
            :to="{ name: 'Application' }"
            v-if="applicationStatus == 'blank'"
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
      return DateFilter(time);
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_APPLICATION_INFO);
  },
  computed: {
    ...mapGetters([
      "currentUser",
      "applicationStatus",
      "applicationDate",
      "reapplicationDate",
      "commentFromAdmin"
    ])
  }
};
</script>
