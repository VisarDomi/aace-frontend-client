import { EventService } from "../../services/api";
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_EVENT_COMMENTS,
  MAKE_EVENT_COMMENT
} from "../../actions.type";
import {
  SET_EVENT,
  SET_EVENTS,
  SET_EVENT_COMMENTS,
  SET_EVENT_COMMENT
} from "../../mutations.type";

export const actions = {
  async [FETCH_EVENTS](context) {
    const { data } = await EventService.getEvents();
    console.log("events ", data);
    context.commit(SET_EVENTS, data);
    console.log("context.state.events", context.state.events);
  },
  async [FETCH_EVENT](context, payload) {
    console.log("FETCH_EVENT, payload:", payload);
    const { id } = payload;
    console.log("FETCH_EVENT, id:", id);
    const { data } = await EventService.getEvent(id);
    context.commit(SET_EVENT, data);
    console.log("context.state.event", context.state.event);
  },
  async [FETCH_EVENT_COMMENTS](context, payload) {
    const { id } = payload;
    console.log("FETCH_COMMENTS", id);
    const { data } = await EventService.getComments(id);
    context.commit(SET_EVENT_COMMENTS, data);
  },
  async [MAKE_EVENT_COMMENT](context, payload) {
    const { eventId, body, files } = payload;
    console.log("starting make comment calls");
    console.log("eventId", eventId);
    console.log("body", body);
    console.log("files", files);
    await EventService.postComment(eventId, {
      body: body
    });
  }
};
