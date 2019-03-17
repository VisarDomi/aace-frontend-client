<template>
  <div>
    <!-- Site header -->
    <header
      class="site-header size-lg text-center"
      style="background-image: url(static/img/home_banner_grayed_short.jpg);"
    >
      <div class="container">
        <div class="col-xs-12">
          <h2>Kerkimi i anetareve</h2>
          <h5 class="font-alt">
            Kerko te gjithe anetaret e shoqates ose filtro sipas emrit
          </h5>

          <form class="header-job-search" @submit.prevent="search(name)">
            <div class="input-keyword" style="width:80%;">
              <input
                type="text"
                class="form-control"
                placeholder="Name and surname"
                v-model="name"
              />
            </div>
            <!-- <div class="input-location">
                        <input type="text" class="form-control" placeholder="City, state or zip">
            </div>-->
            <div class="btn-search">
              <button class="btn btn-primary" type="submit">Find</button>
              <!-- <a href="">Advanced Job Search</a> -->
            </div>
          </form>
        </div>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main>
      <section class="no-padding-top bg-alt">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <br />
              <h5 v-if="isSearching">
                U gjenden
                <strong>{{ searchResult.length }}</strong> anetare.
              </h5>
            </div>
            <!-- Resume detail -->
            <div
              class="col-xs-12"
              v-for="(user, index) in searchResult"
              :key="user.id"
            >
              <router-link
                class="item-block"
                :to="{ name: 'Profile', params: { id: user.id } }"
              >
                <header>
                  <img
                    class="resume-avatar"
                    :src="profilePictures[index]"
                    alt="Profile Picture"
                  />

                  <div class="hgroup">
                    <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                    <h5>{{ user.country }}</h5>
                  </div>
                </header>

                <div class="item-body">
                  <p>{{ user.summary }}</p>

                  <!-- <div class="tag-list">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>Bootstrap</span>
                                    <span>Wordpress</span>
                  </div>-->
                </div>

                <footer>
                  <ul class="details cols-3">
                    <li>
                      <i class="fa fa-map-marker"></i>
                      <span>{{ user.birthday }}</span>
                    </li>

                    <li>
                      <i class="fa fa-user"></i>
                      <span>{{ user.email }}</span>
                    </li>

                    <li>
                      <i class="fa fa-certificate"></i>
                      <span>{{ user.phone }}</span>
                    </li>
                  </ul>
                </footer>
              </router-link>
            </div>
            <!-- END Resume detail -->
          </div>

          <!-- Page navigation -->
          <!-- <nav class="text-center">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <i class="ti-angle-left"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li class="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <i class="ti-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>-->
          <!-- END Page navigation -->
        </div>
      </section>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import {
  FETCH_MEMBER,
  FETCH_PICTURES,
  CLEAN_PICTURES
} from "@/store/actions.type";
export default {
  name: "Directory",
  components: {
    //MemberCard
  },
  data() {
    return {
      name: "",
      isSearching: false
    };
  },
  methods: {
    search(name) {
      this.$store.dispatch(CLEAN_PICTURES);
      this.$store.dispatch(FETCH_MEMBER, { name: name });
      this.isSearching = true;
    },
    open_user_profile(user) {}
  },
  computed: {
    ...mapGetters(["searchResult", "profilePictures"])
  }
};
</script>
