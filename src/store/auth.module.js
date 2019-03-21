import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import UserService from "@/common/userstorage.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  SET_ERROR
} from "./mutations.type";

const state = {
  errors: null,
  user: {},
  token: "",
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
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

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.login("auth/login", { auth: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("user", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (context.state.isAuthenticated) {
      ApiService.setHeader();
      ApiService.get("user", UserService.getUser().id)
        .then(({ data }) => {
          context.commit(SET_AUTH_SECOND, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          console.log(response);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, errors) {
    state.errors = errors;
  },
  [SET_AUTH_SECOND](state, user) {
    state.isAuthenticated = true;
    state.errors = {};
    UserService.saveUser(user);
    state.user = user;
    state.token = JwtService.getToken();
  },
  [SET_AUTH](state, user) {
    state.errors = {};
    console.log("token in set auth is", user.token);
    JwtService.saveToken(user.token);
    state.token = user.token;
    state.isAuthenticated = true;
    console.log("user in set auth is", user);
    UserService.saveUser(user);
    state.user = user;
  },
  [PURGE_AUTH](state) {
    state.errors = {};
    JwtService.destroyToken();
    state.token = "";
    state.isAuthenticated = false;
    UserService.destroyUser();
    state.user = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
