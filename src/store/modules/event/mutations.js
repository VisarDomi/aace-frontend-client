import {
  SET_EVENT,
  SET_EVENTS,
  SET_EVENT_COMMENTS,
  SET_EVENT_COMMENT
} from "../../mutations.type";

export const mutations = {
  [SET_EVENTS](state, events) {
    for (let event of events) {
      console.log("event is", event);
    }
    state.events = events;
  },
  [SET_EVENT](state, event) {
    state.event = event;
  },
  [SET_EVENT_COMMENTS](state, comments) {
    state.eventComments = comments;
    console.log("SET_EVENT_COMMENTS", state.eventComments);
  }
};
