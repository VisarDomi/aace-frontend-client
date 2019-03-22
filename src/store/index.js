import Vue from "vue";
import Vuex from "vuex";
import application from "./modules/application";
import auth from "./auth.module";
import communication from "./communication.module";
import media from "./media.module";
import profile from "./profile.module";
import search from "./search.module";
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
