<template>
  <div class="nav-on-header smart-nav">
    <form @submit.prevent="apply">
      <!-- Page header -->
      <header class="page-header">
        <div class="container page-name">
          <h1 class="text-center">Add your resume</h1>
          <p class="lead text-center">Create your application and it send to the board.</p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="form-group">
                <input type="file" ref="profile_file" @change="handleFileUploadProfile">
                <span class="help-block">Please choose a 4:6 profile picture.</span>
              </div>
            </div>
            <div class="col-xs-12 col-sm-8">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="First Name"
                  v-model="first_name"
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Last Name"
                  v-model="last_name"
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Profesioni"
                  v-model="profession"
                >
              </div>

              <div class="form-group">
                <input type="text" class="form-control" placeholder="Gjinia" v-model="sex">
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Short description about you"
                  v-model="summary"
                ></textarea>
              </div>

              <hr class="hr-lg">

              <h6>Basic information</h6>
              <div class="row">
                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-map-marker"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Vendlindja"
                      v-model="country"
                    >
                  </div>
                </div>

                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-map-marker"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address, e.g. Rruga Pleurat Xhuvani"
                      v-model="address"
                    >
                  </div>
                </div>

                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-globe"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Website address"
                      v-model="website"
                    >
                  </div>
                </div>

                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-birthday-cake"></i>
                    </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Datelindja"
                      v-model="birthday"
                    >
                  </div>
                </div>

                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-phone"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number"
                      v-model="phone"
                    >
                  </div>
                </div>

                <div class="form-group col-xs-12 col-sm-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <input type="text" class="form-control" :placeholder="email" disabled>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- END Page header -->
      <!-- Main container -->
      <main>
        <section>
          <div class="container">
            <header class="section-header">
              <h2>Comment from Administrator</h2>
              <p>{{comment_from_administrator}}</p>
            </header>
            <header class="section-header" :key="education.id" v-for="education in educationInputs">
              <p>{{education}}</p>
            </header>
            <header
              class="section-header"
              :key="experience.id"
              v-for="experience in experienceInputs"
            >
              <p>{{experience}}</p>
            </header>
          </div>
        </section>
        <!-- Education -->
        <section class="bg-alt">
          <div class="container">
            <header class="section-header">
              <span>Latest degrees</span>
              <h2>Education</h2>
            </header>

            <div class="row">
              <div
                class="col-xs-12"
                :key="educationInput.id"
                v-for="(educationInput, index) in educationInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteEducation(educationInput.id)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="form-group">
                          <input
                            type="file"
                            ref="education"
                            multiple
                            @change="handleFileUploadEducation(educationInput.id, index)"
                          >
                          <span
                            class="help-block"
                          >Please choose a square logo of your educational institution</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <label class="col-sm-6">Vendos tipin e edukimit*</label>
                        <div class="form-group">
                          <select class="form-control" v-model="education_type_id[index]">
                            <option
                              v-for="option in education_type_options"
                              v-bind:value="option.id"
                              :key="option.id"
                            >{{ option.text }}</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label class="col-sm-2">Degree</label>
                          <div class="form-group col-sm-5">
                            <select
                              class="form-control"
                              v-model="education_degree_id[index]"
                              @change="handleEducationOptionDegreeChange($event, index)"
                            >
                              <option
                                v-for="option in education_degree_options[education_type_id[index]]"
                                v-bind:value="option.id"
                                :key="option.id"
                              >{{ option.text }}</option>
                            </select>
                          </div>
                          <div class="form-group col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_degree_other[index]"
                              class="form-control"
                              v-model="educationInput.degree"
                              placeholder="..."
                            >
                          </div>
                        </div>

                        <div class="form-group">
                          <label class="col-sm-2">Major</label>
                          <div class="form-group col-sm-5">
                            <select
                              class="form-control"
                              v-model="education_major_id[index]"
                              @change="handleEducationOptionMajorChange($event, index)"
                            >
                              <option
                                v-for="option in education_major_options[education_type_id[index]]"
                                v-bind:value="option.id"
                                :key="option.id"
                              >{{ option.text }}</option>
                            </select>
                          </div>
                          <div class="form-group col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_major_other[index]"
                              class="form-control"
                              v-model="educationInput.field_of_study"
                              placeholder="..."
                            >
                          </div>
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="educationInput.school"
                            placeholder="School name, e.g. Massachusetts Institute of Technology"
                          >
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Date from</span>
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2012"
                              v-model="educationInput.from_date"
                            >
                            
                            <span class="input-group-addon">Date to</span>
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2016"
                              v-model="educationInput.to_date"
                            >
                          </div>
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="3"
                            placeholder="Short description"
                            v-model="educationInput.description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br>
                <button class="btn btn-primary" type="button" @click="onAddEducation">Add education</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END Education -->
        <!-- Work Experience -->
        <section>
          <div class="container">
            <header class="section-header">
              <span>Past positions</span>
              <h2>Work Experience</h2>
            </header>

            <div class="row">
              <div
                class="col-xs-12"
                :key="experienceInput.id"
                v-for="(experienceInput, index) in experienceInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteExperience(experienceInput.id)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="form-group">
                          <input
                            type="file"
                            ref="experience"
                            multiple
                            @change="handleFileUploadExperience(experienceInput.id, index)"
                          >
                          <span class="help-block">Please choose a square logo of the company</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="experienceInput.employer"
                            placeholder="Emri i punedhenesit"
                          >
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="experienceInput.company"
                            placeholder="Company"
                          >
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="experienceInput.location"
                            placeholder="Location"
                          >
                        </div>

                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Date from</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="experienceInput.from_date"
                              placeholder="e.g. 2012"
                            >
                            <span class="input-group-addon">Date to</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="experienceInput.to_date"
                              placeholder="e.g. 2016"
                            >
                          </div>
                        </div>

                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="3"
                            v-model="experienceInput.description"
                            placeholder="Short description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br>
                <button
                  class="btn btn-primary btn-duplicator"
                  type="button"
                  @click="onAddExperience"
                >Add experience</button>
              </div>
            </div>
          </div>
        </section>
        <!--END Work Experience -->
        <!-- Skill -->
        <section class="bg-alt">
          <div class="container">
            <header class="section-header">
              <span>Expertise Areas</span>
              <h2>Kualifikime/Arritje profesionale</h2>
            </header>

            <div class="row">
              <div
                class="col-xs-12"
                :key="skillInput.randomid"
                v-for="(skillInput, index) in skillInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteSkill(skillInput.randomid)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="form-group">
                          <input
                            type="file"
                            ref="skill"
                            multiple
                            @change="handleFileUploadSkill(skillInput.randomid, index)"
                          >
                          <span class="help-block">Please choose a photo of your skill</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="skillInput.releaser"
                            placeholder="Leshuesi i kualifikimit"
                          >
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="skillInput.name"
                            placeholder="Emri i kualifikimit"
                          >
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Date from</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="skillInput.from_date"
                              placeholder="e.g. 2012"
                            >
                            <span class="input-group-addon">Date to</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="skillInput.to_date"
                              placeholder="e.g. 2016"
                            >
                          </div>
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="3"
                            placeholder="Short description"
                            v-model="skillInput.description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br>
                <button
                  class="btn btn-primary btn-duplicator"
                  @click="onAddSkill"
                  type="button"
                >Add skill</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END Skill -->
        <!-- Submit -->
        <section>
          <!-- class="bg-img" style="background-image: url(static/img/newsletter_plc.jpg);" -->
          <div class="container">
            <header class="section-header">
              <span>Are you done?</span>
              <h2>Submit application</h2>
              <p>Please review your information once more and press the below button to send your application for review.</p>
            </header>

            <p class="text-center">
              <button class="btn btn-success btn-xl btn-round" type="submit">Submit your application</button>
            </p>
          </div>
        </section>
        <!-- END Submit -->
      </main>
      <!-- END Main container -->
    </form>
  </div>
