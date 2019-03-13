// import ApiService from "@/common/api.service";
import { CommunicationService } from "@/common/api.service";
import {
  FETCH_COMMUNICATIONS,
  FETCH_COMMUNICATION,
  ADD_COMMENT
} from "./actions.type";
import {
  SET_COMMUNICATION,
  SET_COMMUNICATIONS,
  POST_COMMENT
} from "./mutations.type";

const initialState = {
  communications: [],
  communication: {}
};

export const state = { ...initialState };

const getters = {
  communications(state) {
    return state.communications;
  },
  communication(state) {
    return state.communication;
  }
};

export const actions = {
  async [FETCH_COMMUNICATIONS](context) {
    const { data } = await CommunicationService.getCommunications();
    context.commit(SET_COMMUNICATIONS, data);
  },
  async [FETCH_COMMUNICATION](context, communicationId) {
    const { id } = communicationId;
    const { data } = await CommunicationService.getCommunication(id);
    context.commit(SET_COMMUNICATION, data);
  },
  async [ADD_COMMENT](context, payload) {
    console.log("action");
    const { id, comment } = payload;
    console.log("id");
    console.log(id);
    console.log("comment");
    console.log(comment);

    return new Promise(resolve => {
      CommunicationService.postCommunication(id, comment)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {});
    });
  }
};

export const mutations = {
  [SET_COMMUNICATIONS](state, communications) {
    state.communications = communications;
  },
  [SET_COMMUNICATION](state, communication) {
    state.communication = communication;
  },
  [POST_COMMENT](state, payload) {}
};

export default {
  state,
  actions,
  mutations,
  getters
};
