import { CommunicationService } from "@/common/api.service";
import {
  FETCH_COMMUNICATIONS,
  FETCH_COMMUNICATION,
  FETCH_COMMENTS,
  MAKE_COMMENT
} from "../../actions.type";
import {
  SET_COMMUNICATION,
  SET_COMMUNICATIONS,
  SET_COMMENTS,
  SET_COMMENT
} from "../../mutations.type";

export const actions = {
  async [FETCH_COMMUNICATIONS](context) {
    const { data } = await CommunicationService.getCommunications();
    console.log("communciations ", data);
    context.commit(SET_COMMUNICATIONS, data);
    console.log("state communication", context.state.communications);
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
    const { data } = await CommunicationService.postComment(communicationId, {
      body: body
    });
    context.commit(SET_COMMENT, data);
  }
};
