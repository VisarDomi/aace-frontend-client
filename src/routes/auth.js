import { setMeta } from "./common";

// auth
const Login = () => import("@/views/auth/Login");
const Register = () => import("@/views/auth/Register");

export const auth = [
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
  }
];
