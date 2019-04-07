export const getters = {
  // getAppSkill: state => skillId => {
  //   return state.appSkills.find(skill => skill.skillId == skillId);
  // }
  // isUploading: state => state.isUploading,
  getAppProfile: state => state.appProfile,
  getAppEducations: state => state.appEducations,
  getAppExperiences: state => state.appExperiences,
  getAppSkills: state => state.appSkills,
  getEducationTypeOptions: state => state.educationTypeOptions,
  getEducationMiddleDegreeDropdown: state => state.educationMiddleDegreeDropdown,
  getEducationHighDegreeDropdown: state => state.educationHighDegreeDropdown,
  getEducationHighFieldOfStudyDropdown: state => state.educationHighFieldOfStudyDropdown
};
