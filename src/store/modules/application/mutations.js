import {
  PURGE_APPLICATION,
  TOGGLE_PROFESSION_INPUT,
  SET_PROFILE_FILES,
  SET_APP_PROFILE,
  ADD_EDUCATION,
  REMOVE_EDUCATION,
  TOGGLE_EDUCATION_MIDDLE_DEGREE_INPUT,
  TOGGLE_EDUCATION_HIGH_DEGREE_INPUT,
  TOGGLE_EDUCATION_HIGH_FIELD_OF_STUDY_INPUT,
  SET_EDUCATION_FILES,
  UPDATE_EDUCATION,
  ADD_EXPERIENCE,
  REMOVE_EXPERIENCE,
  SET_EXPERIENCE_FILES,
  UPDATE_EXPERIENCE,
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  UPDATE_SKILL
} from "../../mutations.type";
import {
  baseProfile,
  baseEducation,
  baseExperience,
  baseSkill
} from "./common";

export const mutations = {
  [PURGE_APPLICATION](state) {
    state.appProfile = { ...baseProfile };
    state.appEducations = [];
    state.educationId = 0;
    state.totalEducations = 0;
    state.appExperiences = [];
    state.experienceId = 0;
    state.totalExperiences = 0;
    state.appSkills = [];
    state.skillId = 0;
    state.totalSkills = 0;
    // state.isUploading = false;
  },
  [TOGGLE_PROFESSION_INPUT](state, { enabled }) {
    state.appProfile.professionDropdown.isProfessionInputEnabled = enabled;
  },
  [SET_PROFILE_FILES](state, { vm }) {
    state.appProfile.files = vm.$refs.profile.files;
  },
  [SET_APP_PROFILE](state, payload) {
    Object.assign(state.appProfile, payload);
  },
  [ADD_EDUCATION](state) {
    const education = {
      ...baseEducation,
      educationId: state.educationId
    };
    state.totalEducations = state.appEducations.push(education);
    state.educationId += 1;
  },
  [REMOVE_EDUCATION](state, educationId) {
    state.appEducations = state.appEducations.filter(
      education => education.educationId != educationId
    );
    state.totalEducations -= 1;
  },
  // [TOGGLE_EDUCATION_MIDDLE_DEGREE_INPUT](state, payload) {
  //   let foundIndex = state.appEducations.findIndex(
  //     education => education.educationId == payload.educationId
  //   );
  //   state.appEducations[
  //     foundIndex
  //   ].educationMiddleDegreeDropdown.isEducationMiddleDegreeInputEnabled =
  //     payload.enabled;
  // },
  // [TOGGLE_EDUCATION_HIGH_DEGREE_INPUT](state, payload) {
  //   let foundIndex = state.appEducations.findIndex(
  //     education => education.educationId == payload.educationId
  //   );
  //   state.appEducations[
  //     foundIndex
  //   ].educationHighDegreeDropdown.isEducationHighDegreeInputEnabled =
  //     payload.enabled;
  // },
  // [TOGGLE_EDUCATION_HIGH_FIELD_OF_STUDY_INPUT](state, payload) {
  //   let foundIndex = state.appEducations.findIndex(
  //     education => education.educationId == payload.educationId
  //   );
  //   state.appEducations[
  //     foundIndex
  //   ].educationHighFieldOfStudyDropdown.isEducationHighFieldOfStudyInputEnabled =
  //     payload.enabled;
  // },
  [SET_EDUCATION_FILES](state, { vm, educationId }) {
    let foundIndex = state.appEducations.findIndex(
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
    state.appEducations[foundIndex].files = files;
  },
  [UPDATE_EDUCATION](state, payload) {
    let foundIndex = state.appEducations.findIndex(
      education => education.educationId == payload.educationId
    );
    let education = state.appEducations[foundIndex];
    const { education_type } = payload;
    if (education_type) {
      // maybe this is an artifact that needs to be deleted
      // reset everything
      delete baseEducation.education_type;
      Object.assign(education, baseEducation);
      console.log("education is", education);
      console.log("state is", state);
    }
    delete payload.educationId;
    delete payload.field;
    Object.assign(education, payload);
  },
  [ADD_EXPERIENCE](state) {
    const experience = {
      ...baseExperience,
      experienceId: state.experienceId
    };
    state.totalExperiences = state.appExperiences.push(experience);
    state.experienceId += 1;
  },
  [REMOVE_EXPERIENCE](state, experienceId) {
    state.appExperiences = state.appExperiences.filter(
      experience => experience.experienceId != experienceId
    );
    state.totalExperiences -= 1;
  },
  [SET_EXPERIENCE_FILES](state, { vm, experienceId }) {
    let foundIndex = state.appExperiences.findIndex(
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
    state.appExperiences[foundIndex].files = files;
  },
  [UPDATE_EXPERIENCE](state, payload) {
    let foundIndex = state.appExperiences.findIndex(
      experience => experience.experienceId == payload.experienceId
    );
    delete payload.experienceId;
    Object.assign(state.appExperiences[foundIndex], payload);
  },
  [ADD_SKILL](state) {
    const skill = {
      ...baseSkill,
      skillId: state.skillId
    };
    state.totalSkills = state.appSkills.push(skill);
    state.skillId += 1;
  },
  [REMOVE_SKILL](state, skillId) {
    state.appSkills = state.appSkills.filter(skill => skill.skillId != skillId);
    state.totalSkills -= 1;
  },
  [SET_SKILL_FILES](state, { vm, skillId }) {
    let foundIndex = state.appSkills.findIndex(
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
    state.appSkills[foundIndex].files = files;
  },
  [UPDATE_SKILL](state, payload) {
    console.log("1payload is", payload);
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == payload.skillId
    );
    let skill = state.appSkills[foundIndex];

    console.log("1skill is", skill);
    delete payload.skillId;
    console.log("2skill is", skill);
    console.log("2payload is", payload);
    Object.assign(skill, payload);
  }
};
