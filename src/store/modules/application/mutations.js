import {
  SET_UPLOADING_STATUS,
  SET_FINISHED_STATUS
} from "../../mutations.type";

export const mutations = {
  [SET_UPLOADING_STATUS](state) {
    state.isUploading = true;
  },
  [SET_FINISHED_STATUS](state) {
    state.isUploading = false;
  }
};