</template>


<script>
import axios from "axios";

import { mapGetters } from "vuex";
import { EducationService } from "@/common/api.service";

export default {
  name: "ReApplication",
  data() {
    return {
      //--------------- User -------

      first_name: "",
      last_name: "",
      profession: "",
      sex: "",
      summary: "",
      country: "",
      industry: "",
      phone: "",
      address: "",
      birthday: "",
      website: "",
      email: "",
      comment_from_administrator: "",
      // comment_from_administrator: "",

      //--------------- Image Files -------
      profile_picture_file: "",

      //--------------- Education -------
      educationInputs: [],
      education_files_index: 0,

      education_type_id: [],
      education_type_options: [
        { text: "Shkolle e mesme", id: 1 },
        { text: "Shkolle e larte", id: 2 }
      ],

      education_degree_id: [],
      education_degree_other: [false],
      education_degree_options: {
        1: [{ text: "Pergjithshme", id: 1 }, { text: "Teknike", id: 2 }],
        2: [
          { text: "Bachelor", id: 3 },
          { text: "Master", id: 4 },
          { text: "Diplom", id: 5 },
          { text: "Te tjera", id: 6 }
        ]
      },

      education_major_id: [],
      education_major_other: [false],
      education_major_options: {
        1: [{ text: "???", id: 1 }, { text: "????", id: 2 }],
        2: [
          { text: "Inxhinier Civil", id: 3 },
          { text: "Inxhinier Elektrik", id: 4 },
          { text: "Te tjera", id: 5 }
        ]
      },
      //---------------- Experience -------
      experienceInputs: [],
      experience_files_index: 0,

      //---------------- Skill -------
      skillInputs: [],
      skill_files_index: 0
    };
  },
  methods: {
    handleEducationOptionDegreeChange(e, i) {
      let educationOptionId = e.target.value;
      if (educationOptionId == 6) {
        this.education_degree_other[i] = true;
      } else {
        this.education_degree_other[i] = false;
        if (this.education_type_id[i] == 1)
          this.educationInputs[i].degree = this.education_degree_options[
            this.education_type_id[i]
          ][educationOptionId - 1].text;
        else
          this.educationInputs[i].degree = this.education_degree_options[
            this.education_type_id[i]
          ][educationOptionId - 3].text;
      }
    },
    handleEducationOptionMajorChange(e, i) {
      let educationOptionId = e.target.value;
      if (educationOptionId == 5) {
        this.education_major_other[i] = true;
      } else {
        this.education_major_other[i] = false;
        if (this.education_type_id[i] == 1)
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 1].text;
        else
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 3].text;
      }
    },
    handleFileUploadProfile(event) {
      this.profile_picture_file = this.$refs.profile_file.files[0];
    },
    // ------- Education -------
    handleFileUploadEducation(id, index) {
      let files = [];
      for (let i = 0; i < this.$refs.education[index].files.length; i++) {
        files.push(this.$refs.education[index].files[i]);
      }
      this.educationInputs.filter(
        education => education.id === id
      )[0].files = files;
    },
    onAddEducation() {
      const newEducation = {
        id: Math.random() * Math.random() * 1000,
        degree: "",
        field_of_study: "",
        school: "",
        from_date: "",
        to_date: "",
        description: ""
      };
      this.educationInputs.push(newEducation);
    },
    onDeleteEducation(id) {
      this.educationInputs = this.educationInputs.filter(
        education => education.id !== id
      );
    },
    // ------- Experience -------
    handleFileUploadExperience(randomid, index) {
      let files = [];
      for (let i = 0; i < this.$refs.experience[index].files.length; i++) {
        files.push(this.$refs.experience[index].files[i]);
      }
      this.experienceInputs.filter(
        experience => experience.randomid === randomid
      )[0].files = files;
    },
    onAddExperience() {
      const newExperience = {
        randomid: Math.random() * Math.random() * 1000,
        employer: "",
        company: "",
        location: "",
        from_date: "",
        to_date: "",
        is_currently_work_here: false,
        description: ""
      };
      this.experienceInputs.push(newExperience);
    },
    onDeleteExperience(randomid) {
      this.experienceInputs = this.experienceInputs.filter(
        experience => experience.randomid !== randomid
      );
    },
    // ------- Skill -------
    handleFileUploadSkill(randomid, index) {
      let files = [];
      for (let i = 0; i < this.$refs.skill[index].files.length; i++) {
        files.push(this.$refs.skill[index].files[i]);
      }
      this.skillInputs.filter(
        skill => skill.randomid === randomid
      )[0].files = files;
    },
    onAddSkill() {
      const newSkill = {
        randomid: Math.random() * Math.random() * 1000,
        releaser: "",
        name: "",
        from_date: "",
        to_date: "",
        description: ""
      };
      this.skillInputs.push(newSkill);
    },
    onDeleteSkill(randomid) {
      this.skillInputs = this.skillInputs.filter(
        skill => skill.randomid !== randomid
      );
    },

    send_experiences() {
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");

      for (var i = 0; i < this.experienceInputs.length; i++) {
        axios
          .post(
            "https://aace.ml/api/user/" + USER_ID + "/experience",
            this.experienceInputs[i],
            {
              // "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + TOKEN
              }
            }
          )
          .then(res => {
            console.log("post experience");
            let EXPERIENCE_ID = res.data.id;

            let formDataExperience = new FormData();
            if (this.experienceInputs[this.experience_files_index].files) {
              for (
                let j = 0;
                j <
                this.experienceInputs[this.experience_files_index].files.length;
                j++
              ) {
                formDataExperience.append(
                  "file",
                  this.experienceInputs[this.experience_files_index].files[j]
                );
              }
              this.experience_files_index++;

              axios
                .post(
                  "https://aace.ml/api/user/" +
                    USER_ID +
                    "/experience/" +
                    EXPERIENCE_ID +
                    "/media",
                  formDataExperience,
                  {
                    "Content-Type": "multipart/form-data",
                    headers: {
                      Authorization: "Bearer " + TOKEN
                    }
                  }
                )
                .then(res => {
                  if (res.status == 200) {
                    console.log("pdf updated sucessfully experience.");
                    // this.$router.push({
                    //   name: "/success"
                    // });
                  }
                })
                .catch(err => console.log(err));
            } // closes the if statement
          });
      }
    },
    send_skills() {
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");

      for (var i = 0; i < this.skillInputs.length; i++) {
        axios
          .post(
            "https://aace.ml/api/user/" + USER_ID + "/skill",
            this.skillInputs[i],
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + TOKEN
              }
            }
          )
          .then(res => {
            console.log("post skill");
            let SKILL_ID = res.data.id;

            let formDataSkill = new FormData();
            if (this.skillInputs[this.skill_files_index].files) {
              for (
                let j = 0;
                j < this.skillInputs[this.skill_files_index].files.length;
                j++
              ) {
                formDataSkill.append(
                  "file",
                  this.skillInputs[this.skill_files_index].files[j]
                );
              }
              this.skill_files_index++;
              axios
                .post(
                  "https://aace.ml/api/user/" +
                    USER_ID +
                    "/skill/" +
                    SKILL_ID +
                    "/media",
                  formDataSkill,
                  {
                    "Content-Type": "multipart/form-data",
                    headers: {
                      Authorization: "Bearer " + TOKEN
                    }
                  }
                )
                .then(res => {
                  if (res.status == 200) {
                    console.log("pdf updated sucessfully.");
                    // this.$router.push({
                    //   path: "/success"
                    // });
                  }
                })
                .catch(err => console.log(err));
            }
          });
      }
    },
    send_educations() {
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");
      let eduInputs = [];

      for (var i = 0; i < this.educationInputs.length; i++) {
        let edu_id = this.educationInputs[i].id;
        eduInputs.push({});
        for (var j = 0; j < Object.keys(this.educationInputs[i]).length; j++) {
          if (
            Object.keys(this.educationInputs[i])[j] != "id" &&
            Object.keys(this.educationInputs[i])[j] != "user_id"
          )
            eduInputs[i][
              Object.keys(this.educationInputs[i])[j]
            ] = this.educationInputs[i][
              Object.keys(this.educationInputs[i])[j]
            ];
        }
        console.log("edu inputs", eduInputs[i]);
        // this.educationInputs[i] = (
        //     ({education_type, degree, field_of_study, school, from_date, to_date, description}) =>
        //     ({education_type, degree, field_of_study, school, from_date, to_date, description})
        // )(this.educationInputs[i])
        // console.log(this.educationInputs[i])
        axios
          .put(
            "https://aace.ml/api/user/" + USER_ID + "/education/" + edu_id,
            eduInputs[i],
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + TOKEN
              }
            }
          )
          .then(res => {
            console.log("post education");
            let EDUCATION_ID = res.data.id;

            let formDataEducation = new FormData();
            if (this.educationInputs[this.education_files_index].files) {
              for (
                let j = 0;
                j <
                this.educationInputs[this.education_files_index].files.length;
                j++
              ) {
                formDataEducation.append(
                  "file",
                  this.educationInputs[this.education_files_index].files[j]
                );
              }
              this.education_files_index++;
              axios
                .post(
                  "https://aace.ml/api/user/" +
                    USER_ID +
                    "/education/" +
                    EDUCATION_ID +
                    "/media",
                  formDataEducation,
                  {
                    "Content-Type": "multipart/form-data",
                    headers: {
                      Authorization: "Bearer " + TOKEN
                    }
                  }
                )
                .then(res => {
                  if (res.status == 200) {
                    console.log("pdf updated sucessfully.");
                    // this.$router.push({
                    //   name: "Success"
                    // });
                  }
                })
                .catch(err => console.log(err));
            } // close if-statement
          });
      }
    },
    apply() {
      // ------- Basic
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");

      console.log(TOKEN);
      console.log(USER_ID);
      // ------- User -------
      let formDataUser = new FormData();
      formDataUser.append("file", this.profile_picture_file);
      let user_string = {
        first_name: this.first_name,
        last_name: this.last_name,
        profession: this.profession,
        sex: this.sex,
        summary: this.summary,
        country: this.country,
        phone: this.phone,
        address: this.address,
        birthday: this.birthday,
        website: this.website
      };

      // ------- Experience file and post -------
      // this.send_experiences();
      // ------- Skill file and post -------
      // this.send_skills();
      // ------- Education file and post -------
      this.send_educations();
      // ------- User file and put -------
      // axios
      //     .all([
      //     axios.post(
      //         "https://aace.ml/api/user/" + USER_ID + "/media",
      //         formDataUser,
      //         {
      //         "Content-Type": "multipart/form-data",
      //         headers: {
      //             Authorization: "Bearer " + TOKEN
      //         }
      //         }
      //     ),
      //     axios.put("https://aace.ml/api/user/" + USER_ID, user_string, {
      //         headers: {
      //         Authorization: "Bearer " + TOKEN
      //         }
      //     })
      //     ])
      //     .then(
      //     axios.spread((profileRes, stringRes) => {
      //         // console.log(
      //         //   "res.statuses are: ",
      //         //   profileRes.status,
      //         //   stringRes.status
      //         // );

      //         if (profileRes.status == 200) {
      //         // console.log("Profile picture updated successfully.");
      //         } else {
      //         // console.log("profile picture bad response");
      //         }

      //         if (stringRes.status == 200) {
      //         // console.log("Strings sent successfully.");
      //         localStorage.setItem("user", JSON.stringify(stringRes.data));
      //         this.$router.push({
      //             name: "Success"
      //         });
      //         } else {
      //         // console.log("String sent unsuccessfuly");
      //         }
      //     })
      //     );
    }
  },
  mounted() {
    let AACE_URL_USER = "https://aace.ml/api/user/";
    let USER_ID = JSON.parse(localStorage.getItem("user")).id;
    axios
      .get(AACE_URL_USER + USER_ID + "/education/all", {
        responseType: "json"
      })
      .then(res => {
        this.educationInputs = res.data;
        console.log(this.educationInputs);
        // for(let i=0; i<res.data.length; i++){
        //     this.educationInputs[i] = (
        //         ({education_type, degree, field_of_study, school, from_date, to_date, description}) =>
        //         ({education_type, degree, field_of_study, school, from_date, to_date, description})
        //     )(res.data[i])
        // }

        // autofill dropdowns
        for (var i = 0; i < this.educationInputs.length; i++) {
          this.educationInputs[i].education_type = "asap";
          // education type id ---------------------------
          if (
            this.educationInputs[i].degree ==
            this.education_degree_options[1][0].text
          )
            this.education_type_id[i] = 1;
          else if (
            this.educationInputs[i].degree ==
            this.education_degree_options[1][1].text
          )
            this.education_type_id[i] = 1;
          else this.education_type_id[i] = 2;

          // degree --------------------------------------
          for (let j = 0; j < this.education_degree_options[1].length; j++) {
            if (
              this.educationInputs[i].degree ==
              this.education_degree_options[1][j].text
            ) {
              this.education_degree_id[i] = j + 1;
            }
          }
          for (let j = 0; j < this.education_degree_options[2].length; j++) {
            if (
              this.educationInputs[i].degree ==
              this.education_degree_options[2][j].text
            ) {
              this.education_degree_id[i] = j + 3;
            }
          }
          if (!this.education_degree_id[i]) {
            this.education_degree_id[i] = 6;
            this.education_degree_other[i] = true;
          }
          // major  --------------------------------------
          for (let j = 0; j < this.education_major_options[1].length; j++) {
            if (
              this.educationInputs[i].field_of_study ==
              this.education_major_options[1][j].text
            ) {
              this.education_major_id[i] = j + 1;
            }
          }
          for (let j = 0; j < this.education_major_options[2].length; j++) {
            if (
              this.educationInputs[i].field_of_study ==
              this.education_major_options[2][j].text
            ) {
              this.education_major_id[i] = j + 3;
            }
          }
          if (!this.education_major_id[i]) {
            this.education_major_id[i] = 5;
            this.education_major_other[i] = true;
          }
        }
      });

    axios
      .get(AACE_URL_USER + USER_ID, {
        responseType: "json"
      })
      .then(res => {
        console.log(res);

        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.sex = res.data.sex;
        this.summary = res.data.summary;
        this.country = res.data.country;
        // this.years_of_experience = res.data.years_of_experience;
        this.email = res.data.email;
        this.comment_from_administrator = res.data.comment_from_administrator;
        this.profession = res.data.profession;
        // this.register_status = res.data.register_status;
        this.phone = res.data.phone;
        this.address = res.data.address;
        // birthday needed in format yyyy-MM-dd
        console.log("res.data.birthday :", res.data.birthday);
        this.birthday = res.data.birthday;
        this.website = res.data.website;
      });
  }
};
</script>

<style scoped>
.navbar .container {
  width: 100%;
}
</style>
