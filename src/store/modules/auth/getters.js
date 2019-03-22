export const getters = {
  getCurrentUser(state) {
    return state.user;
  },
  getCurrentToken(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};
