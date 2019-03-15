<template>
  <div class="nav-on-header smart-nav">
    <form @submit.prevent="apply">
      <!-- Page header -->
      <header class="page-header">
        <div class="container page-name">
          <h1 class="text-center">Krijoni nje aplikim</h1>
          <p class="lead text-center">Krijoni nje aplikimin personal dhe dergojeni bordit.</p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="form-group">
                <input type="file" ref="profile_file" @change="handleFileUploadProfile">
                <span class="help-block">Ju lutem zgjidhni foto profili (4:6).</span>
              </div>
            </div>
            <div class="col-xs-12 col-sm-8">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Emri"
                  v-model="first_name"
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Mbiemri"
                  v-model="last_name"
                >
              </div>
              <div class="form-group">
                <select class="form-control" v-model="profession">
                  <option value="Inxhinier Ndertimi">Inxhinier Ndertimi</option>
                  <option value="Inxhinier Civil">Inxhinier Civil</option>
                  <option value="Inxhinier Mekanik">Inxhinier Mekanik</option>>
                </select>
              </div>

              <div class="form-group">
                <select class="form-control" v-model="sex">
                  <option value="Mashkull">Mashkull</option>
                  <option value="Femer">Femer</option>>
                </select>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Pershkrim i shkurter rreth jush"
                  v-model="summary"
                ></textarea>
              </div>

              <hr class="hr-lg">

              <h6>Informacion i pergjithshem</h6>
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
                    <input type="text" class="form-control" placeholder="Adresa" v-model="address">
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
                      placeholder="Faqja juaj e internetit"
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
                      placeholder="Numri telefonit"
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
        <!-- Education -->
        <section class="bg-alt">
          <div class="container">
            <header class="section-header">
              <span>Diplomat me te fundit</span>
              <h2>Arsimimi</h2>
            </header>

            <div class="row">
              <div
                class="col-xs-12"
                :key="educationInput.randomid"
                v-for="(educationInput, index) in educationInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteEducation(educationInput.randomid)"
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
                            @change="
                              handleFileUploadEducation(
                                educationInput.randomid,
                                index
                              )
                            "
                          >
                          <span class="help-block">Ngarkoni dokumentin perkates per kete arsimim</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <label class="col-sm-6">Tipi i arsimimit</label>
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
                          <label class="col-sm-2">Tipi i diplomes</label>
                          <div class="form-group col-sm-5">
                            <select
                              class="form-control"
                              v-model="education_degree_id[index]"
                              @change="
                                handleEducationOptionDegreeChange($event, index)
                              "
                            >
                              <option
                                v-for="option in education_degree_options[
                                  education_type_id[index]
                                ]"
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
                          <label class="col-sm-2">Dega</label>
                          <div class="form-group col-sm-5">
                            <select
                              class="form-control"
                              v-model="education_major_id[index]"
                              @change="
                                handleEducationOptionMajorChange($event, index)
                              "
                            >
                              <option
                                v-for="option in education_major_options[
                                  education_type_id[index]
                                ]"
                                v-bind:value="option.id"
                                :key="option.id"
                              >{{ option.text }}</option>
                            </select>
                          </div>
                          <div class="form-group col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_major_other"
                              class="form-control"
                              v-model="educationInput.field_of_study"
                              placeholder="Dega"
                            >
                          </div>
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="educationInput.school"
                            placeholder="Emri i shkolles, psh Universiteti Politeknik i Tiranes"
                          >
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Nga</span>
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2012"
                              v-model="educationInput.from_date"
                            >
                            
                            <span class="input-group-addon">Deri ne</span>
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
                            placeholder="Pershkrim i shkurter"
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
                <button class="btn btn-primary" type="button" @click="onAddEducation">Shto arsimim</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END Education -->
        <!-- Work Experience -->
        <section>
          <div class="container">
            <header class="section-header">
              <span>Pozicionet e meparshme</span>
              <h2>Pervoje pune</h2>
            </header>

            <div class="row">
              <div
                class="col-xs-12"
                :key="experienceInput.randomid"
                v-for="(experienceInput, index) in experienceInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteExperience(experienceInput.randomid)"
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
                            @change="
                              handleFileUploadExperience(
                                experienceInput.randomid,
                                index
                              )
                            "
                          >
                          <span class="help-block">
                            Ngarkoni dokumentin perkates per kete pervoje
                            pune
                          </span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="experienceInput.title"
                            placeholder="Titulli qe keni mbajtur ne pune"
                          >
                        </div>

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
                            v-model="experienceInput.location"
                            placeholder="Vendi ku keni punuar"
                          >
                        </div>

                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Nga</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="experienceInput.from_date"
                              placeholder="e.g. 2012"
                            >
                            <span class="input-group-addon">Deri ne</span>
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
                            placeholder="Pershkrim i shkurter"
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
                >Shto pervoje pune</button>
              </div>
            </div>
          </div>
        </section>
        <!--END Work Experience -->
        <!-- Skill -->
        <section class="bg-alt">
          <div class="container">
            <header class="section-header">
              <span>Arritje profesionale</span>
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
                            @change="
                              handleFileUploadSkill(skillInput.randomid, index)
                            "
                          >
                          <span class="help-block">
                            Ngarkoni dokumentin perkates per kete
                            kualifikim
                          </span>
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
                            <span class="input-group-addon">Nga</span>
                            <input
                              type="date"
                              class="form-control"
                              v-model="skillInput.from_date"
                              placeholder="e.g. 2012"
                            >
                            <span class="input-group-addon">Deri ne</span>
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
                            placeholder="Pershkrim i shkurter"
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
                >Shto kualifikim</button>
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
              <span>Perfunduat?</span>
              <h2>Dergo aplikimin</h2>
              <p>
                Ju lutem rishikoni te dhenat edhe nje here dhe shtypni butonin e
                meposhtem per te derguar aplikimin per vleresim.
              </p>
            </header>

            <p class="text-center">
              <button class="btn btn-success btn-xl btn-round" type="submit">Dergo aplikimin</button>
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

