import {
  SET_COMMUNICATION,
  SET_COMMUNICATIONS,
  SET_COMMENTS,
  SET_COMMENT
} from "../../mutations.type";

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
