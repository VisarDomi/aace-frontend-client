import {
  ProfileService,
  MediaService,
  EducationService,
  ExperienceService,
  SkillService,
  PaymentService
} from "../../services/api";
import {
  FETCH_PROFILE,
  FETCH_APPLICATION_INFO,
  GET_NUMBER_OF_ACCEPTED_USERS
} from "../../actions.type";
import {
  SET_PROFILE,
  SET_PICTURE,
  SET_EDUCATIONS,
  SET_EXPERIENCES,
  SET_SKILLS,
  SET_PAYMENTS,
  SET_COMMENT_ADMIN,
  SET_AUTH_SECOND,
  SET_NUMBER_OF_ACCEPTED_USERS
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
        context.commit(SET_PICTURE, "https://aace.ml/static/dpi.png");
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
  },
  async [GET_NUMBER_OF_ACCEPTED_USERS](context) {
    await ProfileService.getAllUsers().then(res => {
      console.log("res.data is", res.data);
      let allUsers = res.data;
      let numberOfAcceptedUsers = 0;
      for (let user of allUsers) {
        if (user.application_status == "accepted") {
          numberOfAcceptedUsers += 1;
        }
      }
      console.log("numberOfAcceptedUsers", numberOfAcceptedUsers);
      context.commit(SET_NUMBER_OF_ACCEPTED_USERS, numberOfAcceptedUsers);
    });
  }
};
