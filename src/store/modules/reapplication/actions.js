import { ApiService } from "@/common/api.service";
import { yearFormat } from "@/common/date.filter";
import {
  MediaService,
  ProfileService,
  EducationService,
  ExperienceService,
  SkillService
} from "@/common/api.service";
import {
  RE_UPLOAD,
  RE_GET_PROFILE,
  RE_GET_EDUCATIONS,
  RE_GET_EXPERIENCES,
  RE_GET_SKILLS,
  RE_SEND_PROFILE_MEDIAS,
  RE_SEND_EDUCATION_MEDIAS,
  RE_SEND_EXPERIENCE_MEDIAS,
  RE_SEND_SKILL_MEDIAS,
  RE_UPDATE_PROFILE,
  RE_SEND_EDUCATION,
  RE_SEND_EXPERIENCE,
  RE_SEND_SKILL,
  RE_SEND_EDUCATIONS,
  RE_SEND_EXPERIENCES,
  RE_SEND_SKILLS,
  RE_SEND_APPLICATION
} from "../../actions.type";
import {
  START_LOADING,
  STOP_LOADING,
  RE_SET_APP_PROFILE,
  RE_SET_APP_EDUCATIONS,
  RE_SET_APP_EXPERIENCES,
  RE_SET_APP_SKILLS
} from "../../mutations.type";

