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
  SET_COMMENT_ADMIN
} from "../../mutations.type";

export const actions = {
  [FETCH_PROFILE](context, payload) {
    const { id } = payload;
    ProfileService.getProfile(id).then(({ data }) => {
      context.commit(SET_PROFILE, data);
      return data;
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
    ProfileService.getProfile(context.getters.getCurrentUser.id).then(
      ({ data }) => {
        context.commit(SET_COMMENT_ADMIN, data.comment_from_administrator);
        return data;
      }
    );
  }
};
