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
            <span>Evente zyrtare</span>
            <h2>Evente</h2>
          </header>

          <div
            class="category-grid"
            v-for="event in reverseEvents(events)"
            :key="event.id"
          >
            <router-link
              style="height: 295px;"
              :to="{
                name: 'EventDetail',
                params: { id: event.id }
              }"
            >
              <h6>{{ event.name }}</h6>
              <p>{{ event.description }}</p>
              <br />
              <p>
                <strong>{{ event.time_start | hourFormat }}</strong>
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
import { FETCH_EVENTS } from "@/store/actions.type";
import { hourFormat } from "@/common/date.filter";

export default {
  name: "Events",
  methods: {
    reverseEvents(events) {
      let reversed_events = this.events.slice().reverse();
      return reversed_events;
    }
  },
  computed: {
    ...mapGetters(["events"])
  },
  created() {
    this.$store.dispatch(FETCH_EVENTS);
  }
};
</script>

<style scoped>
.category-grid a {
  margin-right: 1.5%;
}
</style>
