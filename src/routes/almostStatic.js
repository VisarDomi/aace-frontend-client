import { setMeta } from "./common";
import { getUser } from "@/store/services/userstorage";

// almostStatic
const About = () => import("@/views/almostStatic/About");
// const Board = () => import("@/views/almostStatic/Board")
const Contact = () => import("@/views/almostStatic/Contact");
// const Events = () => import("@/views/almostStatic/Events")
const Privacy = () => import("@/views/almostStatic/Privacy");
// const Publications = () => import("@/views/almostStatic/Publications")
const Terms = () => import("@/views/almostStatic/Terms");

export const almostStatic = [
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
