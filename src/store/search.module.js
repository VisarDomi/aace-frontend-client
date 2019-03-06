import Vue from "vue";

import { MemberService, MediaService } from "@/common/api.service";

import { FETCH_MEMBER, FETCH_PICTURES, CLEAN_PICTURES } from "./actions.type";

import {
  SET_SEARCH_RESULT,
  SET_PICTURES,
  DELETE_PICTURES
} from "./mutations.type";

const initialState = {
  searchResult: [],
  profilePictures: []
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_MEMBER](context, name) {
    const { data } = await MemberService.search(name);
    context.commit(SET_SEARCH_RESULT, data);
    for (var member in state.searchResult) {
      const { data } = await MediaService.getPicture(
        state.searchResult[member].id
      );
      context.commit(SET_PICTURES, data);
    }
  },
  async [CLEAN_PICTURES](context) {
    context.commit(DELETE_PICTURES);
  }
};

export const mutations = {
<<<<<<< HEAD
    [SET_SEARCH_RESULT](state,data){
        state.searchResult = data;
    },
    [SET_PICTURES](state,data){
        if(data.length != 0){
            state.profilePictures.push(data[0].url);
        }else{
            state.profilePictures.push('https://www.edgehill.ac.uk/health/files/2017/12/blank-profile.png')
        }
    },
    [DELETE_PICTURES](state){
        state.profilePictures=[];
=======
  [SET_SEARCH_RESULT](state, data) {
    state.searchResult = data;
  },
  [SET_PICTURES](state, data) {
    if (data.length != 0) {
      state.profilePictures.push(data[0].url);
    } else {
      state.profilePictures.push("https://aace.ml/static/files/dpi.jpg");
>>>>>>> d098f3ed49ee6deebd08eb98f09352678ccf7a55
    }
  },
  [DELETE_PICTURES](state) {
    state.profilePictures = [];
  }
};

const getters = {
  searchResult() {
    return state.searchResult;
  },
  profilePictures() {
    return state.profilePictures;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
