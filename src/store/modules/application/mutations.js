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
    state.totalSkills = state.skills.push(newSkill);
    state.SkillId += 1;
  },
  [REMOVE_SKILL](state, skillId) {
    state.skills = state.skills.filter(skill => skill.skillId !== skillId);
    state.totalSkills -= 1;
  },
  [SET_SKILL_FILES](state, { self, skillId }) {
    console.log("self.$refs.skills is", self.$refs.skills);
    for (let skill of self.$refs.skills) {
      console.log("skill.files of self.$refs.skills", skill.files);
      let filteredSkill = state.skills.filter(
        skill => skill.skillId == skillId
      )[0];
      console.log("filteredSkill", filteredSkill);
      filteredSkill.files = skill.files;
      for (let file of filteredSkill.files) {
        console.log("file", file);
      }
    }
  },
  [SET_UPLOADING_STATUS](state) {
    state.isUploading = true;
  },
  [SET_FINISHED_STATUS](state) {
    state.isUploading = false;
  }
};
