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
    console.log("context.state.communications", context.state.communications);
  },
  [FETCH_COMMUNICATION](context, payload) {
    console.log("FETCH_COMMUNICATION, payload:", payload);
    const { id } = payload;
    console.log("FETCH_COMMUNICATION, id:", id);
    let communication = context.state.communications.filter(
      communication => communication.id == id
    );
    context.commit(SET_COMMUNICATION, communication);
    console.log("context.state.communication", context.state.communication);
  },
  async [FETCH_COMMENTS](context, payload) {
    const { id } = payload;
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
