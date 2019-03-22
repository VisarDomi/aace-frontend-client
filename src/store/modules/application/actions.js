import { ApiService } from "@/common/api.service";
import { MediaService } from "@/common/api.service";
import {
  SEND_EDUCATION_MEDIAS,
  SEND_EXPERIENCE_MEDIAS,
  SEND_SKILL_MEDIAS
} from "../../actions.type";
import {
  SET_UPLOADING_STATUS,
  SET_FINISHED_STATUS
} from "../../mutations.type";

export const actions = {
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
  }
};
