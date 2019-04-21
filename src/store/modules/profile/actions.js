import {
  ProfileService,
  MediaService,
  EducationService,
  ExperienceService,
  SkillService,
  PaymentService
} from "@/common/api.service";
import { FETCH_PROFILE, FETCH_APPLICATION_INFO } from "../../actions.type";
import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATIONS,
  SET_EXPERIENCES,
  SET_SKILLS,
  SET_PAYMENTS,
  SET_COMMENT_ADMIN,
  SET_AUTH_SECOND
} from "../../mutations.type";

export const actions = {
  async [FETCH_PROFILE](context, payload) {
    const { id } = payload;
    await ProfileService.getProfile(id).then(({ data }) => {
      context.commit(SET_PROFILE, data);
      // return data;
    });
    await MediaService.getPicture(id).then(({ data }) => {
      if (data.length != 0) {
        context.commit(SET_PICTURE, data.pop().url);
      } else {
        context.commit(SET_PICTURE, "https://aace.ml/static/dpi.jpg");
      }
    });
    await EducationService.getEducations(id).then(({ data }) => {
      context.commit(SET_EDUCATIONS, data);
    });
    await ExperienceService.getExperiences(id).then(({ data }) => {
      context.commit(SET_EXPERIENCES, data);
    });
    await SkillService.getSkills(id).then(({ data }) => {
      context.commit(SET_SKILLS, data);
    });
  },
  async [FETCH_APPLICATION_INFO](context) {
    await ProfileService.getProfile(context.getters.getCurrentUser.id).then(
      ({ data }) => {
        context.commit(SET_COMMENT_ADMIN, data.comment_from_administrator);
        context.commit(SET_AUTH_SECOND, data);
        return data;
      }
    );
  }
};
