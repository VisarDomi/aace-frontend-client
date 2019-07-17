import {
  SET_POLL,
  SET_POLLS,
  SET_POLL_COMMENTS,
  SET_POLL_COMMENT
} from "../../mutations.type";

export const mutations = {
  [SET_POLLS](state, polls) {
    for (let poll of polls) {
      console.log("poll is", poll);
    }
    state.polls = polls;
  },
  [SET_POLL](state, poll) {
    state.poll = poll;
  },
  [SET_POLL_COMMENTS](state, comments) {
    state.pollComments = comments;
    console.log("SET_POLL_COMMENTS", state.pollComments);
  }
};
