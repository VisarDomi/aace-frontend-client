import ApiService from "@/common/api.service";
import {
  MemberService,
  MediaService,
  EducationService,
  ExperienceService
} from "@/common/api.service";
import { FETCH_PROFILE } from "./actions.type";
import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATION,
  SET_EXPERIENCE
} from "./mutations.type";

const state = {
  errors: {},
  profile: {},
  profilePicture: "",
  educations: {},
  experience: {}
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
  experience(state) {
    return state.experience;
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
    console.log("setting picture");
    console.log(picture);
    state.profilePicture = picture;
  },
  [SET_EDUCATION](state, education) {
    console.log("setting education");
    console.log(education);
    state.educations = education;
  },
  [SET_EXPERIENCE](state, experience) {
    console.log("setting experience");
    console.log(experience);
    state.experience = experience;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
