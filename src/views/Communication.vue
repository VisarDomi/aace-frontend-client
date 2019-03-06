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
            <span>Official Communications</span>
            <h2>Communications</h2>
          </header>

          <div class="category-grid" v-for="communication in communications" :key="communication.id">
            <router-link style="height: 295px;" :to="{name:'commdetail', params: { id: communication.id}}">
              
              <h6>{{communication.name}}</h6>
              <p>{{communication.description}}</p>
              <br>
              <p><strong>{{communication.time}}</strong> </p>
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
import {
  FETCH_COMMS
} from "@/store/actions.type";
export default {
  name: "communication",
  computed: {
    ...mapGetters(["communications"])
  },
  created() {
    console.log("fetching coms from comonent")
    this.$store.dispatch(FETCH_COMMS);
  }
};
</script>