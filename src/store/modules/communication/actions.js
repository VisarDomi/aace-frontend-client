import { CommunicationService } from "../../services/api";
import {
  FETCH_COMMUNICATIONS,
  FETCH_COMMUNICATION,
  FETCH_COMMUNICATION_COMMENTS,
  MAKE_COMMUNICATION_COMMENT
} from "../../actions.type";
import {
  SET_COMMUNICATION,
  SET_COMMUNICATIONS,
  SET_COMMUNICATION_COMMENTS,
  SET_COMMUNICATION_COMMENT
} from "../../mutations.type";

export const actions = {
  async [FETCH_COMMUNICATIONS](context) {
    const { data } = await CommunicationService.getCommunications();
    console.log("communciations ", data);
    context.commit(SET_COMMUNICATIONS, data);
    console.log("context.state.communications", context.state.communications);
  },
  async [FETCH_COMMUNICATION](context, payload) {
    console.log("FETCH_COMMUNICATION, payload:", payload);
    const { id } = payload;
    console.log("FETCH_COMMUNICATION, id:", id);
    const { data } = await CommunicationService.getCommunication(id);
    context.commit(SET_COMMUNICATION, data);
    console.log("context.state.communication", context.state.communication);
  },
  async [FETCH_COMMUNICATION_COMMENTS](context, payload) {
    const { id } = payload;
    console.log("FETCH_COMMENTS", id);
    const { data } = await CommunicationService.getComments(id);
    context.commit(SET_COMMUNICATION_COMMENTS, data);
  },
  async [MAKE_COMMUNICATION_COMMENT](context, payload) {
    const { communicationId, body, files } = payload;
    console.log("starting make comment calls");
    console.log("communicationId", communicationId);
    console.log("body", body);
    console.log("files", files);
    await CommunicationService.postComment(communicationId, {
      body: body
    });
  }
};
