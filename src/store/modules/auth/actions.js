import { ApiService } from "@/common/api.service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../../actions.type";
import { SET_AUTH, SET_AUTH_SECOND, PURGE_AUTH } from "../../mutations.type";
import JwtService from "@/common/jwt.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [LOGIN](context, credentials) {
    await ApiService.login("auth/login", { auth: credentials }).then(res => {
      if (res.status == 200) {
        context.commit(SET_AUTH, res.data);
      }
    });
  },
  [LOGOUT](context) {
    let applicationState = context.rootState.application;
    console.log("context is", context);
    console.log("context.rootState is", context.rootState);
    console.log(
      "context.rootState.application is",
      context.rootState.application
    );
    context.commit(PURGE_AUTH);
    applicationState.appSkills = [];
    applicationState.isUploading = false;
    applicationState.skillId = 0;
    applicationState.totalSkills = 0;
  },
  async [REGISTER](context, credentials) {
    await ApiService.post("user", credentials).then(res => {
      if (res.status == 200) {
        context.commit(SET_AUTH, res.data);
      }
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      context.commit(SET_AUTH_SECOND, UserService.getUser());
    } else {
      context.commit(PURGE_AUTH);
    }
  }
};
