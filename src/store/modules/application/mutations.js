import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  SET_SKILL_NAME
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
    // skillId = 3
    // totalSkills = 2
    console.log("self.$refs.skills is", self.$refs.skills);
    // loop through $refs.skills
    for (let refsSkill of self.$refs.skills) {
      console.log("refsSkill.files of self.$refs.skills", refsSkill.files);
      // put files on appSkill of appSkills
      let foundIndex = state.appSkills.findIndex(
        skill => skill.skillId == skillId
      );
      console.log("foundIndex is :", foundIndex);
      let files = state.appSkills[foundIndex].files;

      console.log("files is :", files);
      files = refsSkill.files;
      console.log("files is :", files);

      // for (let file of files) {
      //   console.log("file", file);
      // }
    }
    console.log("state.appSkills", state.appSkills);
  },
  [SET_SKILL_NAME](state, { name, skillId }) {
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == skillId
    );
    console.log(`foundIndex, ${foundIndex}`);
  }
};
