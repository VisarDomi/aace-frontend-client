import ApiService from "@/common/api.service";
import { MediaService } from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "./actions.type";
import { SET_UPLOADING_STATUS, SET_FINISHED_STATUS } from "./mutations.type";

const state = {
  isUploading: false,
  uploadStatus: []
};

const getters = {
  isUploading() {
    return state.isUploading;
  },
  uploadStatus() {
    return state.uploadStatus;
  }
};

const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      user_id,
      education_id,
      formDataEducation
    )
      .then(res => {
        for (let media of res.data) {
          console.log("media education res", media);
        }
        if (res.status == 200) {
          console.log("success media education");
        }
      })
      .catch(err => console.log(err));
  }
};

const mutations = {
  [SET_UPLOADING_STATUS](state) {
    state.isUploading = true;
  },
  [SET_FINISHED_STATUS](state) {
    state.isUploading = false;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
