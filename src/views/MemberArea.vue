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
            <span>Sherbime</span>
            <h2>Sherbime per anetaret</h2>
            <p>Merr sherbime si perdorues i regjistruar</p>
          </header>

          <div class="category-grid">
            <router-link
              :to="{ name: 'Application' }"
              style="height: 295px;"
              v-if="applicationStatus == 'blank'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Forma e aplikimit</h6>
              <p>Apliko per anetaresi</p>
            </router-link>

            <router-link
              :to="{ name: 'Reapplication' }"
              style="height: 295px;"
              v-if="applicationStatus == 'rebutted'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Forma e riaplikimit</h6>
              <p>Rregullo te dhenat qe jan gabim ose qe mungojne</p>
            </router-link>

            <router-link
              :to="{ name: 'SendingPayment' }"
              style="height: 295px;"
              v-if="paymentStatus == 'blank'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Vertetimi i pageses</h6>
              <p>Dergo vertetimin e pageses</p>
            </router-link>

            <router-link
              :to="{ name: 'ResendingPayment' }"
              style="height: 295px;"
              v-if="paymentStatus == 'rebutted_payment'"
            >
              <i class="fa fa-file-excel-o"></i>
              <h6>Vertetimi i pageses</h6>
              <p>Dergo vertetimin e pageses edhe njehere</p>
            </router-link>

            <router-link
              :to="{ name: 'ApplicationStatus' }"
              style="height: 295px;"
              v-if="
                applicationStatus == 'rebutted' ||
                  applicationStatus == 'rejected' ||
                  applicationStatus == 'accepted' ||
                  applicationStatus == 'applying' ||
                  applicationStatus == 'reapplying'
              "
            >
              <i class="fa fa-info"></i>
              <h6>Statusi i aplikimit</h6>
              <p>Shiko statusin e aplikimit</p>
            </router-link>

            <router-link
              :to="{ name: 'Communications' }"
              style="height: 295px;"
              v-if="applicationStatus == 'accepted'"
            >
              <i class="fa fa-send-o"></i>
              <h6>Komunikime zyrtare</h6>
              <p>Shiko komunikimet me te fundit qe jan derguar nga shoqata</p>
            </router-link>

            <router-link
              :to="{ name: 'Profile', params: { id: currentUser.id } }"
              style="height: 295px;"
              v-if="applicationStatus != 'blank'"
            >
              <i class="fa fa-vcard-o"></i>
              <h6>Profili</h6>
              <p>Shiko sesi duket profili juaj nga publiku</p>
            </router-link>

            <router-link
              :to="{ name: 'ComingSoon' }"
              style="height: 295px;"
              v-if="applicationStatus == 'accepted'"
            >
              <i class="fa fa-bullhorn"></i>
              <h6>Votime</h6>
              <p>Merr pjese ne votime</p>
            </router-link>

            <a
              href="#"
              style="height: 295px;"
              @click="logout"
              v-if="isAuthenticated"
            >
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
import { LOGOUT, FETCH_APPLICATION_INFO } from "@/store/actions.type";
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
    ...mapGetters(["currentUser", "isAuthenticated", "applicationStatus", "paymentStatus"])
  },
  mounted() {
    this.$store.dispatch(FETCH_APPLICATION_INFO);
  }
};
</script>
