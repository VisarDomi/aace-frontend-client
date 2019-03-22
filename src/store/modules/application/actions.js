import { ApiService } from "@/common/api.service";
import { MediaService } from "@/common/api.service";
import { SEND_EDUCATION_MEDIAS } from "../../actions.type";
import {
  SET_UPLOADING_STATUS,
  SET_FINISHED_STATUS
} from "../../mutations.type";

export const actions = {
  async [SEND_EDUCATION_MEDIAS](context, payload) {
    const { user_id, education_id, formDataEducation } = payload;
    ApiService.setHeaderMultipart();
    context.commit(SET_UPLOADING_STATUS);
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
          context.commit(SET_FINISHED_STATUS);
        }
      })
      .catch(err => console.log(err));
  }
};
