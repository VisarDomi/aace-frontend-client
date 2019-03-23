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
    const { user_id, skill_id, formDataSkill } = payload;
    ApiService.setHeaderMultipart();
    await MediaService.postSkillMedia(user_id, skill_id, formDataSkill)
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
    const { user_id, skill } = payload;
    await SkillService.postSkill(user_id, skill)
      .then(res => {
        console.log("res of skill is :", res);
      })
      .then(res => {
        let skillId = res.data.id;
        let formDataSkill = new FormData();
        if (skill.files.length) {
          for (let j = 0; j < skill.files.length; j++) {
            formDataSkill.append("file", skill.files[j]);
          }
          let payload = { user_id, skillId, formDataSkill };
          this.$store.dispatch(SEND_SKILL_MEDIAS, payload);
        }
      });
  },
  [SEND_SKILLS](context) {
    const { id: user_id } = context.getters.getCurrentUser;
    console.log("user_id is ", user_id);
    const skills = context.getters.getAppSkills;
    for (let skill of skills) {
      console.log("skill is:", skill);
    }
  }
};
