import { MediaService } from "@/common/api.service";
import { FETCH_DOCS } from "../../actions.type";

import { SET_COMMUNICATION_DOCS } from "../../mutations.type";

export const actions = {
  async [FETCH_DOCS](context, payload) {
    const { data } = await MediaService.getCommunicationMedia(payload.id);
    context.commit(SET_COMMUNICATION_DOCS, data);
  }
};
