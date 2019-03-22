import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  SET_UPLOADING_STATUS,
  SET_FINISHED_STATUS
} from "../../mutations.type";

export const mutations = {
  [ADD_SKILL](state) {
    const newSkill = {
      skillId: state.SkillId,
      releaser: "",
      name: "",
      from_date: "",
      to_date: "",
      description: "",
      files: []
    };
    state.totalSkills = state.appSkills.push(newSkill);
    state.SkillId += 1;
  },
  [REMOVE_SKILL](state, skillId) {
    state.appSkills = state.appSkills.filter(skill => skill.skillId != skillId);
    state.totalSkills -= 1;
  },
  [SET_SKILL_FILES](state, { self, skillId }) {
    console.log("self.$refs.skills is", self.$refs.skills);
    for (let skill of self.$refs.skills) {
      console.log("skill.files of self.$refs.skills", skill.files);
      let filteredSkill = state.appSkills.filter(
        skill => skill.skillId == skillId
      )[0];
      console.log("filteredSkill", filteredSkill);
      filteredSkill.files = skill.files;
      for (let file of filteredSkill.files) {
        console.log("file", file);
      }
    }
    console.log("state.appSkills", state.appSkills);
  },
  [SET_UPLOADING_STATUS](state) {
    state.isUploading = true;
  },
  [SET_FINISHED_STATUS](state) {
    state.isUploading = false;
  }
};
