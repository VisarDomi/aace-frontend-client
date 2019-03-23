import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  UPDATE_SKILL
} from "../../mutations.type";

export const mutations = {
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
      if (refsSkill.id == skillId) {
        files = refsSkill.files;
      }
    }
    state.appSkills[foundIndex].files = files;
  },
  [UPDATE_SKILL](state, payload) {
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == payload.skillId
    );
    delete payload.skillId;
    Object.assign(state.appSkills[foundIndex], payload);
  }
};
