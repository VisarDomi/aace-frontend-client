import { ApiService } from "@/common/api.service";
import { MediaService } from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "./actions.type";

const state = {};

const getters = {};

const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      user_id,
      education_id,
      formDataEducation
    );
  }
};

const mutations = {};

export default {
  state,
  actions,
  mutations,
  getters
};
