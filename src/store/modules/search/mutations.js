import {
  SET_SEARCH_RESULT,
  SET_PICTURES,
  DELETE_PICTURES
} from "../../mutations.type";

export const mutations = {
  [SET_SEARCH_RESULT](state, data) {
    state.searchResult = data;
  },
  [SET_PICTURES](state, data) {
    if (data.length != 0) {
      state.profilePictures.push(data[0].url);
    } else {
      state.profilePictures.push("https://aace.ml/static/dpi.jpg");
    }
  },
  [DELETE_PICTURES](state) {
    state.profilePictures = [];
  }
};
