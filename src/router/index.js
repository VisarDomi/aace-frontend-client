import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "Home",
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
      name: "About",
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
      path: "/application_status",
      name: "ApplicationStatus",
      component: () => import("@/views/ApplicationStatus"),
      meta: {
        title: "Application Status",
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
      path: "/communication_detail/:id",
      name: "CommunicationDetail",
      component: () => import("@/views/CommunicationDetail"),
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
      path: "/communications",
      name: "Communications",
      component: () => import("@/views/Communications"),
      meta: {
        title: "Communications",
        metaTags: [
          {
            name: "description",
            content: "The communications page of AACE."
          },
          {
            property: "og:description",
            content: "The communications page of AACE."
          }
        ]
      }
    },
    // {
    //   path: "/board",
    //   name: "Board",
    //   component: () => import("@/views/Board"),
    //   meta: {
    //     title: "Board",
    //     metaTags: [
    //       {
    //         name: "description",
    //         content: "The board page of AACE."
    //       },
    //       {
    //         property: "og:description",
    //         content: "The board page of AACE."
    //       }
    //     ]
    //   }
    // },
    {
      path: "/membership",
      name: "Membership",
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
      path: "/before_application",
      name: "BeforeApplication",
      component: () => import("@/views/BeforeApplication"),
      meta: {
        title: "BeforeApplication",
        metaTags: [
          {
            name: "description",
            content: "The before_application page of AACE."
          },
          {
            property: "og:description",
            content: "The before_application page of AACE."
          }
        ]
      }
    },
    {
      path: "/directory",
      name: "Directory",
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
    // {
    //   path: "/events",
    //   name: "Events",
    //   component: () => import("@/views/Events"),
    //   meta: {
    //     title: "Events",
    //     metaTags: [
    //       {
    //         name: "description",
    //         content: "The events page of AACE."
    //       },
    //       {
    //         property: "og:description",
    //         content: "The events page of AACE."
    //       }
    //     ]
    //   }
    // },
    // {
    //   path: "/publications",
    //   name: "Publications",
    //   component: () => import("@/views/Publications"),
    //   meta: {
    //     title: "Publications",
    //     metaTags: [
    //       {
    //         name: "description",
    //         content: "The publications page of AACE."
    //       },
    //       {
    //         property: "og:description",
    //         content: "The publications page of AACE."
    //       }
    //     ]
    //   }
    // },
    {
      path: "/profile/:id",
      name: "Profile",
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
      name: "Contact",
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
      name: "Application",
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
        if (localStorage.getItem("id_token")) {
          let user = JSON.parse(localStorage.getItem("user"));
          if (
            user["application_status"] == undefined ||
            user["application_status"] == "blank"
          ) {
            next();
          } else {
            console.log("redirect");
            next("/application_status");
          }
          //is there a way to get this using the new structure functionality?
        } else {
          console.log("redirect");
          next("/login");
        }
      }
    },
    {
      path: "/reapplication",
      name: "Reapplication",
      component: () => import("@/views/Reapplication"),
      meta: {
        title: "Reapplication",
        metaTags: [
          {
            name: "description",
            content: "The reapplication page of AACE."
          },
          {
            property: "og:description",
            content: "The reapplication page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        if (localStorage.getItem("id_token")) {
          let user = JSON.parse(localStorage.getItem("user"));
          console.log("status", user["application_status"]);
          if (user["application_status"] == "rebutted") {
            next();
          } else {
            console.log("redirect");
            next("/application_status");
          }
          //is there a way to get this using the new structure functionality?
        } else {
          console.log("redirect");
          next("/login");
        }
      }
    },
    {
      path: "/sending_payment",
      name: "SendingPayment",
      component: () => import("@/views/SendingPayment"),
      meta: {
        title: "SendingPayment",
        metaTags: [
          {
            name: "description",
            content: "The sending_payment page of AACE."
          },
          {
            property: "og:description",
            content: "The sending_payment page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        if (localStorage.getItem("id_token")) {
          let user = JSON.parse(localStorage.getItem("user"));
          console.log("payment_status", user["payment_status"]);
          if (
            user["application_status"] == undefined ||
            user["payment_status"] == "blank"
          ) {
            next();
          } else {
            console.log("redirect");
            next("/application_status");
          }
          //is there a way to get this using the new structure functionality?
        } else {
          console.log("redirect");
          next("/login");
        }
      }
    },
    {
      path: "/resending_payment",
      name: "ResendingPayment",
      component: () => import("@/views/ResendingPayment"),
      meta: {
        title: "ResendingPayment",
        metaTags: [
          {
            name: "description",
            content: "The resending_payment page of AACE."
          },
          {
            property: "og:description",
            content: "The resending_payment page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        if (localStorage.getItem("id_token")) {
          let user = JSON.parse(localStorage.getItem("user"));
          console.log("payment_status", user["payment_status"]);
          if (user["payment_status"] == "rebutted_payment") {
            next();
          } else {
            console.log("redirect");
            next("/application_status");
          }
          //is there a way to get this using the new structure functionality?
        } else {
          console.log("redirect");
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "Login",
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
      name: "Register",
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
      path: "*",
      name: "NotFound",
      component: () => import("@/views/NotFound"),
      meta: {
        title: "Not Found",
        metaTags: [
          {
            name: "description",
            content: "The not found page of AACE."
          },
          {
            property: "og:description",
            content: "The not found page of AACE."
          }
        ]
      }
    },
    {
      path: "/coming_soon",
      name: "ComingSoon",
      component: () => import("@/views/ComingSoon"),
      meta: {
        title: "Coming Soon",
        metaTags: [
          {
            name: "description",
            content: "The coming soon page of AACE."
          },
          {
            property: "og:description",
            content: "The coming soon page of AACE."
          }
        ]
      }
    },
    {
      path: "/success_application",
      name: "SuccessApplication",
      component: () => import("@/views/SuccessApplication"),
      meta: {
        title: "SuccessApplication",
        metaTags: [
          {
            name: "description",
            content: "The success_application page of AACE."
          },
          {
            property: "og:description",
            content: "The success_application page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        console.log(to.name);
        console.log(from.name);
        if (from.name == "Reapplication" || from.name == "Application") next();
        else {
          console.log("redirect");
          next("/application_status");
        }
      }
    },
    {
      path: "/success_payment",
      name: "SuccessPayment",
      component: () => import("@/views/SuccessPayment"),
      meta: {
        title: "SuccessPayment",
        metaTags: [
          {
            name: "description",
            content: "The success_payment page of AACE."
          },
          {
            property: "og:description",
            content: "The success_payment page of AACE."
          }
        ]
      },
      beforeEnter(to, from, next) {
        console.log(to.name);
        console.log(from.name);
        if (from.name == "SendingPayment" || from.name == "ResendingPayment") next();
        else {
          console.log("redirect");
          next("/application_status");
        }
      }
    },
    // {
    //   path: "/privacy",
    //   name: "Privacy",
    //   component: () => import("@/views/Privacy"),
    //   meta: {
    //     title: "Privacy",
    //     metaTags: [
    //       {
    //         name: "description",
    //         content: "The privacy page of AACE."
    //       },
    //       {
    //         property: "og:description",
    //         content: "The privacy page of AACE."
    //       }
    //     ]
    //   }
    // },
    // {
    //   path: "/terms",
    //   name: "Terms",
    //   component: () => import("@/views/Terms"),
    //   meta: {
    //     title: "Terms",
    //     metaTags: [
    //       {
    //         name: "description",
    //         content: "The terms page of AACE."
    //       },
    //       {
    //         property: "og:description",
    //         content: "The terms page of AACE."
    //       }
    //     ]
    //   }
    // },
    {
      path: "/member_area",
      name: "MemberArea",
      component: () => import("@/views/MemberArea"),
      meta: {
        title: "Member Area",
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
      beforeEnter(to, from, next) {
        //is there a way to get this using the new structure functionality?
        if (localStorage.getItem("id_token")) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
