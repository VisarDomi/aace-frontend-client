import {
  PURGE_APPLICATION,
  TEMP_PROFESSION,
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
  [PURGE_APPLICATION](state) {
    state.appProfile = {
      first_name: "",
      last_name: "",
      profession: "",
      sex: "",
      summary: "",
      country: "",
      phone: "",
      address: "",
      birthday: "",
      website: "",
      email: "",
      files: []
    };
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
  [TEMP_PROFESSION](state, { enabled }) {
    state.professionDropdown.isProfessionInputEnabled = enabled
  },
  [SET_PROFILE_FILES](state, { vm }) {
    state.appProfile.files = vm.$refs.profile.files;
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
    delete payload.educationId;
    Object.assign(state.appEducations[foundIndex], payload);
  },
  [ADD_EXPERIENCE](state) {
    const experience = {
      experienceId: state.experienceId,
      files: [],
      title: "",
      employer: "",
      location: "",
      from_date: "",
      to_date: "",
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
    let foundIndex = state.appSkills.findIndex(
      skill => skill.skillId == payload.skillId
    );
    delete payload.skillId;
    Object.assign(state.appSkills[foundIndex], payload);
  }
};
