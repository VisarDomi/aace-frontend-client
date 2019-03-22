export const getters = {
  currentUser(state) {
    return state.user;
  },
  currentToken(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};
