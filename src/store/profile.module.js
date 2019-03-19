// import ApiService from "@/common/api.service";
import UserService from "@/common/userstorage.service";
import {
  MemberService,
  MediaService,
  EducationService,
  ExperienceService,
  SkillService
} from "@/common/api.service";
import { FETCH_PROFILE, FETCH_APPLICATION_INFO } from "./actions.type";
import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATION,
  SET_EXPERIENCE,
  SET_SKILL,
  SET_APPLICATION_STATUS,
  SET_APPLICATION_DATE,
  SET_REAPPLICATION_DATE,
  SET_COMMENT_ADMIN
} from "./mutations.type";

const state = {
  errors: {},
  profile: {},
  profilePicture: "",
  educations: {},
  experiences: {},
  skills: {},
  applicationStatus: "",
  applicationDate: "",
  reapplicationDate: "",
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
  applicationDate(state) {
    return state.applicationDate;
  },
  reapplicationDate(state) {
    return state.reapplicationDate;
  },
  applicationStatus(state) {
    return state.applicationStatus;
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
        context.commit(SET_EDUCATION, data);
      })
      .catch(() => {});

    ExperienceService.getExperience(id)
      .then(({ data }) => {
        context.commit(SET_EXPERIENCE, data);
      })
      .catch(() => {});
    SkillService.getSkill(id)
      .then(({ data }) => {
        context.commit(SET_SKILL, data);
      })
      .catch(() => {});
  },
  [FETCH_APPLICATION_INFO](context) {
    MemberService.get(UserService.getUser().id)
      .then(({ data }) => {
        context.commit(SET_APPLICATION_STATUS, data.application_status);
        context.commit(SET_APPLICATION_DATE, data.application_date);
        context.commit(SET_REAPPLICATION_DATE, data.reapplication_date);
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
  [SET_APPLICATION_STATUS](state, status) {
    state.applicationStatus = status;
  },
  [SET_COMMENT_ADMIN](state, comment) {
    state.commentFromAdmin = comment;
  },
  [SET_APPLICATION_DATE](state, date) {
    state.applicationDate = date;
  },
  [SET_REAPPLICATION_DATE](state, date) {
    state.reapplicationDate = date;
  },

  [SET_EDUCATION](state, educations) {
    state.educations = educations;
  },
  [SET_EXPERIENCE](state, experiences) {
    state.experiences = experiences;
  },
  [SET_SKILL](state, skills) {
    state.skills = skills;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
