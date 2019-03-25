import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { CHECK_AUTH } from "./store/actions.type";
import { ApiService } from "./common/api.service";
// import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "{attribute} duhet plotesuar!",
    email: "{attribute} duhet te jete format emaili!",
    minLength: "{attribute} duhet te jete me i gjate!"
  },
  attributes: {
    first_name: "Emri",
    last_name: "Mbiemri",
    profession: "Profesioni",
    sex: "Gjinia",
    summary: "Pershkrimi",
    country: "Vendlindja",
    phone: "Numri i telefonit",
    address: "Adresa",
    birthday: "Ditelindja",
    website: "Faqja e internetit",
    email: "Emaili"
  }
});

Vue.config.productionTip = false;
// Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
  }
  // dinamically change title and shikother metadata
);

// dinamically change title and other metadata
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
