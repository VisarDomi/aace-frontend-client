import { SET_COMMUNICATION_DOCS } from "../../mutations.type";

export const mutations = {
  [SET_COMMUNICATION_DOCS](state, data) {
    state.documents = data;
  }
};