import store from "@/store";

export default {
  name: "Application",
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
        1: [{ text: "???", id: 1 }, { text: "???", id: 2 }],
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
      console.log(this.educationInputs[i].field_of_study);
      console.log(this.educationInputs[i].degree);
      console.log("");
    },
    handleEducationOptionMajorChange(e, i) {
      let educationOptionId = e.target.value;
      if (educationOptionId == 5) {
        this.education_major_other = true;
      } else {
        this.education_major_other = false;
        if (this.education_type_id[i] == 1)
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 1].text;
        else
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 3].text;
        console.log(this.educationInputs[i].field_of_study);
        console.log(this.educationInputs[i].degree);
        console.log("");
      }
    },
    handleFileUploadProfile(event) {
      this.profile_picture_file = this.$refs.profile_file.files[0];
    },
    // ------- Education -------
    handleFileUploadEducation(randomid, index) {
      let files = [];
      for (let i = 0; i < this.$refs.education[index].files.length; i++) {
        files.push(this.$refs.education[index].files[i]);
      }
      this.educationInputs.filter(
        education => education.randomid === randomid
      )[0].files = files;
    },
    onAddEducation() {
      const newEducation = {
        randomid: Math.random() * Math.random() * 1000,
        education_type: "",
        degree: "",
        field_of_study: "",
        school: "",
        from_date: "",
        to_date: "",
        description: ""
      };
      this.educationInputs.push(newEducation);
    },
    onDeleteEducation(randomid) {
      this.educationInputs = this.educationInputs.filter(
        education => education.randomid !== randomid
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
        title: "",
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
                  }
                })
                .catch(err => console.log(err));
            }
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

      for (var i = 0; i < this.educationInputs.length; i++) {
        axios
          .post(
            "https://aace.ml/api/user/" + USER_ID + "/education",
            this.educationInputs[i],
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
                  }
                })
                .catch(err => console.log(err));
            }
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
      this.send_experiences();
      // ------- Skill file and post -------
      this.send_skills();
      // ------- Education file and post -------
      this.send_educations();
      // ------- User file and put -------
      axios
        .all([
          axios.post(
            "https://aace.ml/api/user/" + USER_ID + "/media",
            formDataUser,
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + TOKEN
              }
            }
          ),
          axios.put("https://aace.ml/api/user/" + USER_ID, user_string, {
            headers: {
              Authorization: "Bearer " + TOKEN
            }
          })
        ])
        .then(
          axios.spread((profileRes, stringRes) => {
            if (profileRes.status == 200) {
              // console.log("Profile picture updated successfully.");
            } else {
              // console.log("profile picture bad response");
            }

            if (stringRes.status == 200) {
              // console.log("Strings sent successfully.");
              localStorage.setItem("user", JSON.stringify(stringRes.data));
              this.$router.push({
                name: "Success"
              });
            } else {
              // console.log("String sent unsuccessfuly");
            }
          })
        );
    }
  },
  mounted() {
    let AACE_URL_USER = "https://aace.ml/api/user/";
    let USER_ID = JSON.parse(localStorage.getItem("user")).id;
    axios
      .get(AACE_URL_USER + USER_ID, {
        responseType: "json"
      })
      .then(res => {
        this.email = res.data.email;
      });
  }
};
</script>

<style scoped></style>
