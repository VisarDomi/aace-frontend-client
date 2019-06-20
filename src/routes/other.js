import { setMeta } from "./common";

// dynamic
const ComingSoon = () => import("@/views/ComingSoon");
const Directory = () => import("@/views/Directory");
const Home = () => import("@/views/Home");
const MemberArea = () => import("@/views/MemberArea");
const NotFound = () => import("@/views/NotFound");
const Profile = () => import("@/views/Profile");

export const dynamic = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: setMeta("Home", true)
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
    path: "/member_area",
    name: "MemberArea",
    component: MemberArea,
    meta: setMeta("Member Area")
  }
];
