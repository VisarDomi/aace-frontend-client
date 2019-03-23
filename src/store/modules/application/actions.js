import { ApiService } from "@/common/api.service";
import {
  MediaService,
  ProfileService,
  EducationService,
  ExperienceService,
  SkillService
} from "@/common/api.service";
import {
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
import { START_UPLOAD, STOP_UPLOAD } from "../../mutations.type";

export const actions = {
  //---------------Medias--------------
  async [SEND_PROFILE_MEDIAS](context, payload) {
    const { userId, formDataProfile } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postProfileMedia(userId, formDataProfile)
      .then(res => {
        for (let media of res.data) {
          console.log("media profile res", media);
        }
        if (res.status == 200) {
          console.log("success media profile");
        }
      })
      .catch(err => console.log(err));
  },
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { userId, educationId, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      userId,
      educationId,
      formDataEducation
    )
      .then(res => {
        for (let media of res.data) {
          console.log("media education res", media);
        }
        if (res.status == 200) {
          console.log("success media education");
        }
      })
      .catch(err => console.log(err));
  },
  async [SEND_EXPERIENCE_MEDIAS](context, payload) {
    const { userId, experienceId, formDataExperience } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postExperienceMedia(
      userId,
      experienceId,
      formDataExperience
    )
      .then(res => {
        for (let media of res.data) {
          console.log("media experience res", media);
        }
        if (res.status == 200) {
          console.log("success media experience");
        }
      })
      .catch(err => console.log(err));
  },
  async [SEND_SKILL_MEDIAS](context, payload) {
    const { userId, skillId, formDataSkill } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postSkillMedia(userId, skillId, formDataSkill)
      .then(res => {
        for (let media of res.data) {
          console.log("media skill res", media);
        }
        if (res.status == 200) {
          console.log("success media skill");
        }
      })
      .catch(err => console.log(err));
  },
  //------------------------------
  async [UPDATE_PROFILE](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const profile = context.getters.getAppProfile;
    let copyProfile = { ...profile };
    delete copyProfile.files;
    await ProfileService.putProfile(userId, copyProfile)
      .then(res => {
        console.log("profile res", res);
        if (profile.files.length) {
          let formDataProfile = new FormData();
          for (let file of profile.files) {
            formDataProfile.append("file", file);
          }
          let payload = { userId, formDataProfile };
          context.dispatch(SEND_PROFILE_MEDIAS, payload);
        }
      })
      .then(() => {
        console.log("on second then of profile");
      });
  },
  async [SEND_EDUCATION](context, payload) {
    const { userId, education } = payload;
    let copyEducation = { ...education };
    delete copyEducation.files;
    delete copyEducation.educationId;
    await EducationService.postEducation(userId, copyEducation)
      .then(res => {
        if (education.files.length) {
          let educationId = res.data.id;
          let formDataEducation = new FormData();
          for (let file of education.files) {
            formDataEducation.append("file", file);
          }
          let payload = { userId, educationId, formDataEducation };
          context.dispatch(SEND_EDUCATION_MEDIAS, payload);
        }
      })
      .then(() => {
        console.log("on second then of education");
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
  async [SEND_EXPERIENCE](context, payload) {
    const { userId, experience } = payload;
    let copyExperience = { ...experience };
    delete copyExperience.files;
    delete copyExperience.experienceId;
    await ExperienceService.postExperience(userId, copyExperience)
      .then(res => {
        if (experience.files.length) {
          let experienceId = res.data.id;
          let formDataExperience = new FormData();
          for (let file of experience.files) {
            formDataExperience.append("file", file);
          }
          let payload = { userId, experienceId, formDataExperience };
          context.dispatch(SEND_EXPERIENCE_MEDIAS, payload);
        }
      })
      .then(() => {
        console.log("on second then of experience");
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
  async [SEND_SKILL](context, payload) {
    const { userId, skill } = payload;
    let copySkill = { ...skill };
    delete copySkill.files;
    delete copySkill.skillId;
    await SkillService.postSkill(userId, copySkill)
      .then(res => {
        if (skill.files.length) {
          let skillId = res.data.id;
          let formDataSkill = new FormData();
          for (let file of skill.files) {
            formDataSkill.append("file", file);
          }
          let payload = { userId, skillId, formDataSkill };
          context.dispatch(SEND_SKILL_MEDIAS, payload);
        }
      })
      .then(() => {
        console.log("on second then of skill");
      });
  },
  async [SEND_SKILLS](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const skills = context.getters.getAppSkills;
    for (let skill of skills) {
      let payload = { userId, skill };
      await context.dispatch(SEND_SKILL, payload);
    }
  },
  async [SEND_APPLICATION](context, payload) {
    const { self } = { payload };
    let t0 = performance.now();
    // Promise.all([
    //   context.dispatch(UPDATE_PROFILE),
    //   context.dispatch(SEND_EDUCATIONS),
    //   context.dispatch(SEND_EXPERIENCES),
    //   context.dispatch(SEND_SKILLS)
    // ]).then(([res1, res2, res3, res4]) => {
    //   console.log("reses are", res1, res2, res3, res4);
    //   if (
    //     res1.status == 200 &&
    //     res2.status == 200 &&
    //     res3.status == 200 &&
    //     res4.status == 200
    //   ) {
    //     console.log(`successfully,`, res1, res2, res3, res4);
    //     context.commit(STOP_UPLOAD);
    //     self.$router.push({ name: "SuccessApplication" });
    //   }
    //   let t1 = performance.now();
    //   console.log("Call to Promise.all took " + (t1 - t0) + " milliseconds.");
    // });
    context.commit(START_UPLOAD);
    await context.dispatch(UPDATE_PROFILE).then(res => {
      if (res.status == 200) {
        context.dispatch(SEND_EDUCATIONS).then(res => {
          if (res.status == 200) {
            context.dispatch(SEND_EXPERIENCES).then(res => {
              if (res.status == 200) {
                context.dispatch(SEND_SKILLS).then(res => {
                  if (res.status == 200) {
                    context.commit(STOP_UPLOAD);
                    self.$router.push({ name: "SuccessApplication" });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
};
