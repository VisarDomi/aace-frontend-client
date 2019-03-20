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
        <div class="container">
          <header class="section-header">
            <span>Komunikime zyrtare</span>
            <h2>Komunikime</h2>
          </header>

          <div
            class="category-grid"
            v-for="communication in reverseCommunications(communications)"
            :key="communication.id"
          >
            <router-link
              style="height: 295px;"
              :to="{
                name: 'CommunicationDetail',
                params: { id: communication.id }
              }"
            >
              <h6>{{ communication.name }}</h6>
              <p>{{ communication.description }}</p>
              <br />
              <p>
                <strong>{{ getFormattedDate(communication.timestamp) }}</strong>
              </p>
            </router-link>
          </div>
        </div>
      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import DateFilter from "@/common/date.filter";
import { FETCH_COMMUNICATIONS } from "@/store/actions.type";
export default {
  name: "Communications",
  methods: {
    getFormattedDate(time) {
      return DateFilter(time);
      // console.log("time", time)
    },
    reverseCommunications(communications) {
      let reversed_communications = this.communications.slice().reverse();
      return reversed_communications;
    }
  },
  computed: {
    ...mapGetters(["communications"])
  },
  created() {
    this.$store.dispatch(FETCH_COMMUNICATIONS);
  }
};
</script>

<style scoped>
.category-grid a {
  margin-right: 1.5%;
}
</style>
