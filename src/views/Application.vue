<template>
  <div class="nav-on-header smart-nav">
    <!-- <form-summary :validator="$v.first_name"/> -->
    <form @submit.prevent="onApply">
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
                <div class="input-file-container">
                  <input
                    class="input-file"
                    ref="profile"
                    id="my-file"
                    type="file"
                    @change="handleFileUploadProfile"
                  >
                  <label tabindex="0" for="my-file" class="input-file-trigger">Zgjidhni nje foto...</label>
                </div>
                <p class="file-return">{{ profile_picture_file.name }}</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-8">
              <div class="form-group col-sm-12">
                <label class="col-sm-3">Emri</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Emri"
                    v-model="user_data.first_name"
                  >
                </div>
              </div>
              <div class="form-group col-sm-12">
                <label class="col-sm-3">Mbiemri</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Mbiemri"
                    v-model="user_data.last_name"
                  >
                </div>
              </div>
              <div class="form-group col-sm-12">
                <label class="col-sm-3">Profesioni</label>
                <div class="col-sm-4">
                  <select class="form-control" v-model="profession_id" @change="changeProfession">
                    <option
                      v-for="option in profession_options"
                      v-bind:value="option.id"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
                </div>
                <div class="col-sm-5">
                  <input
                    type="text"
                    :disabled="!profession_other"
                    class="form-control"
                    v-model="user_data.profession"
                    :placeholder="profession_other"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Gjinia</label>
                <div class="col-sm-9">
                  <select class="form-control" v-model="user_data.sex">
                    <option
                      v-for="option in sex_options"
                      v-bind:value="option.text"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Pershkrimi</label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Pershkrim i shkurter rreth jush"
                    v-model="user_data.summary"
                  ></textarea>
                </div>
              </div>

              <hr class="hr-lg">

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Vendlindja</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-map-pin"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Vendlindja"
                      v-model="user_data.country"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Ditelindja</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-birthday-cake"></i>
                    </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Datelindja"
                      v-model="user_data.birthday"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Adresa</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-map-marker"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Adresa"
                      v-model="user_data.address"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Faqja e internetit</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-globe"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Faqja juaj e internetit"
                      v-model="user_data.website"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Numri i telefonit</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-phone"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Numri telefonit"
                      v-model="user_data.phone"
                    >
                  </div>
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Emaili</label>
                <div class="col-sm-9">
                  <div class="input-group input-group-sm">
                    <span class="input-group-addon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <input type="text" class="form-control" v-model="user_data.email" disabled>
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
                        <!-- <div class="form-group"> -->
                        <div class="input-file-container">
                          <input
                            type="file"
                            class="input-file"
                            :id="educationInputs[index].id"
                            ref="educations"
                            multiple
                            @change="handleFileUploadEducation(educationInput.id, index)
                            "
                          >
                          <label
                            tabindex="0"
                            :for="educationInputs[index].id"
                            class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label>
                        </div>

                        <p
                          :key="i"
                          v-for="i in educationInputs[index].files.length"
                          class="file-return"
                        >{{ educationInputs[index].files[i-1].name }}</p>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Lloji i arsimimit</label>
                          <div class="col-sm-9">
                            <select
                              class="form-control"
                              v-model="education_type_id[index]"
                              @change="educationTypeChange($event, index)"
                            >
                              <option
                                v-for="option in education_type_options"
                                v-bind:value="option.id"
                                :key="option.id"
                              >{{ option.text }}</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Tipi i diplomes</label>
                          <div class="col-sm-4">
                            <select
                              class="form-control"
                              v-model="education_degree_id[index]"
                              @change="
                                educationDegreeChange($event, index)
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
                          <div class="col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_degree_other[index]"
                              class="form-control"
                              v-model="educationInput.degree"
                              placeholder="Tipi i diplomes"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Dega</label>
                          <div class="col-sm-4">
                            <select
                              class="form-control"
                              v-model="education_major_id[index]"
                              @change="
                                educationMajorChange($event, index)
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
                          <div class="col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_major_other[index]"
                              class="form-control"
                              v-model="educationInput.field_of_study"
                              placeholder="Dega"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Emri i shkolles</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="educationInput.school"
                              placeholder="Emri i shkolles, psh Universiteti Politeknik i Tiranes"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Nga</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2012"
                              v-model="educationInput.from_date"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Deri ne</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2016"
                              v-model="educationInput.to_date"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Pershkrim i arsimit</label>
                          <div class="col-sm-9">
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
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="experiences"
                            class="input-file"
                            :id="experienceInputs[index].id"
                            multiple
                            @change="
                              handleFileUploadExperience(
                                experienceInput.id,
                                index
                              )
                            "
                          >
                          <label
                            tabindex="0"
                            :for="experienceInputs[index].id"
                            class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label>

                          <p
                            :key="i"
                            v-for="i in experienceInputs[index].files.length"
                            class="file-return"
                          >{{ experienceInputs[index].files[i-1].name }}</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Titulli</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="experienceInput.title"
                              placeholder="Titulli qe keni mbajtur ne pune"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Punedhenesi</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="experienceInput.employer"
                              placeholder="Emri i punedhenesit"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Vendndodhja</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="experienceInput.location"
                              placeholder="Vendi ku keni punuar"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Nga</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              v-model="experienceInput.from_date"
                              placeholder="e.g. 2012"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Deri ne</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              v-model="experienceInput.to_date"
                              placeholder="e.g. 2016"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Pershkrim i punes</label>
                          <div class="col-sm-9">
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
              <div class="col-xs-12" v-for="skill in getAppSkills" :key="skill.skillId">
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteSkill(skill.skillId)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="skills"
                            class="input-file"
                            :id="skill.skillId"
                            multiple
                            @change="handleFileUploadSkill(skill.skillId)"
                          >
                          <label
                            tabindex="0"
                            :for="skill.skillId"
                            class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label>
                          <p
                            v-for="(file, index) in skill.files"
                            :key="index"
                            class="file-return"
                          >{{ file.name }}</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Emri i kualifikimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="skill.name"
                              @change="updateSkillField(skill.skillId, 'name', $event.target.value)"
                              placeholder="Emri i kualifikimit"
                            >
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Leshuesi i kualifikimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="skill.releaser"
                              @change="updateSkillField(skill.skillId, 'releaser', $event.target.value)"
                              placeholder="Leshuesi i kualifikimit"
                            >
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Nga</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              :value="skill.from_date"
                              @change="updateSkillField(skill.skillId, 'from_date', $event.target.value)"
                              placeholder="e.g. 2012"
                            >
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Deri ne</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              :value="skill.to_date"
                              @change="updateSkillField(skill.skillId, 'to_date', $event.target.value)"
                              placeholder="e.g. 2016"
                            >
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Pershkrim i kualifikimit</label>
                          <div class="col-sm-9">
                            <textarea
                              class="form-control"
                              :value="skill.description"
                              @change="updateSkillField(skill.skillId, 'description', $event.target.value)"
                              rows="3"
                              placeholder="Pershkrim i shkurter"
                            ></textarea>
                          </div>
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
            <form-summary :validator="$v.user_data">
              <div slot-scope="{ errorMessage }">{{ errorMessage }}</div>
            </form-summary>
            <div class="card border-info mb-3" v-if="isUploading">
              <div class="card-header">Ngarkim dokumentash</div>
              <div class="card-body text-info">
                <h5 class="card-title">Informacion</h5>
                <p
                  class="card-text"
                >Dokumentat po ngarkohen, ju lutem mos ikni nga faqja gjate ketij procesi.</p>
              </div>
            </div>
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
import { required, email } from "vuelidate/lib/validators";
import { templates } from "vuelidate-error-extractor";
import store from "@/store";
import {
  SEND_PROFILE_MEDIAS,
  SEND_EDUCATION_MEDIAS,
  SEND_EXPERIENCE_MEDIAS,
  SEND_SKILL_MEDIAS,
  UPDATE_PROFILE,
  SEND_EDUCATION,
  SEND_EXPERIENCE,
  SEND_SKILL,
  SEND_EDUCATIONS,
  SEND_EXPERIENCES,
  SEND_SKILLS,
  SEND_APPLICATION
} from "@/store/actions.type";
import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
  UPDATE_SKILL
} from "@/store/mutations.type";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Application",
  data() {
    return {
      //--------------- User -------
      user_data: this.getAppProfile,
      profession_other: false,
      profession_id: "",
      profession_options: [
        { text: "Inxhinier Ndertimi", id: 1 },
        { text: "Inxhinier Civil", id: 2 },
        { text: "Inxhinier Mekanik", id: 3 },
        { text: "Te tjere", id: 4 }
      ],

      sex_options: [{ text: "Mashkull", id: 1 }, { text: "Femer", id: 2 }],

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
        1: [
          { text: "Pergjithshme", id: 1 },
          { text: "Teknike", id: 2 },
          { text: "Te tjere", id: 3 }
        ],
        2: [
          { text: "Bachelor", id: 4 },
          { text: "Master", id: 5 },
          { text: "Diplom", id: 6 },
          { text: "Te tjera", id: 7 }
        ]
      },

      education_major_id: [],
      education_major_other: [false],
      education_major_options: {
        1: [
          { text: "Hidraulike", id: 1 },
          { text: "Termoteknike", id: 2 },
          { text: "Te tjere", id: 3 }
        ],
        2: [
          { text: "Inxhinier Civil", id: 4 },
          { text: "Inxhinier Elektrik", id: 5 },
          { text: "Te tjera", id: 6 }
        ]
      },
      //---------------- Experience -------
      experienceInputs: [],
      experience_files_index: 0
    };
  },
  components: {
    formSummary: templates.multiErrorExtractor.foundation6
  },
  methods: {
    consoleLog(message, param) {
      console.log(`message is: `, message);
      console.log(`param is:   `, param);
      console.log(`store is:   `, this.$store);
    },
    // All the functions bellow need to be integrated in the store
    // ------- Dropdown -------
    changeProfession() {
      if (event.target.value == 4) {
        this.profession_other = true;
        this.user_data.profession = "Fut profesionin";
      } else {
        this.profession_other = false;
        this.user_data.profession = this.profession_options[
          event.target.value - 1
        ].text;
      }
    },
    educationTypeChange(e, i) {
      this.educationInputs[i].degree = "";
      this.educationInputs[i].field_of_study = "";
      this.educationInputs[i].education_type = this.education_type_options[
        e.target.value - 1
      ].text;
    },
    educationDegreeChange(e, i) {
      let educationOptionId = e.target.value;
      if (educationOptionId == 7 || educationOptionId == 3) {
        this.education_degree_other[i] = true;
        this.educationInputs[i].degree = "Fut tipin e diplomes";
      } else {
        this.education_degree_other[i] = false;
        if (this.education_type_id[i] == 1)
          this.educationInputs[i].degree = this.education_degree_options[
            this.education_type_id[i]
          ][educationOptionId - 1].text;
        else
          this.educationInputs[i].degree = this.education_degree_options[
            this.education_type_id[i]
          ][educationOptionId - 4].text;
      }
    },
    educationMajorChange(e, i) {
      let educationOptionId = e.target.value;
      if (educationOptionId == 6 || educationOptionId == 3) {
        this.education_major_other[i] = true;
        this.educationInputs[i].field_of_study = "Fut degen";
      } else {
        this.education_major_other[i] = false;
        if (this.education_type_id[i] == 1)
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 1].text;
        else
          this.educationInputs[i].field_of_study = this.education_major_options[
            this.education_type_id[i]
          ][educationOptionId - 4].text;
      }
    },
    // ------- Profile picture -------
    handleFileUploadProfile() {
      let self = this;
      this.$store.commit(SET_PROFILE_FILES, { self });
    },
    updateProfileField( field, value) {
      let payload = { [field]: value };
      this.$store.commit(UPDATE_PROFILE, payload);
    },
    // ------- Education -------
    handleFileUploadEducation(educationId) {
      let self = this;
      this.$store.commit(SET_EDUCATION_FILES, { self, educationId });
    },
    updateEducationField(educationId, field, value) {
      let payload = { educationId, [field]: value };
      this.$store.commit(UPDATE_EDUCATION, payload);
    },
    onAddEducation() {
      this.$store.commit(ADD_EDUCATION);
    },
    onDeleteEducation(educationId) {
      this.$store.commit(REMOVE_EDUCATION, educationId);
    },
    // ------- Experience -------
    handleFileUploadExperience(experienceId) {
      let self = this;
      this.$store.commit(SET_EXPERIENCE_FILES, { self, experienceId });
    },
    updateExperienceField(experienceId, field, value) {
      let payload = { experienceId, [field]: value };
      this.$store.commit(UPDATE_EXPERIENCE, payload);
    },
    onAddExperience() {
      this.$store.commit(ADD_EXPERIENCE);
    },
    onDeleteExperience(experienceId) {
      this.$store.commit(REMOVE_EXPERIENCE, experienceId);
    },
    // ------- Skill -------
    handleFileUploadSkill(skillId) {
      let self = this;
      this.$store.commit(SET_SKILL_FILES, { self, skillId });
    },
    updateSkillField(skillId, field, value) {
      let payload = { skillId, [field]: value };
      this.$store.commit(UPDATE_SKILL, payload);
    },
    onAddSkill() {
      this.$store.commit(ADD_SKILL);
    },
    onDeleteSkill(skillId) {
      this.$store.commit(REMOVE_SKILL, skillId);
    },
    // ------- Application -------
    onApply() {
      // this.$v.user_data.$touch();
      // if (this.$v.user_data.$pending || this.$v.user_data.$error) {
      //   console.log("errors");
      //   return;
      // }
      let self = this;
      this.$store.dispatch(SEND_APPLICATION, { self });
    }
  },
  computed: {
    ...mapGetters([
      "getCurrentUser",
      "getCurrentToken",
      "isUploading",
      "getAppProfile",
      "getAppEducations",
      "getAppExperiences",
      "getAppSkills"
    ])
  },
  validations: {
    user_data: {
      first_name: { required },
      last_name: { required },
      profession: { required },
      sex: { required },
      // summary: { required },
      country: { required },
      phone: { required },
      address: { required },
      birthday: { required },
      // website: { required },
      email: { required, email }
    }
  },
  mounted() {
    let aaceUrl = "https://aace.ml/api/";
    let userId = this.getCurrentUser;
    // this.onAddExperience();
    // this.onAddEducation();
    // this.onAddSkill();
    this.user_data.sex = "Mashkull";
    this.user_data.profession = "Inxhinier Ndertimi";
    this.profession_id = 1;
    axios
      .get(aaceUrl + "user/" + userId, {
        responseType: "json"
      })
      .then(res => {
        // this.user_data.email = res.data.email;
        this.user_data = {
          first_name: "Test",
          last_name: `Numer${res.data.id}`,
          summary: "Pershkrim koti",
          country: "Kukes",
          phone: "0135345325",
          address: "Rruga koti",
          birthday: "1990-12-31",
          website: "skam",
          email: res.data.email,
          profession: "Inxhinier Ndertimi",
          sex: "Mashkull"
        };
      });
  }
};

//input file
document.querySelector("html").classList.add("js");

// var fileInput = document.querySelector(".input-file"),
//   button = document.querySelector(".input-file-trigger"),
//   the_return = document.querySelector(".file-return");

//---------------
</script>

<style scoped>
.input-file-container {
  position: relative;
  width: 225px;
}
.js .input-file-trigger {
  display: block;
  padding: 14px 45px;
  background: #39d2b4;
  color: #fff;
  font-size: 1em;
  transition: all 0.4s;
  cursor: pointer;
}
.js .input-file {
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
}
.js .input-file:hover + .input-file-trigger,
.js .input-file:focus + .input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
  background: #34495e;
  color: #39d2b4;
}

.file-return {
  margin: 0;
}
.file-return:not(:empty) {
  margin: 1em 0;
}
.js .file-return {
  font-style: italic;
  font-size: 0.9em;
  font-weight: bold;
}
.js .file-return:not(:empty):before {
  content: "Fotoja e zgjedhur: ";
  font-style: normal;
  font-weight: normal;
}
</style>
