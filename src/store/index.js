import Vue from "vue";
import Vuex from "vuex";
import application from "./modules/application";
import auth from "./modules/auth";
import communication from "./modules/communication";
import event from "./modules/event";
import poll from "./modules/poll";
import loading from "./modules/loading";
import media from "./modules/media";
import profile from "./modules/profile";
import reapplication from "./modules/reapplication";
import search from "./modules/search";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    auth,
    communication,
    event,
    poll,
    loading,
    media,
    profile,
    reapplication,
    search
  },
  strict: process.env.NODE_ENV !== "production"
});
