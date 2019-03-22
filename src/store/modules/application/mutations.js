import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_UPLOADED_SKILL_FILES,
  SET_UPLOADING_STATUS,
  SET_FINISHED_STATUS
} from "../../mutations.type";

export const mutations = {
  [ADD_SKILL](state) {
    const newSkill = {
      id: Math.random() * 1000000,
      releaser: "",
      name: "",
      from_date: "",
      to_date: "",
      description: "",
      files: []
    };
    state.skillInputs.push(newSkill);
  },
  [REMOVE_SKILL](state, skillInputId) {
    state.skillInputs = state.skillInputs.filter(
      skill => skill.id !== skillInputId
    );
  },
  [SET_UPLOADED_SKILL_FILES](state, { skillInputId, index }) {
    // index of skillInput
    let files = [];
    for (let file of this.$refs.skill[index].files) {
      files.push(file);
    }
    // filter the skill by skillInputId, which is the key of v-for
    let skill = state.skillInputs.filter(skill => skill.id === skillInputId)[0];
    skill.files = files;
  },
  [SET_UPLOADING_STATUS](state) {
    state.isUploading = true;
  },
  [SET_FINISHED_STATUS](state) {
    state.isUploading = false;
  }
};
