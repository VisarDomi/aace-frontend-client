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
            <span>Polle zyrtare</span>
            <h2>Polle</h2>
          </header>

          <div
            class="category-grid"
            v-for="poll in reversePolls(polls)"
            :key="poll.id"
          >
            <router-link
              style="height: 295px;"
              :to="{
                name: 'PollDetail',
                params: { id: poll.id }
              }"
            >
              <h6>{{ poll.name }}</h6>
              <p>{{ poll.description }}</p>
              <br />
              <p>
                <strong>{{ poll.timestamp | hourFormat }}</strong>
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
import { FETCH_POLLS } from "@/store/actions.type";
import { hourFormat } from "@/common/date.filter";

export default {
  name: "Polls",
  methods: {
    reversePolls(polls) {
      let reversed_polls = this.polls.slice().reverse();
      return reversed_polls;
    }
  },
  computed: {
    ...mapGetters(["polls"])
  },
  created() {
    this.$store.dispatch(FETCH_POLLS);
  }
};
</script>

<style scoped>
.category-grid a {
  margin-right: 1.5%;
}
</style>
