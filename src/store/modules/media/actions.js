import { MediaService } from "../../services/api";
import { FETCH_COMMUNICATION_DOCS } from "../../actions.type";
import { FETCH_EVENT_DOCS } from "../../actions.type";
import { FETCH_POLL_DOCS } from "../../actions.type";

import { SET_COMMUNICATION_DOCS } from "../../mutations.type";
import { SET_EVENT_DOCS } from "../../mutations.type";
import { SET_POLL_DOCS } from "../../mutations.type";

export const actions = {
  async [FETCH_COMMUNICATION_DOCS](context, payload) {
    const { data } = await MediaService.getCommunicationMedia(payload.id);
    context.commit(SET_COMMUNICATION_DOCS, data);
  },
  async [FETCH_EVENT_DOCS](context, payload) {
    const { data } = await MediaService.getEventMedia(payload.id);
    context.commit(SET_EVENT_DOCS, data);
  },
  async [FETCH_POLL_DOCS](context, payload) {
    const { data } = await MediaService.getPollMedia(payload.id);
    context.commit(SET_POLL_DOCS, data);
  }
};
