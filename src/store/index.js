import Vue from "vue";
import Vuex from "vuex";
import application from "./modules/application";
import auth from "./modules/auth";
import communication from "./modules/communication";
import media from "./modules/media";
import profile from "./modules/profile";
import search from "./modules/search";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    auth,
    communication,
    media,
    profile,
    search
  }
});
