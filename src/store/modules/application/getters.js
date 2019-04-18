export const getters = {
  getAppProfile: state => state.appProfile,
  getAppEducations: state => state.appEducations,
  // getAppEducation: state => educationId => {
  //   return state.appEducations.find(
  //     education => education.educationId == educationId
  //   );
  // },
  getAppExperiences: state => state.appExperiences,
  getAppSkills: state => state.appSkills
};
