// import ApiService from "@/common/api.service";
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
  SET_APPLICATION_STATUS,
  SET_APPLICATION_DATE,
  SET_REAPPLICATION_DATE,
  SET_PAYMENT_STATUS,
  SET_SEND_PAYMENT_DATE,
  SET_RESEND_PAYMENT_DATE,
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
  applicationStatus: "",
  applicationDate: "",
  reapplicationDate: "",
  paymentStatus: "",
  sendPaymentDate: "",
  resendPaymentDate: "",
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
  applicationStatus(state) {
    return state.applicationStatus;
  },
  applicationDate(state) {
    return state.applicationDate;
  },
  reapplicationDate(state) {
    return state.reapplicationDate;
  },
  paymentStatus(state) {
    return state.paymentStatus;
  },
  sendPaymentDate(state) {
    return state.sendPaymentDate;
  },
  resendPaymentDate(state) {
    return state.resendPaymentDate;
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
        context.commit(SET_APPLICATION_STATUS, data.application_status);
        context.commit(SET_APPLICATION_DATE, data.application_date);
        context.commit(SET_REAPPLICATION_DATE, data.reapplication_date);
        context.commit(SET_PAYMENT_STATUS, data.payment_status);
        context.commit(SET_SEND_PAYMENT_DATE, data.send_payment_date);
        context.commit(SET_RESEND_PAYMENT_DATE, data.resend_payment_date);
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
  [SET_APPLICATION_STATUS](state, application_status) {
    state.applicationStatus = application_status;
  },
  [SET_APPLICATION_DATE](state, date) {
    state.applicationDate = date;
  },
  [SET_REAPPLICATION_DATE](state, date) {
    state.reapplicationDate = date;
  },
  [SET_PAYMENT_STATUS](state, payment_status) {
    state.paymentStatus = payment_status;
  },
  [SET_SEND_PAYMENT_DATE](state, send_payment_date) {
    state.sendPaymentDate = send_payment_date;
  },
  [SET_RESEND_PAYMENT_DATE](state, resend_payment_date) {
    state.resendPaymentDate = resend_payment_date;
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
