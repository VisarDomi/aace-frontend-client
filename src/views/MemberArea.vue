<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-sm"
      style="background-image: url(static/img/bg-banner2.jpg); margin-bottom:0px;"
    ></header>
    <!-- END Page header -->
    <!-- Main container -->
    <main v-if="isAuthenticated">
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Sherbime</span>
            <h2>Sherbime per anetaret</h2>
            <p>Merr sherbime si perdorues i regjistruar</p>
          </header>

          <div class="category-grid">
            <router-link
              :to="{ name: 'Application' }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status == 'blank'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Forma e aplikimit</h6>
              <p>Apliko per anetaresi</p>
            </router-link>

            <router-link
              :to="{ name: 'Reapplication' }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status == 'rebutted'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Forma e riaplikimit</h6>
              <p>Rregullo te dhenat qe jan gabim ose qe mungojne</p>
            </router-link>

            <router-link
              :to="{ name: 'SendingPayment' }"
              style="height: 295px;"
              v-if="getCurrentUser.payment_status == 'blank'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Mandati i pageses</h6>
              <p>Dergo mandatin e pageses</p>
            </router-link>

            <router-link
              :to="{ name: 'SendingPayment' }"
              style="height: 295px;"
              v-if="getCurrentUser.payment_status == 'rebutted_payment'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Mandati i pageses</h6>
              <p>Dergo mandatin e pageses edhe njehere</p>
            </router-link>

            <router-link :to="{ name: 'ApplicationStatus' }" style="height: 295px;">
              <i class="fa fa-info"></i>
              <h6>Statusi i aplikimit</h6>
              <p>Shiko statusin e aplikimit</p>
            </router-link>

            <router-link
              :to="{ name: 'Communications' }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status == 'accepted'"
            >
              <i class="fa fa-send-o"></i>
              <h6>Komunikime zyrtare</h6>
              <p>Shiko komunikimet me te fundit qe jan derguar nga shoqata</p>
            </router-link>

            <router-link
              :to="{ name: 'Events' }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status == 'accepted'"
            >
              <i class="fa fa-calendar-o"></i>
              <h6>Evente zyrtare</h6>
              <p>Merr pjese ne eventet e organizuara nga SHOSHIK</p>
            </router-link>

            <router-link
              :to="{ name: 'Profile', params: { id: getCurrentUser.id } }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status != 'blank'"
            >
              <i class="fa fa-vcard-o"></i>
              <h6>Profili</h6>
              <p>Shiko sesi duket profili juaj nga publiku</p>
            </router-link>

            <router-link
              :to="{ name: 'Polls' }"
              style="height: 295px;"
              v-if="getCurrentUser.application_status == 'accepted'"
            >
              <i class="fa fa-bullhorn"></i>
              <h6>Votime</h6>
              <p>Voto ne vendimarrjen e SHOSHIK</p>
            </router-link>

            <a href="#" style="height: 295px;" @click="logout" v-if="isAuthenticated">
              <i class="fa fa-sign-out"></i>
              <h6>Dil</h6>
              <p>Dil nga platforma</p>
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
import {
  LOGOUT,
  FETCH_APPLICATION_INFO,
  FETCH_COMMUNICATIONS,
  FETCH_PROFILE
} from "@/store/actions.type";
import store from "@/store";

export default {
  name: "MemberArea",
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  },
  computed: {
    ...mapGetters(["getCurrentUser", "isAuthenticated"])
  },
  mounted() {
    this.$store.dispatch(FETCH_APPLICATION_INFO);
    this.$store.dispatch(FETCH_COMMUNICATIONS);
    this.$store.dispatch(FETCH_PROFILE, this.$store.getters.getCurrentUser);
  }
};
</script>
