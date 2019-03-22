import UserService from "@/common/userstorage.service";
import {
  MemberService,
  MediaService,
  EducationService,
  ExperienceService,
  SkillService,
  PaymentService
} from "@/common/api.service";
import { FETCH_PROFILE, FETCH_APPLICATION_INFO } from "./actions.type";
import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATIONS,
  SET_EXPERIENCES,
  SET_SKILLS,
  SET_PAYMENTS,
  SET_COMMENT_ADMIN
} from "./mutations.type";

const state = {
  errors: {},
  profile: {},
  profilePicture: "",
  educations: {},
  experiences: {},
  skills: {},
  payments: {},
  commentFromAdmin: ""
};

const getters = {
  profile(state) {
    return state.profile;
  },
  profilePicture(state) {
    return state.profilePicture;
  },
  educations(state) {
    return state.educations;
  },
  experiences(state) {
    return state.experiences;
  },
  skills(state) {
    return state.skills;
  },
  payments(state) {
    return state.payments;
  },
  commentFromAdmin(state) {
    return state.commentFromAdmin;
  }
};

const actions = {
  [FETCH_PROFILE](context, payload) {
    const { id } = payload;
    MemberService.get(id)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });

    MediaService.getPicture(id)
      .then(({ data }) => {
        if (data.length != 0) {
          context.commit(SET_PICTURE, data[0].url);
        } else {
          context.commit(SET_PICTURE, "https://aace.ml/static/dpi.jpg");
        }
      })
      .catch(() => {});

    EducationService.getEducation(id)
      .then(({ data }) => {
        context.commit(SET_EDUCATIONS, data);
      })
      .catch(() => {});

    ExperienceService.getExperience(id)
      .then(({ data }) => {
        context.commit(SET_EXPERIENCES, data);
      })
      .catch(() => {});
    SkillService.getSkill(id)
      .then(({ data }) => {
        context.commit(SET_SKILLS, data);
      })
      .catch(() => {});
    PaymentService.getPayment(id)
      .then(({ data }) => {
        context.commit(SET_PAYMENTS, data);
      })
      .catch(() => {});
  },
  [FETCH_APPLICATION_INFO](context) {
    MemberService.get(UserService.getUser().id)
      .then(({ data }) => {
        context.commit(SET_COMMENT_ADMIN, data.comment_from_administrator);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });
  }
};

const mutations = {
  // [SET_ERROR] (state, error) {
  //   state.errors = error
  // },
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
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
