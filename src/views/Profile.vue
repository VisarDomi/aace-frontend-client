<template>
  <div>
    <!-- Page header -->
    <!-- Page header -->
    <header
      class="page-header bg-img"
      style="background-image: url(static/img/bg-banner1.jpg)"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <img :src="profilePicture" alt />
          </div>

          <div class="col-xs-12 col-sm-8 header-detail">
            <div class="hgroup">
              <h1>{{ profile.first_name + " " + profile.last_name }}</h1>
              <h3>{{ profile.profession }}</h3>
            </div>
            <hr />
            <p class="lead">{{ profile.summary }}</p>

            <ul class="details cols-2">
              <li>
                <i :class="'fa fa-' + iconType(profile.sex)"></i>
                <span>{{ profile.sex }}</span>
              </li>

              <li>
                <i class="fa fa-map-marker"></i>
                <span>{{ profile.country }}</span>
              </li>

              <li>
                <i class="fa fa-birthday-cake"></i>
                <span>{{ profile.birthday }}</span>
              </li>

              <li>
                <i class="fa fa-phone"></i>
                <span>{{ profile.phone }}</span>
              </li>

              <li>
                <i class="fa fa-envelope"></i>
                <a href="#">{{ profile.email }}</a>
              </li>

              <li v-if="!!profile.website">
                <i class="fa fa-globe"></i>
                <a href="#">{{ profile.website }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <!-- Education -->
      <section>
        <div class="container">
          <header class="section-header">
            <span>Diplomat me te fundit</span>
            <h2>Arsimimi</h2>
          </header>

          <div class="row" v-if="educations.length">
            <div
              class="col-xs-12"
              :key="education.id"
              v-for="education in educations"
            >
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>
                      {{ education.degree }}
                      <small>{{ education.field_of_study }}</small>
                    </h4>
                    <h5>{{ education.school }}</h5>
                  </div>
                  <h6 class="time">
                    {{ education.from_date }} deri ne {{ education.to_date }}
                  </h6>
                </header>
                <div class="item-body">
                  <p>{{ education.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h3 class="text-center" style="color: #ff6666">S'ka arsimime</h3>
          </div>
        </div>
      </section>
      <!-- END Education -->
      <!-- Work Experience -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Pozicionet e meparshme</span>
            <h2>Pervoje pune</h2>
          </header>

          <div class="row" v-if="experiences.length">
            <div
              class="col-xs-12"
              :key="experience.id"
              v-for="experience in experiences"
            >
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>{{ experience.title }}</h4>
                    <h5>{{ experience.employer }}</h5>
                    <h5>{{ experience.location }}</h5>
                  </div>
                  <h6 class="time">
                    {{ experience.from_date }} deri ne {{ experience.to_date }}
                  </h6>
                </header>
                <div class="item-body">
                  <p>{{ experience.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h3 class="text-center" style="color: #ff6666">
              S'ka pervoje pune
            </h3>
          </div>
        </div>
      </section>
      <!-- END Work Experience -->
      <!-- Skills -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Arritje profesionale</span>
            <h2>Kualifikime/Arritje profesionale</h2>
          </header>

          <div class="row" v-if="skills.length">
            <div class="col-xs-12" :key="skill.id" v-for="skill in skills">
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>{{ skill.name }}</h4>
                    <h5>{{ skill.releaser }}</h5>
                  </div>
                  <h6 class="time">
                    {{ skill.from_date }} deri ne {{ skill.to_date }}
                  </h6>
                </header>
                <div class="item-body">
                  <p>{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h3 class="text-center" style="color: #ff6666">S'ka kualifikime</h3>
          </div>
        </div>
      </section>
      <!-- END Skills -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE } from "@/store/actions.type";
import store from "@/store";
import DateFilter from "@/common/date.filter";

export default {
  name: "Profile",
  methods: {
    iconType(sex) {
      let iconType = "male";
      if (this.profile.sex == "Mashkull") {
        iconType = "male";
      } else if (this.profile.sex == "Femer") {
        iconType = "female";
      }
      return iconType;
    },

  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
  },
  computed: {
    ...mapGetters([
      "getCurrentUser",
      "profile",
      "isAuthenticated",
      "profilePicture",
      "educations",
      "experiences",
      "skills"
    ])
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params);
    }
  }
};
</script>
