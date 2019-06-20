import { setMeta } from "./common";

// information
const About = () => import("@/views/information/About");
// const Board = () => import("@/views/information/Board")
const Contact = () => import("@/views/information/Contact");
// const Events = () => import("@/views/information/Events")
const Privacy = () => import("@/views/information/Privacy");
// const Publications = () => import("@/views/information/Publications")
const Terms = () => import("@/views/information/Terms");

export const information = [
  {
    path: "/about",
    name: "About",
    component: About,
    meta: setMeta("About", true)
  },
  // {
  //   path: "/board",
  //   name: "Board",
  //   component: Board,
  // meta: setMeta("Board")
  // },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: setMeta("Contact", true)
  },
  // {
  //   path: "/events",
  //   name: "Events",
  //   component: Events,
  //   meta: setMeta("Events", true)
  // },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta: setMeta("Privacy", true)
  },
  // {
  //   path: "/publications",
  //   name: "Publications",
  //   component: Publications,
  //   meta: setMeta("Publications", true)
  // },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
    meta: setMeta("Terms", true)
  }
];
