import {
  RE_TOGGLE_PROFESSION_INPUT,
  RE_SET_PROFILE_FILES,
  RE_SET_APP_PROFILE,
  RE_SET_EDUCATION_FILES,
  RE_UPDATE_EDUCATION,
  RE_SET_EXPERIENCE_FILES,
  RE_UPDATE_EXPERIENCE,
  RE_SET_SKILL_FILES,
  RE_UPDATE_SKILL
} from "../../mutations.type";
import {
  baseProfile,
  baseEducation,
  baseExperience,
  baseSkill
} from "./common";

export const mutations = {
  [RE_TOGGLE_PROFESSION_INPUT](state, { enabled }) {
    state.reappProfile.professionDropdown.isProfessionInputEnabled = enabled;
  },
  [RE_SET_PROFILE_FILES](state, { vm }) {
    state.reappProfile.files = vm.$refs.profile.files;
  },
  [RE_SET_APP_PROFILE](state, payload) {
    console.log("payload is", payload);
    console.log("state.reappProfile is", state.reappProfile);
    Object.assign(state.reappProfile, payload);
  },
  [RE_SET_EDUCATION_FILES](state, { vm, educationId }) {
    let foundIndex = state.reappEducations.findIndex(
      education => education.educationId == educationId
    );
    let files = [];
    for (let refsEducation of vm.$refs.educations) {
      // get number
      let num = refsEducation.id.match(/\d+/)[0];
      if (num == educationId) {
        files = refsEducation.files;
      }
    }
    state.reappEducations[foundIndex].files = files;
  },
  [RE_UPDATE_EDUCATION](state, payload) {
    let foundIndex = state.reappEducations.findIndex(
      education => education.educationId == payload.educationId
    );
    let education = state.reappEducations[foundIndex];
    delete payload.educationId;
    delete payload.field;
    Object.assign(education, payload);
  },
  [RE_SET_EXPERIENCE_FILES](state, { vm, experienceId }) {
    let foundIndex = state.reappExperiences.findIndex(
      experience => experience.experienceId == experienceId
    );
    let files = [];
    for (let refsExperience of vm.$refs.experiences) {
      // get number
      let num = refsExperience.id.match(/\d+/)[0];
      if (num == experienceId) {
        files = refsExperience.files;
      }
    }
    state.reappExperiences[foundIndex].files = files;
  },
  [RE_UPDATE_EXPERIENCE](state, payload) {
    let foundIndex = state.reappExperiences.findIndex(
      experience => experience.experienceId == payload.experienceId
    );
    delete payload.experienceId;
    Object.assign(state.reappExperiences[foundIndex], payload);
  },
  [RE_SET_SKILL_FILES](state, { vm, skillId }) {
    let foundIndex = state.reappSkills.findIndex(
      skill => skill.skillId == skillId
    );
    let files = [];
    for (let refsSkill of vm.$refs.skills) {
      // get number
      let num = refsSkill.id.match(/\d+/)[0];
      if (num == skillId) {
        files = refsSkill.files;
      }
    }
    state.reappSkills[foundIndex].files = files;
  },
  [RE_UPDATE_SKILL](state, payload) {
    let foundIndex = state.reappSkills.findIndex(
      skill => skill.skillId == payload.skillId
    );
    delete payload.skillId;
    Object.assign(state.reappSkills[foundIndex], payload);
  }
};
