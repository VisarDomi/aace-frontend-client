import { setMeta } from "./common";
import { getUser } from "@/store/services/userstorage";

// dynamic
const Application = () => import("@/views/application/Application");
const ApplicationStatus = () => import("@/views/application/ApplicationStatus");
const BeforeApplication = () => import("@/views/application/BeforeApplication");
const Membership = () => import("@/views/application/Membership");
const Reapplication = () => import("@/views/application/Reapplication");
const SendingPayment = () => import("@/views/application/SendingPayment");
const SuccessApplication = () => import("@/views/application/SuccessApplication");
const SuccessPayment = () => import("@/views/application/SuccessPayment");

export const application = [
  {
    path: "/application_status",
    name: "ApplicationStatus",
    component: ApplicationStatus,
    meta: setMeta("Application Status")
  },
  {
    path: "/membership",
    name: "Membership",
    component: Membership,
    meta: setMeta("Membership", true)
  },
  {
    path: "/before_application",
    name: "BeforeApplication",
    component: BeforeApplication,
    meta: setMeta("Before Application", true)
  },
  {
    path: "/application",
    name: "Application",
    component: Application,
    meta: setMeta("Application"),
    beforeEnter(to, from, next) {
      let user = getUser();
      if (
        user.application_status == undefined ||
        user.application_status == "blank"
      ) {
        next();
      } else {
        console.log("redirect");
        next("/application_status");
      }
    }
  },
  {
    path: "/reapplication",
    name: "Reapplication",
    component: Reapplication,
    meta: setMeta("Reapplication"),
    beforeEnter(to, from, next) {
      let user = getUser();
      if (user.application_status == "rebutted") {
        next();
      } else {
        console.log("redirect");
        next("/application_status");
      }
    }
  },
  {
    path: "/sending_payment",
    name: "SendingPayment",
    component: SendingPayment,
    meta: setMeta("Sending Payment"),
    beforeEnter(to, from, next) {
      let user = getUser();
      if (
        user.payment_status == "blank" ||
        user.payment_status == "rebutted_payment"
      ) {
        next();
      } else {
        console.log("redirect");
        next("/application_status");
      }
    }
  },
  {
    path: "/success_application",
    name: "SuccessApplication",
    component: SuccessApplication,
    meta: setMeta("Success Application"),
    beforeEnter(to, from, next) {
      if (from.name == "Reapplication" || from.name == "Application") {
        next();
      } else {
        console.log("redirect");
        next("/application_status");
      }
    }
  },
  {
    path: "/success_payment",
    name: "SuccessPayment",
    component: SuccessPayment,
    meta: setMeta("Success Payment"),
    beforeEnter(to, from, next) {
      if (from.name == "SendingPayment") {
        next();
      } else {
        console.log("redirect");
        next("/application_status");
      }
    }
  },
];