export const actions = {
  async [RE_GET_PROFILE](context, payload) {
    console.log("RE_GET_PROFILE");
    const userId = context.getters.getCurrentUser.id;

    await ProfileService.getProfile(userId).then(res => {
      if (res.status == 200) {
        console.log("success RE_GET_PROFILE", res.data);
        let server_user_data = res.data;

        // the following is because there is no validation yet
        if (!server_user_data.address) {
          server_user_data.address = "";
        }
        if (!server_user_data.country) {
          server_user_data.country = "";
        }
        if (!server_user_data.first_name) {
          server_user_data.first_name = "";
        }
        if (
          !server_user_data.last_name ||
          server_user_data.last_name == "no_name"
        ) {
          server_user_data.last_name = "";
        }
        if (!server_user_data.phone) {
          server_user_data.phone = "";
        }
        if (!server_user_data.profession) {
          server_user_data.profession = "";
        }
        if (!server_user_data.sex) {
          server_user_data.sex = "";
        }
        if (!server_user_data.summary) {
          server_user_data.summary = "";
        }
        if (!server_user_data.website) {
          server_user_data.website = "";
        }

        console.log("server_user_data is", server_user_data);
        delete server_user_data.application_date;
        delete server_user_data.application_status;
        delete server_user_data.id;
        delete server_user_data.payment_status;
        delete server_user_data.reapplication_date;
        delete server_user_data.resend_payment_date;
        delete server_user_data.send_payment_date;
        delete server_user_data.years_of_experience;
        delete server_user_data.comment_from_administrator;
        server_user_data.birthday = yearFormat(server_user_data.birthday);
        payload.vm.user_data = server_user_data;
        context.commit(RE_SET_APP_PROFILE, server_user_data);
      }
    });
  },
  async [RE_GET_EDUCATIONS](context, payload) {
    // payload may be used for validation
    console.log("RE_GET_EDUCATIONS");
    const userId = context.getters.getCurrentUser.id;

    await EducationService.getEducations(userId).then(res => {
      if (res.status == 200) {
        console.log("success RE_GET_EDUCATIONS", res.data);
        let educations = res.data;
        context.commit(RE_SET_APP_EDUCATIONS, educations);
      }
    });
  },
  async [RE_GET_EXPERIENCES](context, payload) {
    // payload may be used for validation
    console.log("RE_GET_EXPERIENCES");
    const userId = context.getters.getCurrentUser.id;

    await ExperienceService.getExperiences(userId).then(res => {
      if (res.status == 200) {
        console.log("success RE_GET_EXPERIENCES", res.data);
        let experiences = res.data;
        context.commit(RE_SET_APP_EXPERIENCES, experiences);
      }
    });
  },
  async [RE_GET_SKILLS](context, payload) {
    // payload may be used for validation
    console.log("RE_GET_SKILLS");
    const userId = context.getters.getCurrentUser.id;

    await SkillService.getSkills(userId).then(res => {
      if (res.status == 200) {
        console.log("success RE_GET_SKILLS", res.data);
        let skills = res.data;
        context.commit(RE_SET_APP_SKILLS, skills);
      }
    });
  },

  async [RE_SEND_PROFILE_MEDIAS](context, payload) {
    console.log("RE_SEND_PROFILE_MEDIAS");
    const { userId, formDataProfile } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postProfileMedia(userId, formDataProfile).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_PROFILE_MEDIAS");
      }
    });
  },
  async [RE_UPDATE_PROFILE](context) {
    console.log("RE_UPDATE_PROFILE");
    const userId = context.getters.getCurrentUser.id;
    const profile = context.getters.getReappProfile;
    let copyProfile = { ...profile };
    delete copyProfile.files;
    delete copyProfile.sexOptions;
    delete copyProfile.professionDropdown;
    await ProfileService.putProfile(userId, copyProfile).then(res => {
      if (res.status == 200) {
        console.log("success RE_UPDATE_PROFILE", res);
      }
    });
    console.log("profile.files.length", profile.files.length);
    if (profile.files.length) {
      let formDataProfile = new FormData();
      for (let file of profile.files) {
        formDataProfile.append("file", file);
      }
      let payload = { userId, formDataProfile };
      await context.dispatch(RE_SEND_PROFILE_MEDIAS, payload);
    }
  },
  async [RE_SEND_EDUCATION_MEDIAS](context, payload) {
    console.log("RE_SEND_EDUCATION_MEDIAS");
    const { userId, educationId, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      userId,
      educationId,
      formDataEducation
    ).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_EDUCATION_MEDIAS");
      }
    });
  },
  async [RE_SEND_EDUCATION](context, payload) {
    console.log("RE_SEND_EDUCATION");
    const { userId, education } = payload;
    let copyEducation = { ...education };

    delete copyEducation.files;
    delete copyEducation.educationId;
    delete copyEducation.education_medias;
    delete copyEducation.id;
    delete copyEducation.timestamp;
    delete copyEducation.user_id;
    console.log("copyEducation", copyEducation);
    let educationId = education.id;
    await EducationService.putEducation(
      userId,
      copyEducation,
      educationId
    ).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_EDUCATION", res);
      }
    });
    if (education.files.length) {
      let formDataEducation = new FormData();
      for (let file of education.files) {
        formDataEducation.append("file", file);
      }
      let payload = { userId, educationId, formDataEducation };
      await context.dispatch(RE_SEND_EDUCATION_MEDIAS, payload);
    }
  },
  async [RE_SEND_EDUCATIONS](context) {
    console.log("RE_SEND_EDUCATIONS");
    const userId = context.getters.getCurrentUser.id;
    const educations = context.getters.getReappEducations;
    console.log("educations", educations);
    console.log("educations.length", educations.length);
    if (educations.length) {
      for (let education of educations) {
        let payload = { userId, education };
        await context.dispatch(RE_SEND_EDUCATION, payload);
      }
    }
  },
  async [RE_SEND_EXPERIENCE_MEDIAS](context, payload) {
    const { userId, experienceId, formDataExperience } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postExperienceMedia(
      userId,
      experienceId,
      formDataExperience
    ).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_EXPERIENCE_MEDIAS");
      }
    });
  },
  async [RE_SEND_EXPERIENCE](context, payload) {
    console.log("RE_SEND_EXPERIENCE");
    const { userId, experience } = payload;
    let copyExperience = { ...experience };

    delete copyExperience.files;
    delete copyExperience.experienceId;
    delete copyExperience.experience_medias;
    delete copyExperience.id;
    delete copyExperience.is_currently_work_here;
    delete copyExperience.timestamp;
    delete copyExperience.user_id;
    let experienceId = experience.id;
    await ExperienceService.putExperience(
      userId,
      copyExperience,
      experienceId
    ).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_EXPERIENCE", res);
      }
    });
    if (experience.files.length) {
      let formDataExperience = new FormData();
      for (let file of experience.files) {
        formDataExperience.append("file", file);
      }
      let payload = { userId, experienceId, formDataExperience };
      await context.dispatch(RE_SEND_EXPERIENCE_MEDIAS, payload);
    }
  },
  async [RE_SEND_EXPERIENCES](context) {
    console.log("RE_SEND_EXPERIENCES");
    const userId = context.getters.getCurrentUser.id;
    const experiences = context.getters.getReappExperiences;
    if (experiences.length) {
      for (let experience of experiences) {
        let payload = { userId, experience };
        await context.dispatch(RE_SEND_EXPERIENCE, payload);
      }
    }
  },
  async [RE_SEND_SKILL_MEDIAS](context, payload) {
    console.log("RE_SEND_SKILL_MEDIAS");
    const { userId, skillId, formDataSkill } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postSkillMedia(userId, skillId, formDataSkill).then(
      res => {
        if (res.status == 200) {
          console.log("success RE_SEND_SKILL_MEDIAS");
        }
      }
    );
  },
  async [RE_SEND_SKILL](context, payload) {
    console.log("RE_SEND_SKILL");
    const { userId, skill } = payload;
    let copySkill = { ...skill };

    delete copySkill.files;
    delete copySkill.skillId;
    delete copySkill.id;
    delete copySkill.skill_medias;
    delete copySkill.timestamp;
    delete copySkill.user_id;
    let skillId = skill.id;
    await SkillService.putSkill(userId, copySkill, skillId).then(res => {
      if (res.status == 200) {
        console.log("success RE_SEND_SKILL", res);
      }
    });
    if (skill.files.length) {
      let formDataSkill = new FormData();
      for (let file of skill.files) {
        formDataSkill.append("file", file);
      }
      let payload2 = { userId, skillId, formDataSkill };
      await context.dispatch(RE_SEND_SKILL_MEDIAS, payload2);
    }
  },
  async [RE_SEND_SKILLS](context) {
    console.log("RE_SEND_SKILLS");
    const userId = context.getters.getCurrentUser.id;
    const skills = context.getters.getReappSkills;
    if (skills.length) {
      for (let skill of skills) {
        let payload = { userId, skill };
        await context.dispatch(RE_SEND_SKILL, payload);
      }
    }
  },
  async [RE_SEND_APPLICATION](context) {
    console.log("\n\nRE_SEND_APPLICATION start");
    let t0 = performance.now();
    context.commit(START_LOADING);
    await context.dispatch(RE_UPDATE_PROFILE);
    await context.dispatch(RE_SEND_EDUCATIONS);
    await context.dispatch(RE_SEND_EXPERIENCES);
    await context.dispatch(RE_SEND_SKILLS);
    context.commit(STOP_LOADING);
    let t1 = performance.now();
    console.log("RE_SEND_APPLICATION took " + (t1 - t0) / 1000 + " seconds");
    console.log(
      "\nThe order of logs should be: \n",
      "RE_SEND_APPLICATION start\n",
      "RE_UPDATE_PROFILE -> RE_SEND_PROFILE_MEDIAS\n",
      "a repeat of RE_SEND_EDUCATION -> RE_SEND_EDUCATION_MEDIAS\n",
      "a repeat of RE_SEND_EXPERIENCE -> RE_SEND_EXPERIENCE_MEDIAS\n",
      "a repeat of RE_SEND_SKILL -> RE_SEND_SKILL_MEDIAS\n",
      "RE_SEND_APPLICATION took some seconds\n"
    );
  },
  async [RE_UPLOAD](context, payload) {
    console.log("uploading");
    await context
      .dispatch(RE_SEND_APPLICATION)
      .then(() => {
        console.log("can it be?");
        console.log("payload", payload);
        payload.vm.$router.push({ name: "SuccessApplication" });
        console.log("success!!!!!!!!!!!!!!!");
      })
      .catch(error => {
        console.log("error", error);
        context.commit(STOP_LOADING);
      });
  }
};
