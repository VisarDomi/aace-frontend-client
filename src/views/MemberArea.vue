<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-sm"
      style="background-image: url(static/img/bg-banner2.jpg); margin-bottom:0px;"
    ></header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Services</span>
            <h2>Member Services</h2>
            <p>Access your services as a registered user of AACE</p>
          </header>

          <div class="category-grid">
            <router-link to="/application" style="height: 295px;">
              <i class="fa fa-file-excel-o"></i>
              <h6>Application Form</h6>
              <p>Apply for membership in AACE</p>
            </router-link>

            <router-link to="/applicationstatus" style="height: 295px;">
              <i class="fa fa-info"></i>
              <h6>Application Status</h6>
              <p>See the status of your application</p>
            </router-link>
            <router-link to="/communication" style="height: 295px;">
              <i class="fa fa-send-o"></i>
              <h6>Communication</h6>
              <p>Access association wide and personal communications</p>
            </router-link>
            <router-link
              :to="{name:'profile', params: { id: currentUser.id}}"
              style="height: 295px;"
            >
              <i class="fa fa-vcard-o"></i>
              <h6>Profile</h6>
              <p>See how your profile looks publicly</p>
            </router-link>

            <a href="#" style="height: 295px;">
              <i class="fa fa-bullhorn"></i>
              <h6>Polls</h6>
              <p>Engage in polling</p>
            </a>
            
            <a href="#" style="height: 295px;" @click="logout" v-if="isAuthenticated">
              <i class="fa fa-sign-out"></i>
              <h6>Log-out</h6>
              <p>Log out of the platform</p>
            </a>
          </div>
        </div>
      </section>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
  name: "Member Area",
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
