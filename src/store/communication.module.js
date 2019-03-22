import { CommunicationService } from "@/common/api.service";
import {
  FETCH_COMMUNICATIONS,
  FETCH_COMMUNICATION,
  FETCH_COMMENTS,
  MAKE_COMMENT
} from "./actions.type";
import {
  SET_COMMUNICATION,
  SET_COMMUNICATIONS,
  SET_COMMENTS,
  SET_COMMENT
} from "./mutations.type";

const initialState = {
  communications: [],
  communication: {},
  comments: []
};

export const state = { ...initialState };

const getters = {
  communications(state) {
    return state.communications;
  },
  communication(state) {
    return state.communication;
  },
  comments(state) {
    return state.comments;
  }
};

export const actions = {
  async [FETCH_COMMUNICATIONS](context) {
    const { data } = await CommunicationService.getCommunications();
    context.commit(SET_COMMUNICATIONS, data);
  },
  async [FETCH_COMMUNICATION](context, communicationId) {
    const { id } = communicationId;
    console.log("FETCH_COMMUNICATION", id);
    const { data } = await CommunicationService.getCommunication(id);
    context.commit(SET_COMMUNICATION, data);
  },
  async [FETCH_COMMENTS](context, communicationId) {
    const { id } = communicationId;
    console.log("FETCH_COMMENTS", id);
    const { data } = await CommunicationService.getComments(id);
    context.commit(SET_COMMENTS, data);
  },
  async [MAKE_COMMENT](context, payload) {
    const { communicationId, body, files } = payload;
    console.log("starting make comment calls");
    console.log("communicationId", communicationId);
    console.log("body", body);
    console.log("files", files);
    const { data } = await CommunicationService.makeComment(communicationId, {
      body: body
    });
    context.commit(SET_COMMENT, data);
  }
};

export const mutations = {
  [SET_COMMUNICATIONS](state, communications) {
    state.communications = communications;
  },
  [SET_COMMUNICATION](state, communication) {
    state.communication = communication;
  },
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
    console.log("SET_COMMENTS", state.comments);
  },
  [SET_COMMENT](state, comment) {
    console.log("state.comments", state.comments);
    state.comments = state.comments.concat(comment);
    console.log("SET_COMMENT", state.comments);
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
