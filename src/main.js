import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";
import store from "./store";
import "./registerServiceWorker";
import { CHECK_AUTH } from "./store/actions.type";
import { ApiService } from "./store/services/api";
import { getToken } from "./store/services/jwt";
import { yearFormat, hourFormat } from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import VueScript2 from 'vue-script2';
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(VueReCaptcha, {
  siteKey: '6LfInq0UAAAAAEh0B4PCmyZbIvl7kQQRt-wrBdj0',
  loaderOptions: {
    useRecaptchaNet: true
  }
})
Vue.use(VueScript2);
Vue.use(VueRouter);
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
Vue.filter("yearFormat", yearFormat);
Vue.filter("hourFormat", hourFormat);
Vue.filter("error", ErrorFilter);

ApiService.init();

//configure router
const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: routes
});

// check requiresAuth
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach to: ", to);
  console.log("router.beforeEach from: ", from);
  console.log("router.beforeEach next: ", next);
  ApiService.setHeader();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getToken() == null) {
      next({
        name: "Login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

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
  el: "#app",
  router,
  store,
  render: h => h(App)
});
