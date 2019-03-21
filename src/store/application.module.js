import ApiService from "@/common/api.service";
import { MediaService } from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "./actions.type";

const state = {};

const getters = {};

const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, education_files } = payload;
    console.log("user_id application.module", user_id);
    console.log("education_id application.module", education_id);
    console.log("education_files application.module", education_files);
    console.log("ApiService application.module", ApiService);
    console.log("MediaService application.module", MediaService);
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      user_id,
      education_id,
      education_files
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
