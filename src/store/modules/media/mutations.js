import { SET_COMMUNICATION_DOCS } from "../../mutations.type";
import { SET_EVENT_DOCS } from "../../mutations.type";
import { SET_POLL_DOCS } from "../../mutations.type";

export const mutations = {
  [SET_COMMUNICATION_DOCS](state, data) {
    state.communicationDocuments = data;
  },
  [SET_EVENT_DOCS](state, data) {
    state.eventDocuments = data;
  },
  [SET_POLL_DOCS](state, data) {
    state.pollDocuments = data;
  }
};
