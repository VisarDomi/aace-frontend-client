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
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

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
    if (JwtService.getToken()) {
      ApiService.setHeader();
      context.commit(SET_AUTH, UserService.getUser(), JwtService.getToken());

      // ApiService.get("user", state.user.id)
      //   .then(({ data }) => {
      //     context.commit(SET_AUTH, data);
      //   })
      //   .catch(({ response }) => {
      //     context.commit(SET_ERROR, response.data.errors);
      //   });
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
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user, token) {
    state.isAuthenticated = true;
    state.user = user;
    state.token = token;
    state.errors = {};
    UserService.saveUser(user);
    JwtService.saveToken(token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
    UserService.destroyUser();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
