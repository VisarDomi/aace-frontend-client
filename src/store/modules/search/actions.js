import { ProfileService, MediaService } from "@/common/api.service";
import { FETCH_MEMBER, CLEAN_PICTURES } from "../../actions.type";
import {
  SET_SEARCH_RESULT,
  SET_PICTURES,
  DELETE_PICTURES
} from "../../mutations.type";

export const actions = {
  async [FETCH_MEMBER](context, name) {
    const { data } = await ProfileService.searchUser(name);
    context.commit(SET_SEARCH_RESULT, data);
    for (var member in context.state.searchResult) {
      const { data } = await MediaService.getPicture(
        context.state.searchResult[member].id
      );
      context.commit(SET_PICTURES, data);
    }
  },
  async [CLEAN_PICTURES](context) {
    context.commit(DELETE_PICTURES);
  }
};
