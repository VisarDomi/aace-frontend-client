import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { getToken } from "./jwt";

const API_URL = "https://aace.ml/api";

export const ApiService = {
  init() {
    axios.defaults.headers.common = {
      "Secure-Api-Key": "asdfasdfetyeq",
      "Content-Type": "application/json"
    };
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader() {
    let token = getToken();
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  setHeaderMultipart() {
    Vue.axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  get(resource) {
    console.log(`get resource is:`, resource);
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  post(resource, params) {
    console.log(`post resource and params are:`, resource, params);
    return Vue.axios.post(`${resource}`, params);
  },
  login(resource, params) {
    console.log(`login resource and params are:`, resource, params);
    return Vue.axios.post(`${resource}`, {}, params);
  },
  put(resource, params) {
    console.log(`put params are:`, params);
    console.log(`put resource is:`, resource);
    return Vue.axios.put(`${resource}`, params);
  },
  delete(resource) {
    console.log(`delete resource is:`, resource);
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export const ProfileService = {
  getProfile(userId) {
    return ApiService.get(`user/${userId}`);
  },
  searchUser(name) {
    return ApiService.post("user/search", name);
  },
  putProfile(userId, profile) {
    return ApiService.put(`user/${userId}`, profile);
  },
  getNumberMembers() {
    return ApiService.get(`user/all/count`);
  }
};

export const EducationService = {
  getEducations(userId) {
    return ApiService.get(`user/${userId}/education/all`);
  },
  postEducation(userId, education) {
    return ApiService.post(`user/${userId}/education`, education);
  },
  putEducation(userId, education, educationId) {
    return ApiService.put(`user/${userId}/education/${educationId}`, education);
  }
};

export const ExperienceService = {
  getExperiences(userId) {
    return ApiService.get(`user/${userId}/experience/all`);
  },
  postExperience(userId, experience) {
    return ApiService.post(`user/${userId}/experience`, experience);
  },
  putExperience(userId, experience, experienceId) {
    return ApiService.put(
      `user/${userId}/experience/${experienceId}`,
      experience
    );
  }
};

export const SkillService = {
  getSkills(userId) {
    return ApiService.get(`user/${userId}/skill/all`);
  },
  postSkill(userId, skill) {
    return ApiService.post(`user/${userId}/skill`, skill);
  },
  putSkill(userId, skill, skillId) {
    return ApiService.put(`user/${userId}/skill/${skillId}`, skill);
  }
};

export const PaymentService = {
  getPayments(userId) {
    return ApiService.get(`user/${userId}/payment/all`);
  },
  postPayment(userId, payment) {
    return ApiService.post(`user/${userId}/payment`, payment);
  }
};

export const CommunicationService = {
  getCommunications() {
    return ApiService.get(`communication/all`);
  },
  getCommunication(communicationId) {
    return ApiService.get(`communication/${communicationId}`);
  },
  postComment(communicationId, comment) {
    return ApiService.post(
      `comment/communication/${communicationId}`,
      comment
    );
  },
  getComments(communicationId) {
    return ApiService.get(
      `comment/all/communication/${communicationId}`
    );
  }
};

export const EventService = {
  getEvents() {
    return ApiService.get(`event/all`);
  },
  getEvent(eventId) {
    return ApiService.get(`event/${eventId}`);
  },
  postComment(eventId, comment) {
    return ApiService.post(
      `comment/event/${eventId}`,
      comment
    );
  },
  getComments(eventId) {
    return ApiService.get(
      `comment/all/event/${eventId}`
    );
  }
};

export const PollService = {
  getPolls() {
    return ApiService.get(`poll/all`);
  },
  getPoll(pollId) {
    return ApiService.get(`poll/${pollId}`);
  },
  postComment(pollId, comment) {
    return ApiService.post(
      `comment/poll/${pollId}`,
      comment
    );
  },
  getComments(pollId) {
    return ApiService.get(
      `comment/all/poll/${pollId}`
    );
  },
  postVote(pollId, payload){
    console.log("payload in api service-> ", payload)
    return ApiService.put(`poll/${pollId}/vote`, payload)
  }
};

export const MediaService = {
  getPicture(userId) {
    return ApiService.get(`user/${userId}/media/all`);
  },
  getCommunicationMedia(communicationId) {
    return ApiService.get(`communication/${communicationId}/media/all`);
  },
  getEventMedia(eventId) {
    return ApiService.get(`event/${eventId}/media/all`);
  },
  getPollMedia(pollId) {
    return ApiService.get(`poll/${pollId}/media/all`);
  },
  postProfileMedia(userId, media) {
    return ApiService.post(`user/${userId}/media`, media);
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
