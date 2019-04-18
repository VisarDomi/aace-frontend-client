export const getters = {
  getReappProfile: state => state.reappProfile,
  getReappEducations: state => state.reappEducations,
  // getReappEducation: state => educationId => {
  //   return state.appEducations.find(
  //     education => education.educationId == educationId
  //   );
  // },
  getReappExperiences: state => state.reappExperiences,
  getReappSkills: state => state.reappSkills
};
