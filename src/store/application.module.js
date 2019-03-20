// import ApiService from "@/common/api.service";
import UserService from "@/common/userstorage.service";
import {
  MemberService,
  MediaService,
  EducationService,
  ExperienceService,
  SkillService,
  PaymentService,
  EducationMediaService
} from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "./actions.type";
import { ApiService } from "@/common/api.service";
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

const state = {};

const getters = {};

const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await EducationMediaService.post(user_id, education_id, formDataEducation);
  }
};

const mutations = {};

export default {
  state,
  actions,
  mutations,
  getters
};
