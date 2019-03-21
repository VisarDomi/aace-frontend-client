// import ApiService from "@/common/api.service";
import { EducationMediaService } from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "./actions.type";
import { ApiService } from "@/common/api.service";

const state = {};

const getters = {};

const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await EducationMediaService.post(user_id, education_id, formDataEducation);
  }
};

const mutations = {};

export default {
  state,
  actions,
  mutations,
  getters
};
