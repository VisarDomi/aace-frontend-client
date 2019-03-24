import { ApiService } from "@/common/api.service";
import {
  MediaService,
  ProfileService,
  EducationService,
  ExperienceService,
  SkillService
} from "@/common/api.service";
import {
  GET_PROFILE,
  SEND_PROFILE_MEDIAS,
  SEND_EDUCATION_MEDIAS,
  SEND_EXPERIENCE_MEDIAS,
  SEND_SKILL_MEDIAS,
  UPDATE_PROFILE,
  SEND_EDUCATION,
  SEND_EXPERIENCE,
  SEND_SKILL,
  SEND_EDUCATIONS,
  SEND_EXPERIENCES,
  SEND_SKILLS,
  SEND_APPLICATION
} from "../../actions.type";
import {
  START_UPLOAD,
  STOP_UPLOAD,
  SET_APP_PROFILE
} from "../../mutations.type";

export const actions = {
  async [GET_PROFILE](context, payload) {
    const userId = context.getters.getCurrentUser.id;
    const email = context.getters.getCurrentUser.email;
    const user_data = {
      first_name: "Test",
      last_name: `Numer${userId}`,
      summary: "Pershkrim koti",
      country: "Kukes",
      phone: "0135345325",
      address: "Rruga koti",
      birthday: "1990-12-31",
      website: "skam",
      email: email,
      profession: "Inxhinier Ndertimi",
      sex: "Mashkull"
    };
    payload.vm.user_data = user_data;
    context.commit(SET_APP_PROFILE, user_data);
    await ProfileService.getProfile(userId).then(res => {
      if (res.status == 200) {
        console.log("success GET_PROFILE", res);
      }
    });
  },
  async [SEND_PROFILE_MEDIAS](context, payload) {
    const { userId, formDataProfile } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postProfileMedia(userId, formDataProfile).then(res => {
      if (res.status == 200) {
        console.log("success SEND_PROFILE_MEDIAS");
      }
    });
  },
  async [UPDATE_PROFILE](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const profile = context.getters.getAppProfile;
    let copyProfile = { ...profile };
    delete copyProfile.files;
    await ProfileService.putProfile(userId, copyProfile).then(res => {
      if (res.status == 200) {
        console.log("success UPDATE_PROFILE", res);
        if (profile.files.length) {
          let formDataProfile = new FormData();
          for (let file of profile.files) {
            formDataProfile.append("file", file);
          }
          let payload = { userId, formDataProfile };
          context.dispatch(SEND_PROFILE_MEDIAS, payload);
        }
      }
    });
  },
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { userId, educationId, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      userId,
      educationId,
      formDataEducation
    ).then(res => {
      if (res.status == 200) {
        console.log("success SEND_EDUCATION_MEDIAS");
      }
    });
  },
  async [SEND_EDUCATION](context, payload) {
    const { userId, education } = payload;
    let copyEducation = { ...education };
    delete copyEducation.files;
    delete copyEducation.educationId;
    await EducationService.postEducation(userId, copyEducation).then(res => {
      if (res.status == 200) {
        console.log("success SEND_EDUCATION", res);
        if (education.files.length) {
          let educationId = res.data.id;
          let formDataEducation = new FormData();
          for (let file of education.files) {
            formDataEducation.append("file", file);
          }
          let payload = { userId, educationId, formDataEducation };
          context.dispatch(SEND_EDUCATION_MEDIAS, payload);
        }
      }
    });
  },
  async [SEND_EDUCATIONS](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const educations = context.getters.getAppEducations;
    for (let education of educations) {
      let payload = { userId, education };
      await context.dispatch(SEND_EDUCATION, payload);
    }
  },
  async [SEND_EXPERIENCE_MEDIAS](context, payload) {
    const { userId, experienceId, formDataExperience } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postExperienceMedia(
      userId,
      experienceId,
      formDataExperience
    ).then(res => {
      if (res.status == 200) {
        console.log("success SEND_EXPERIENCE_MEDIAS");
      }
    });
  },
  async [SEND_EXPERIENCE](context, payload) {
    const { userId, experience } = payload;
    let copyExperience = { ...experience };
    delete copyExperience.files;
    delete copyExperience.experienceId;
    await ExperienceService.postExperience(userId, copyExperience).then(res => {
      if (res.status == 200) {
        console.log("success SEND_EXPERIENCE", res);
        if (experience.files.length) {
          let experienceId = res.data.id;
          let formDataExperience = new FormData();
          for (let file of experience.files) {
            formDataExperience.append("file", file);
          }
          let payload = { userId, experienceId, formDataExperience };
          context.dispatch(SEND_EXPERIENCE_MEDIAS, payload);
        }
      }
    });
  },
  async [SEND_EXPERIENCES](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const experiences = context.getters.getAppExperiences;
    for (let experience of experiences) {
      let payload = { userId, experience };
      await context.dispatch(SEND_EXPERIENCE, payload);
    }
  },
  async [SEND_SKILL_MEDIAS](context, payload) {
    const { userId, skillId, formDataSkill } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postSkillMedia(userId, skillId, formDataSkill).then(
      res => {
        if (res.status == 200) {
          console.log("success SEND_SKILL_MEDIAS");
        }
      }
    );
  },
  async [SEND_SKILL](context, payload) {
    console.log("SEND_SKILL");
    const { userId, skill } = payload;
    let copySkill = { ...skill };
    delete copySkill.files;
    delete copySkill.skillId;
    await SkillService.postSkill(userId, copySkill).then(res => {
      if (res.status == 200) {
        console.log("success SEND_SKILL", res);
        if (skill.files.length) {
          let skillId = res.data.id;
          let formDataSkill = new FormData();
          for (let file of skill.files) {
            formDataSkill.append("file", file);
          }
          let payload = { userId, skillId, formDataSkill };
          console.log("SEND_SKILL then");
          context.dispatch(SEND_SKILL_MEDIAS, payload);
        }
      }
    });
  },
  async [SEND_SKILLS](context) {
    console.log("SEND_SKILLS");
    const { id: userId } = context.getters.getCurrentUser;
    const skills = context.getters.getAppSkills;
    for (let skill of skills) {
      let payload = { userId, skill };
      console.log("SEND_SKILLS for loop");
      await context.dispatch(SEND_SKILL, payload);
    }
  },
  async [SEND_APPLICATION](context, payload) {
    console.log("SEND_APPLICATION start");
    let t0 = performance.now();
    context.commit(START_UPLOAD);
    await context.dispatch(UPDATE_PROFILE);
    await context.dispatch(SEND_EDUCATIONS);
    await context.dispatch(SEND_EXPERIENCES);
    await context.dispatch(SEND_SKILLS);
    context.commit(STOP_UPLOAD);
    let t1 = performance.now();
    console.log("SEND_APPLICATION took " + (t1 - t0) + " milliseconds");
    console.log(
      "\nThe order of logs should be: \n",
      "SEND_APPLICATION start\n",
      "UPDATE_PROFILE -> SEND_PROFILE_MEDIAS\n",
      "a repeat of SEND_EDUCATION -> SEND_EDUCATION_MEDIAS\n",
      "a repeat of SEND_EXPERIENCE -> SEND_EXPERIENCE_MEDIAS\n",
      "a repeat of SEND_SKILL -> SEND_SKILL_MEDIAS\n",
      "SEND_APPLICATION took some milliseconds\n"
    );
    // await context.dispatch(UPDATE_PROFILE).then(() => {
    //   context.dispatch(SEND_EDUCATIONS).then(() => {
    //     context.dispatch(SEND_EXPERIENCES).then(() => {
    //       context.dispatch(SEND_SKILLS).then(() => {
    //         context.commit(STOP_UPLOAD);
    //         let t1 = performance.now();
    //         console.log(
    //           "Call to Promise.all took " + (t1 - t0) + " milliseconds."
    //         );
    //         // vm.$router.push({ name: "SuccessApplication" });
    //       });
    //     });
    //   });
    // });
    //   const success = [];
    //   Promise.all([
    //     await context
    //       .dispatch(UPDATE_PROFILE)
    //       .then(() => success.push("updated_profile")),
    //     await context
    //       .dispatch(SEND_EDUCATIONS)
    //       .then(() => success.push("sent_educations")),
    //     await context
    //       .dispatch(SEND_EXPERIENCES)
    //       .then(() => success.push("sent_experiences")),
    //     await context
    //       .dispatch(SEND_SKILLS)
    //       .then(() => success.push("sent_skills"))
    //   ]).then(([res1, res2, res3, res4]) => {
    //     console.log("success is", success);
    //     console.log("reses are", res1, res2, res3, res4);
    //     context.commit(STOP_UPLOAD);
    //     let t1 = performance.now();
    //     console.log("Call to Promise.all took " + (t1 - t0) + " milliseconds.");
    //     console.log("payload.vm action", payload.vm);
    //     // vm.$router.push({ name: "SuccessApplication" });
    //   });
  }
};
