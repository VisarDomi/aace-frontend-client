<template>
  <div>
    <!-- Page header -->
    <!-- Page header -->
    <header class="page-header bg-img" style="background-image: url(static/img/bg-banner1.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <img :src="profilePicture" alt>
          </div>

          <div class="col-xs-12 col-sm-8 header-detail">
            <div class="hgroup">
              <h1>{{ profile.first_name + " " + profile.last_name }}</h1>
              <h3>{{ profile.profession }}</h3>
            </div>
            <hr>
            <p class="lead">{{ profile.summary }}</p>

            <ul class="details cols-2">
              <li>
                <i class="fa"></i>
                <span>{{ profile.sex }}</span>
              </li>

              <li>
                <i class="fa fa-map-marker"></i>
                <span>{{ profile.country }}</span>
              </li>

              <li>
                <i class="fa fa-globe"></i>
                <a href="#">{{ profile.website }}</a>
              </li>

              <li>
                <i class="fa fa-money"></i>
                <span>
                  {{
                  profile.years_of_experience + " years of experience"
                  }}
                </span>
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
            </ul>
          </div>
        </div>

        <!-- <div class="button-group">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="dribbble" href="#">
                <i class="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a class="linkedin" href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a class="instagram" href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>

          <div class="action-buttons">
            <a class="btn btn-gray" href="#">Download CV</a>
            <a
              class="btn btn-success"
              data-toggle="modal"
              data-target="#modal-contact"
              href="#"
            >Contact me</a>
          </div>
        </div>-->
      </div>
    </header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <!-- Education -->
      <section>
        <div class="container">
          <header class="section-header">
            <span>Latest degrees</span>
            <h2>Education</h2>
          </header>

          <div class="row">
            <div class="col-xs-12" :key="education.id" v-for="education in educations">
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>
                      {{ education.degree }}
                      <small>{{ education.field_of_study }}</small>
                    </h4>
                    <h5>{{ education.school }}</h5>
                  </div>
                  <h6 class="time">{{ education.from_date }} - {{ education.to_date }}</h6>
                </header>
                <div class="item-body">
                  <p>{{ education.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END Education -->
      <!-- Work Experience -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Past positions</span>
            <h2>Work Experience</h2>
          </header>

          <div class="row">
            <div class="col-xs-12" :key="experience.id" v-for="experience in experiences">
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>{{ experience.title }}</h4>
                    <h5>{{ experience.employer }}</h5>
                    <h5>{{ experience.company }}</h5>
                    <h5>{{ experience.location }}</h5>
                  </div>
                  <h6 class="time">{{ experience.from_date }} - {{ experience.to_date }}</h6>
                </header>
                <div class="item-body">
                  <p>{{ experience.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END Work Experience -->
      <!-- Skills -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Past certifications</span>
            <h2>Skills</h2>
          </header>

          <div class="row">
            <div class="col-xs-12" :key="skill.id" v-for="skill in skills">
              <div class="item-block">
                <header>
                  <div class="hgroup">
                    <h4>{{ skill.name }}</h4>
                    <h5>{{ skill.releaser }}</h5>
                  </div>
                  <h6 class="time">{{ skill.from_date }} - {{ skill.to_date }}</h6>
                </header>
                <div class="item-body">
                  <p>{{ skill.description }}</p>
                </div>
              </div>
            </div>
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
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
  },
  computed: {
    ...mapGetters([
      "currentUser",
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
