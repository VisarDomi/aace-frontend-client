import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

export const ApiService = {
  init() {
    axios.defaults.headers.common = {
      "Secure-Api-Key":
        "asdfasdfetyeq" /* needs to be put on environment variable */,
      "Content-Type": "application/json"
    };
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    let token = JwtService.getToken();
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("token in setHeader is", token);
  },

  setHeaderMultipart() {
    Vue.axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
    console.log(
      "header in set header multipart is ",
      Vue.axios.defaults.headers.common["Content-Type"]
    );
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  login(resource, params) {
    return Vue.axios.post(`${resource}`, {}, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export const MemberService = {
  getUser(userId) {
    return ApiService.get("user", userId);
  },
  searchUser(name) {
    return ApiService.post("user/search", name);
  }
};

export const EducationService = {
  getEducation(userId) {
    return ApiService.get(`user/${userId}/education`, "all");
  },
  postEducation(userId, education) {
    return ApiService.post(`user/${userId}/education`, education);
  }
};

export const ExperienceService = {
  getExperience(userId) {
    return ApiService.get(`user/${userId}/experience`, "all");
  },
  postExperience(userId, experience) {
    return ApiService.post(`user/${userId}/experience`, experience);
  }
};

export const SkillService = {
  getSkill(userId) {
    return ApiService.get(`user/${userId}/skill`, "all");
  },
  postSkill(userId, skill) {
    return ApiService.post(`user/${userId}/skill`, skill);
  }
};

export const PaymentService = {
  getPayment(userId) {
    return ApiService.get(`user/${userId}/payment`, "all");
  },
  postPayment(userId, payment) {
    return ApiService.post(`user/${userId}/payment`, payment);
  }
};

export const CommunicationService = {
  getCommunications() {
    return ApiService.get("officialcommunication", "all");
  },
  getCommunication(communicationId) {
    return ApiService.get("officialcommunication", communicationId);
  },
  postComment(communicationId, comment) {
    return ApiService.post(
      `officialcommunication/${communicationId}/officialcomment`,
      comment
    );
  },
  getComments(communicationId) {
    return ApiService.get(
      `officialcommunication/${communicationId}/officialcomment`,
      "all"
    );
  }
};

export const MediaService = {
  getPicture(userId) {
    return ApiService.get("user", `${userId}/media/all`);
  },
  getCommunicationMedia(communicationId) {
    return ApiService.get(
      "officialcommunication",
      `${communicationId}/media/all`
    );
  },
  postEducationMedia(userId, educationId, media) {
    return ApiService.post(
      `user/${userId}/education/${educationId}/media`,
      media
    );
  },
  postExperienceMedia(userId, experienceId, media) {
    return ApiService.post(
      `user/${userId}/experience/${experienceId}/media`,
      media
    );
  },
  postSkillMedia(userId, skillId, media) {
    return ApiService.post(`user/${userId}/skill/${skillId}/media`, media);
  }
};
