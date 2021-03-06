import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATIONS,
  SET_EXPERIENCES,
  SET_SKILLS,
  SET_PAYMENTS,
  SET_COMMENT_ADMIN,
  SET_NUMBER_OF_ACCEPTED_USERS
} from "../../mutations.type";

export const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
    state.errors = {};
  },
  [SET_PICTURE](state, picture) {
    state.profilePicture = picture;
  },
  [SET_COMMENT_ADMIN](state, comment) {
    state.commentFromAdmin = comment;
  },
  [SET_EDUCATIONS](state, educations) {
    state.educations = educations;
  },
  [SET_EXPERIENCES](state, experiences) {
    state.experiences = experiences;
  },
  [SET_SKILLS](state, skills) {
    state.skills = skills;
  },
  [SET_PAYMENTS](state, payments) {
    state.payments = payments;
  },
  [SET_NUMBER_OF_ACCEPTED_USERS](state, numberOfAcceptedUsers) {
    state.numberOfAcceptedUsers = numberOfAcceptedUsers;
  }
};
