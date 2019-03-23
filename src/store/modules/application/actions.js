import { ApiService } from "@/common/api.service";
import { MediaService, SkillService } from "@/common/api.service";
import {
  SEND_EDUCATION_MEDIAS,
  SEND_EXPERIENCE_MEDIAS,
  SEND_SKILL_MEDIAS,
  SEND_EDUCATION,
  SEND_EXPERIENCE,
  SEND_SKILL,
  SEND_EDUCATIONS,
  SEND_EXPERIENCES,
  SEND_SKILLS
} from "../../actions.type";

export const actions = {
  //---------------Medias--------------
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postEducationMedia(
      user_id,
      education_id,
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
    const { user_id, experience_id, formDataExperience } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postExperienceMedia(
      user_id,
      experience_id,
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
        console.log("on second then");
      });
  },
  [SEND_SKILLS](context) {
    const { id: userId } = context.getters.getCurrentUser;
    const skills = context.getters.getAppSkills;
    for (let skill of skills) {
      let payload = { userId, skill };
      context.dispatch(SEND_SKILL, payload);
    }
  }
};
