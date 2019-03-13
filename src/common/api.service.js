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
  get(slug) {
    return ApiService.get("user", slug);
  },
  search(membername) {
    return ApiService.post("user/search", membername);
  }
};

export const MediaService = {
  getPicture(slug) {
    return ApiService.get("user", `${slug}/media/all`);
  },
  getCommunicationDocuments(slug) {
    return ApiService.get("officialcommunication", `${slug}/media/all`);
  }
  //setUserEducation(){},
  //setUserExperience(){},
  //setUserSkill(){}
};

export const EducationService = {
  getEducation(slug) {
    return ApiService.get("user", `${slug}/education/all`);
  }
};

export const ExperienceService = {
  getExperience(slug) {
    return ApiService.get("user", `${slug}/experience/all`);
  }
};

export const SkillService = {
  getSkill(slug) {
    return ApiService.get("user", `${slug}/skill/all`);
  }
};

export const CommunicationService = {
  getCommunications() {
    return ApiService.get("officialcommunication", "all");
  },
  getCommunication(id) {
    return ApiService.get("officialcommunication", id);
  },
  postCommunication(communicationId, comment) {
    return ApiService.post(
      `officialcommunication/${communicationId}/comment`,
      comment
    );
  }
};
