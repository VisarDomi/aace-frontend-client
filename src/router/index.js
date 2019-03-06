import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home"),
      meta: {
        title: "Home",
        metaTags: [
          {
            name: "description",
            content: "The home page of AACE."
          },
          {
            property: "og:description",
            content: "The home page of AACE."
          }
        ]
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About"),
      meta: {
        title: "About",
        metaTags: [
          {
            name: "description",
            content: "The about page of AACE."
          },
          {
            property: "og:description",
            content: "The about page of AACE."
          }
        ]
      }
    },
    {
      path: "/applicationstatus",
      name: "applicationstatus",
      component: () => import("@/views/ApplicationStatus"),
      meta: {
        title: "About",
        metaTags: [
          {
            name: "description",
            content: "The application status of AACE."
          },
          {
            property: "og:description",
            content: "The application status of AACE."
          }
        ]
      }
    },
    {
      path: "/commdetail/:id",
      name: "commdetail",
      component: () => import("@/views/CommDetail"),
      meta: {
        title: "Communication Detail",
        metaTags: [
          {
            name: "description",
            content: "The communication detail page of AACE."
          },
          {
            property: "og:description",
            content: "The communication detail page of AACE."
          }
        ]
      }
    },
    {
      path: "/communication",
      name: "communication",
      component: () => import("@/views/Communication"),
      meta: {
        title: "Communication",
        metaTags: [
          {
            name: "description",
            content: "The communication page of AACE."
          },
          {
            property: "og:description",
            content: "The communication page of AACE."
          }
        ]
      }
    },
    {
      path: "/board",
      component: () => import("@/views/Board"),
    },
    {
      path: "/membership",
      name: "membership",
      component: () => import("@/views/Membership"),
      meta: {
        title: "Membership",
        metaTags: [
          {
            name: "description",
            content: "The membership page of AACE."
          },
          {
            property: "og:description",
            content: "The membership page of AACE."
          }
        ]
      }
    },
    {
      path: "/directory",
      name: "directory",
      component: () => import("@/views/Directory"),
      meta: {
        title: "Directory",
        metaTags: [
          {
            name: "description",
            content: "The directory page of AACE."
          },
          {
            property: "og:description",
            content: "The directory page of AACE."
          }
        ]
      }
    },
    {
      path: "/events",
      component: () => import("@/views/Events")
    },
    {
      path: "/publications",
      component: () => import("@/views/Publications")
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("@/views/Profile"),
      meta: {
        title: "Profile",
        metaTags: [
          {
            name: "description",
            content: "The profile of a member of AACE."
          },
          {
            property: "og:description",
            content: "The profile of a member of AACE."
          }
        ]
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact"),
      meta: {
        title: "Contact",
        metaTags: [
          {
            name: "description",
            content: "The contact page of AACE."
          },
          {
            property: "og:description",
            content: "The contact page of AACE."
          }
        ]
      }
    },
    {
      path: "/application",
      name: "application",
      component: () => import("@/views/Application"),
      meta: {
        title: "Application",
        metaTags: [
          {
            name: "description",
            content: "The application page of AACE."
          },
          {
            property: "og:description",
            content: "The application page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        if (localStorage.getItem("id_token")) { //is there a way to get this using the new structure functionality? 
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login"),
      meta: {
        title: "Login",
        metaTags: [
          {
            name: "description",
            content: "The login page of AACE."
          },
          {
            property: "og:description",
            content: "The login page of AACE."
          }
        ]
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register"),
      meta: {
        title: "Register",
        metaTags: [
          {
            name: "description",
            content: "The register page of AACE."
          },
          {
            property: "og:description",
            content: "The register page of AACE."
          }
        ]
      }
    },
    {
      path: "/memberarea",
      name: "memberarea",
      component: () => import("@/views/MemberArea"),
      meta: {
        title: "UserArea",
        metaTags: [
          {
            name: "description",
            content: "The member area page of AACE."
          },
          {
            property: "og:description",
            content: "The member area page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) { //is there a way to get this using the new structure functionality? 
        if (localStorage.getItem("id_token")) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

});
