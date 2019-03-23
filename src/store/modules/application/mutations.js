import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  UPDATE_SKILL,
  START_UPLOAD,
  STOP_UPLOAD
} from "../../mutations.type";

export const mutations = {
  [START_UPLOAD](state) {
    state.isUploading = true;
  },
  [STOP_UPLOAD](state) {
    state.isUploading = false;
  },
  [ADD_SKILL](state) {
    const skill = {
      skillId: state.skillId,
      releaser: "",
      name: "",
      from_date: "",
      to_date: "",
      description: "",
      files: []
    };
    state.totalSkills = state.appSkills.push(skill);
    state.skillId += 1;
  },
  [REMOVE_SKILL](state, skillId) {
    state.appSkills = state.appSkills.filter(skill => skill.skillId != skillId);
    state.totalSkills -= 1;
  },
  [SET_SKILL_FILES](state, { self, skillId }) {
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == skillId
    );
    let files = [];
    for (let refsSkill of self.$refs.skills) {
      // check if ref/input id is equal to element id
      // luckily ref id and element id are the same for the same element/input
      if (refsSkill.id == skillId) {
        files = refsSkill.files;
      }
    }
    state.appSkills[foundIndex].files = files;
  },
  [UPDATE_SKILL](state, payload) {
    // find index of skill
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == payload.skillId
    );
    // remove unnecessary key
    delete payload.skillId;
    // assign keys to found skill
    Object.assign(state.appSkills[foundIndex], payload);
  }
};
