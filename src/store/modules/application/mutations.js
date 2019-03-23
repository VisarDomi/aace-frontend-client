import {
  START_UPLOAD,
  STOP_UPLOAD,
  SET_PROFILE_FILES,
  SET_APP_PROFILE,
  ADD_EDUCATION,
  REMOVE_EDUCATION,
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

export const mutations = {
  [START_UPLOAD](state) {
    state.isUploading = true;
  },
  [STOP_UPLOAD](state) {
    state.isUploading = false;
  },
  [SET_PROFILE_FILES](state, { self }) {
    console.log("self.$refs ", self.$refs);
    state.appProfile.files = self.$refs.profile.files;
  },
  [SET_APP_PROFILE](state, payload) {
    Object.assign(state.appProfile, payload);
  },
  [ADD_EDUCATION](state) {
    const education = {
      educationId: state.educationId,
      files: [],
      education_type: "",
      degree: "",
      field_of_study: "",
      school: "",
      from_date: "",
      to_date: "",
      description: ""
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
  [SET_EDUCATION_FILES](state, { self, educationId }) {
    console.log("self.$refs ", self.$refs);
    let foundIndex = state.appEducations.findIndex(
      education => education.educationId == educationId
    );
    let files = [];
    for (let refsEducation of self.$refs.educations) {
      if (refsEducation.id == educationId) {
        files = refsEducation.files;
      }
    }
    state.appEducations[foundIndex].files = files;
  },
  [UPDATE_EDUCATION](state, payload) {
    let foundIndex = state.appEducations.findIndex(
      education => education.educationId == payload.educationId
    );
    delete payload.educationId;
    Object.assign(state.appEducations[foundIndex], payload);
  },
  [ADD_EXPERIENCE](state) {
    const experience = {
      experienceId: state.experienceId,
      files: [],
      title: "",
      employer: "",
      company: "",
      location: "",
      from_date: "",
      to_date: "",
      is_currently_work_here: "",
      description: ""
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
  [SET_EXPERIENCE_FILES](state, { self, experienceId }) {
    let foundIndex = state.appExperiences.findIndex(
      experience => experience.experienceId == experienceId
    );
    let files = [];
    for (let refsExperience of self.$refs.experiences) {
      if (refsExperience.id == experienceId) {
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
      skillId: state.skillId,
      files: [],
      releaser: "",
      name: "",
      from_date: "",
      to_date: "",
      description: ""
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
