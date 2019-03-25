import { ApiService } from "@/common/api.service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../../actions.type";
import { SET_AUTH, SET_AUTH_SECOND, PURGE_AUTH } from "../../mutations.type";
import JwtService from "@/common/jwt.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [LOGIN](context, credentials) {
    console.log('outside post', credentials)
    await ApiService.login("auth/login", { auth: credentials }).then(res => {
      if (res.status == 200) {
        context.commit(SET_AUTH, res.data);
      }
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
    let applicationState = context.rootState.application;
    applicationState.appProfile = {
      first_name: "",
      last_name: "",
      profession: "",
      sex: "",
      summary: "",
      country: "",
      phone: "",
      address: "",
      birthday: "",
      website: "",
      email: "",
      files: []
    };
    applicationState.appEducations = [];
    applicationState.educationId = 0;
    applicationState.totalEducations = 0;
    applicationState.appExperiences = [];
    applicationState.experienceId = 0;
    applicationState.totalExperiences = 0;
    applicationState.appSkills = [];
    applicationState.skillId = 0;
    applicationState.totalSkills = 0;
    applicationState.isUploading = false;
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
