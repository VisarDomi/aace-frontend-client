import { setMeta } from "./common";
import { getUser } from "@/store/services/userstorage";

// dynamic
const Application = () => import("@/views/Application");
const ApplicationStatus = () => import("@/views/ApplicationStatus");
const BeforeApplication = () => import("@/views/BeforeApplication");
const ComingSoon = () => import("@/views/ComingSoon");
const CommunicationDetail = () => import("@/views/CommunicationDetail");
const Communications = () => import("@/views/Communications");
const Directory = () => import("@/views/Directory");
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");
const MemberArea = () => import("@/views/MemberArea");
const Membership = () => import("@/views/Membership");
const NotFound = () => import("@/views/NotFound");
const Profile = () => import("@/views/Profile");
const Reapplication = () => import("@/views/Reapplication");
const Register = () => import("@/views/Register");
const SendingPayment = () => import("@/views/SendingPayment");
const SuccessApplication = () => import("@/views/SuccessApplication");
const SuccessPayment = () => import("@/views/SuccessPayment");

export const dynamic = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: setMeta("Home", true)
  },
  {
    path: "/application_status",
    name: "ApplicationStatus",
    component: ApplicationStatus,
    meta: setMeta("Application Status")
  },
  {
    path: "/communication_detail/:id",
    name: "CommunicationDetail",
    component: CommunicationDetail,
    meta: setMeta("Communication Detail")
  },
  {
    path: "/communications",
    name: "Communications",
    component: Communications,
    meta: setMeta("Communications")
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
    path: "/directory",
    name: "Directory",
    component: Directory,
    meta: setMeta("Directory", true)
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    meta: setMeta("Profile", true)
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
    path: "/login",
    name: "Login",
    component: Login,
    meta: setMeta("Login", true)
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: setMeta("Register", true)
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: setMeta("Not Found")
  },
  {
    path: "/coming_soon",
    name: "ComingSoon",
    component: ComingSoon,
    meta: setMeta("Coming Soon")
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
  {
    path: "/member_area",
    name: "MemberArea",
    component: MemberArea,
    meta: setMeta("Member Area")
  }
];
