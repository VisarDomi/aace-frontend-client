import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
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
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  setHeaderMultipart() {
    Vue.axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
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

export default ApiService;

export const MemberService = {
  get(userId) {
    return ApiService.get("user", userId);
  },
  search(membername) {
    return ApiService.post("user/search", membername);
  }
};

export const EducationService = {
  getEducation(userId) {
    return ApiService.get("user", `${userId}/education/all`);
  }
};

export const ExperienceService = {
  getExperience(userId) {
    return ApiService.get("user", `${userId}/experience/all`);
  }
};

export const SkillService = {
  getSkill(userId) {
    return ApiService.get("user", `${userId}/skill/all`);
  }
};

export const PaymentService = {
  getPayment(userId) {
    return ApiService.get("user", `${userId}/payment/all`);
  }
};

export const CommunicationService = {
  getCommunications() {
    return ApiService.get("officialcommunication", "all");
  },
  getCommunication(communicationId) {
    return ApiService.get("officialcommunication", communicationId);
  },
  makeComment(communicationId, comment) {
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
  getCommunicationDocuments(communicationId) {
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
  }
};
