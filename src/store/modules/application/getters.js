export const getters = {
  isUploading: state => state.isUploading,
  getAppSkills: state => state.appSkills,
  // getAppSkill: state => console.log("hola")
  getAppSkill: state => skillId => {
    return state.appSkills.find(skill => skill.skillId == skillId);
  }
};
