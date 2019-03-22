<template>
  <div class="nav-on-header smart-nav">
    <!-- <form-summary :validator="$v.first_name"/> -->
    <form @submit.prevent="onApply">
      <!-- Page header -->
      <header class="page-header">
        <div class="container page-name">
          <h1 class="text-center">Krijoni nje aplikim</h1>
          <p class="lead text-center">
            Krijoni nje aplikimin personal dhe dergojeni bordit.
          </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="form-group">
                <div class="input-file-container">
                  <input
                    class="input-file"
                    ref="profile_file"
                    id="my-file"
                    type="file"
                    @change="handleFileUploadProfile"
                  />
                  <label tabindex="0" for="my-file" class="input-file-trigger"
                    >Zgjidhni nje foto...</label
                  >
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
                  />
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
                  />
                </div>
              </div>
              <div class="form-group col-sm-12">
                <label class="col-sm-3">Profesioni</label>
                <div class="col-sm-4">
                  <select class="form-control" v-model="profession_id" @change="changeProfession">
                    <option v-for="option in profession_options" v-bind:value="option.id" :key="option.id">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div class="col-sm-5">
                  <input
                    type="text"
                    :disabled="!profession_other"
                    class="form-control"
                    v-model="user_data.profession"
                    :placeholder="profession_other"
                  />
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Gjinia</label>
                <div class="col-sm-9">
                  <select class="form-control" v-model="user_data.sex">
                    <option
                      v-for="option in sex_options"
                      v-bind:value="option.text"
                      :key="option.id">
                      {{ option.text }}
                    </option>
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

              <hr class="hr-lg" />

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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    <input
                      type="text"
                      class="form-control"
                      v-model="user_data.email"
                      disabled
                    />
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
                            class='input-file'
                            :id="educationInputs[index].id"
                            ref="education"
                            multiple
                            @change="handleFileUploadEducation(educationInput.id, index)
                            "
                          />
                        <label tabindex="0" :for="educationInputs[index].id" class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label
                        >
                        </div>
                        
                        <p :key='i' 
                        v-for='i in educationInputs[index].files.length'
                        class="file-return">{{ educationInputs[index].files[i-1].name }}</p>
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
                                >{{ option.text }}</option
                              >
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
                                >{{ option.text }}</option
                              >
                            </select>
                          </div>
                          <div class="col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_degree_other[index]"
                              class="form-control"
                              v-model="educationInput.degree"
                              placeholder="Tipi i diplomes"
                            />
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
                                >{{ option.text }}</option
                              >
                            </select>
                          </div>
                          <div class="col-sm-5">
                            <input
                              type="text"
                              :disabled="!education_major_other[index]"
                              class="form-control"
                              v-model="educationInput.field_of_study"
                              placeholder="Dega"
                            />
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
                            />
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
                            />
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
                            />
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
                <br />
                <button
                  class="btn btn-primary"
                  type="button"
                  @click="onAddEducation"
                >
                  Shto arsimim
                </button>
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
                            ref="experience"
                            class="input-file"
                            :id="experienceInputs[index].id"
                            multiple
                            @change="
                              handleFileUploadExperience(
                                experienceInput.id,
                                index
                              )
                            "
                          />
                          <label tabindex="0" :for="experienceInputs[index].id" class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label
                        >
                        
                        
                        <p :key='i' 
                        v-for='i in experienceInputs[index].files.length'
                        class="file-return">{{ experienceInputs[index].files[i-1].name }}</p>
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
                            />
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
                            />
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
                            />
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
                            />
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
                            />
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
                <br />
                <button
                  class="btn btn-primary btn-duplicator"
                  type="button"
                  @click="onAddExperience"
                >
                  Shto pervoje pune
                </button>
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
                :key="skill.skillId"
                v-for="skill in getSkills"
              >
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
                          />
                          <label tabindex="0" :for="skill.skillId" class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label
                        >
                        {{consoleLog("skill is       ", skill)}}
                        {{consoleLog("skill.files is ", skill.files)}}
                        <p
                        :key='file.name'
                        v-for='file in skill.files'
                        class="file-return"
                        >
                          {{consoleLog("file is      ", file)}}
                          {{consoleLog("file.name is ", file.name)}}
                          {{ file.name }}
                        </p>
                        </div>
                      </div>

                      <!-- <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Emri i kualifikimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="skill.name"
                              placeholder="Emri i kualifikimit"
                            />
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3"
                            >Leshuesi i kualifikimit</label
                          >
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="skill.releaser"
                              placeholder="Leshuesi i kualifikimit"
                            />
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Nga</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              v-model="skill.from_date"
                              placeholder="e.g. 2012"
                            />
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Deri ne</label>
                          <div class="col-sm-9">
                            <input
                              type="date"
                              class="form-control"
                              v-model="skill.to_date"
                              placeholder="e.g. 2016"
                            />
                          </div>
                        </div>
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3"
                            >Pershkrim i kualifikimit</label
                          >
                          <div class="col-sm-9">
                            <textarea
                              class="form-control"
                              rows="3"
                              placeholder="Pershkrim i shkurter"
                              v-model="skill.description"
                            ></textarea>
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br />
                <button
                  class="btn btn-primary btn-duplicator"
                  @click="onAddSkill"
                  type="button"
                >
                  Shto kualifikim
                </button>
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
              <button class="btn btn-success btn-xl btn-round" type="submit">
                Dergo aplikimin
              </button>
            </p>
            <form-summary :validator="$v.user_data">
              <div slot-scope="{ errorMessage }">{{ errorMessage }}</div>
            </form-summary>
            <div class="card border-info mb-3" v-if="isUploading">
              <div class="card-header">Ngarkim dokumentash</div>
              <div class="card-body text-info">
                <h5 class="card-title">Informacion</h5>
                <p class="card-text">Dokumentat po ngarkohen, ju lutem mos ikni nga faqja gjate ketij procesi.</p>
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
  SEND_EDUCATION_MEDIAS,
  SEND_EXPERIENCE_MEDIAS,
  SEND_SKILL_MEDIAS,
  SEND_EDUCATION,
  SEND_EXPERIENCE,
  SEND_SKILL
} from "@/store/actions.type"
import {
  ADD_SKILL,
  REMOVE_SKILL,
  SET_SKILL_FILES,
} from "@/store/mutations.type"
import { mapGetters } from 'vuex';

export default {
  name: "Application",
  data() {
    return {
      //--------------- User -------
      user_data: {
        first_name: "",
        last_name: "",
        summary: "",
        country: "",
        phone: "",
        address: "",
        birthday: "",
        website: "",
        email: "",
        comment_from_administrator: "",
        profession: "",
        sex: ""
      },
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
        1: [{ text: "Hidraulike", id: 1 }, { text: "Termoteknike", id: 2 }, {text:"Te tjere", id:3}],
        2: [
          { text: "Inxhinier Civil", id: 4 },
          { text: "Inxhinier Elektrik", id: 5 },
          { text: "Te tjera", id: 6 }
        ]
      },
      //---------------- Experience -------
      experienceInputs: [],
      experience_files_index: 0,

    };
  },
  components: {
    formSummary: templates.multiErrorExtractor.foundation6
  },
  methods: {
    consoleLog(message, param) {
      console.log(`message is: ${message}`);
      console.log(`param is: ${param}`);
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
    educationTypeChange(e, i){
      this.educationInputs[i].degree = ''
      this.educationInputs[i].field_of_study = ''
      this.educationInputs[i].education_type = this.education_type_options[e.target.value-1].text
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
    // ------- Application -------
    sendApplication() {
      // ------- Profile file and post -------
      this.sendProfile();
      // ------- Education file and post -------
      this.sendEducations();
      // ------- Experience file and post -------
      this.sendExperiences();
      // ------- Skill file and post -------
      this.sendSkills();
    },
    // ------- Profile picture -------
    handleFileUploadProfile(event) {
      this.profile_picture_file = this.$refs.profile_file.files[0];
    },
    sendProfile() {
      //getCurrentUser
      let user_id = this.getCurrentUser.id;
      //getCurrentToken
      let token = this.getCurrentToken;
      console.log("token ",token);
      console.log("user_id ", user_id);
      // ------- User -------
      let formDataUser = new FormData();
      formDataUser.append("file", this.profile_picture_file);
      let user_string = {
        first_name: this.user_data.first_name,
        last_name: this.user_data.last_name,
        profession: this.user_data.profession,
        sex: this.user_data.sex,
        summary: this.user_data.summary,
        country: this.user_data.country,
        phone: this.user_data.phone,
        address: this.user_data.address,
        birthday: this.user_data.birthday,
        website: this.user_data.website,
        email: this.user_data.email
      };
      console.log("user_string ", user_string)
      // ------- User file and put -------
      axios
        .all([
          axios.post(
            "https://aace.ml/api/user/" + user_id + "/media",
            formDataUser,
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + token
              }
            }
          ),
          axios.put("https://aace.ml/api/user/" + user_id, user_string, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
        ])
        .then(
          axios.spread((profileRes, stringRes) => {
            console.log('user post')
            console.log('profileRes', profileRes)
            console.log('stringRes', stringRes)
            if (stringRes.status == 200 && profileRes.status == 200) {
              console.log("Profile sent successfully.");
              localStorage.setItem("user", JSON.stringify(stringRes.data));
              console.log("usually, now the router would push")
              // this.$router.push({
              //   name: "SuccessApplication"
              // });
            } else {
              // console.log("String sent unsuccessfuly");
            }
          })
      );
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
        id: Math.random() * 1000000,
        education_type: "",
        degree: "",
        field_of_study: "",
        school: "",
        from_date: "",
        to_date: "",
        description: "",
        files: []
      };
      this.educationInputs.push(newEducation);
    },
    onDeleteEducation(id) {
      this.educationInputs = this.educationInputs.filter(
        education => education.id !== id
      );
    },
    sendEducations() {
      let user_id = this.getCurrentUser.id;
      let token = this.getCurrentToken;

      let resEducationInputs = [];

      // removes unnecesary keys, like (id) and (user_id)
      for (var i = 0; i < this.educationInputs.length; i++) {
        resEducationInputs.push({});
        // list of education ids
        for (var j = 0; j < Object.keys(this.educationInputs[i]).length; j++) {
          if (
            Object.keys(this.educationInputs[i])[j] != "id"
          ) {
            resEducationInputs[i][
              Object.keys(this.educationInputs[i])[j]
            ] = this.educationInputs[i][
              Object.keys(this.educationInputs[i])[j]
            ];
          }
        }
      }
      this.educationInputs = resEducationInputs;

      for (var i = 0; i < this.educationInputs.length; i++) {
        console.log(`this.eduationInputs[${i}]`,this.educationInputs[i])
        axios
          .post(
            "https://aace.ml/api/user/" + user_id + "/education",
            this.educationInputs[i],
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + token
              }
            }
          )
          .then(res => {
            let education_id = res.data.id;
            let formDataEducation = new FormData();
            let eduInput = this.educationInputs[this.education_files_index]
            if (eduInput.files.length) {
              for (let j = 0; j < eduInput.files.length; j++) {
                formDataEducation.append("file", eduInput.files[j]);
              }
              this.education_files_index++;
              let payload = { user_id, education_id, formDataEducation }
              this.$store.dispatch(SEND_EDUCATION_MEDIAS, payload)
            }
          });
      }
    },
    // ------- Experience -------
    handleFileUploadExperience(id, index) {
      let files = [];
      for (let i = 0; i < this.$refs.experience[index].files.length; i++) {
        files.push(this.$refs.experience[index].files[i]);
      }
      this.experienceInputs.filter(
        experience => experience.id === id
      )[0].files = files;
    },
    onAddExperience() {
      const newExperience = {
        id: Math.random() * 1000000,
        employer: "",
        title: "",
        location: "",
        from_date: "",
        to_date: "",
        is_currently_work_here: false,
        description: "",
        files: []
      };
      this.experienceInputs.push(newExperience);
    },
    onDeleteExperience(id) {
      this.experienceInputs = this.experienceInputs.filter(
        experience => experience.id !== id
      );
    },
    sendExperiences() {
      let user_id = this.getCurrentUser.id;
      let token = this.getCurrentToken;

      let resExperienceInputs = [];

      // removes unnecesary keys, like (id) and (user_id)
      for (var i = 0; i < this.experienceInputs.length; i++) {
        resExperienceInputs.push({});
        // list of education ids
        for (var j = 0; j < Object.keys(this.experienceInputs[i]).length; j++) {
          if (
            Object.keys(this.experienceInputs[i])[j] != "id"
          ) {
            resExperienceInputs[i][
              Object.keys(this.experienceInputs[i])[j]
            ] = this.experienceInputs[i][
              Object.keys(this.experienceInputs[i])[j]
            ];
          }
        }
      }
      this.experienceInputs = resExperienceInputs;

      for (var i = 0; i < this.experienceInputs.length; i++) {
        axios
          .post(
            "https://aace.ml/api/user/" + user_id + "/experience",
            this.experienceInputs[i],
            {
              headers: {
                Authorization: "Bearer " + token
              }
            }
          )
          .then(res => {
            let experience_id = res.data.id;
            let formDataExperience = new FormData();
            let expInput = this.experienceInputs[this.experience_files_index]
            if (expInput.files.length) {
              for (let j = 0; j < expInput.files.length; j++) {
                formDataExperience.append("file", expInput.files[j]);
              }
              this.experience_files_index++;
              let payload = { user_id, experience_id, formDataExperience }
              this.$store.dispatch(SEND_EXPERIENCE_MEDIAS, payload)
            }
          });
      }
    },
    // ------- Skill -------
    handleFileUploadSkill(skillId) {
      console.log("handling file upload skill")
      self = this
      this.$store.commit(SET_SKILL_FILES, { self, skillId })
    },
    onAddSkill() {
      console.log("adding skill")
      this.$store.commit(ADD_SKILL)
    },
    onDeleteSkill(skillId) {
      console.log(`removing skill ${skillId}`)
      this.$store.commit(REMOVE_SKILL, skillId)
    },
    sendSkills() {
      let user_id = this.getCurrentUser.id;
      let token = this.getCurrentToken;

      for (let skill of this.$store.state.skills) {
        delete skill.skillId
      }

      // loop through all the skills
      for (let skill of this.$store.state.skills) {
        // let skill = skill
        // let payload = { user_id, skill }
        // this.$store.dispatch(SEND_SKILL, payload)
        axios
          .post(
            "https://aace.ml/api/user/" + user_id + "/skill",
            skill,
            {
              "Content-Type": "multipart/form-data",
              headers: {
                Authorization: "Bearer " + token
              }
            }
          )
          .then(res => {
            let skillId = res.data.id;
            let formDataSkill = new FormData();
            if (skill.files.length) {
              for (let file of skill.files) {
                formDataSkill.append( "file", file);
              }
              // send medias
              let payload = { user_id, skillId, formDataSkill }
              this.$store.dispatch(SEND_SKILL_MEDIAS, payload)
            }
          });
      }
    },
    // -----------------
    onApply() {
      this.$v.user_data.$touch();
      if (this.$v.user_data.$pending || this.$v.user_data.$error) {
        console.log("errors");
        return;
      }
      this.sendApplication()
    }
  },
  computed: {
    ...mapGetters([
      "getCurrentUser",
      "getCurrentToken",
      "isUploading",
      "getSkills",
      "getTotalSkills"
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
    let AACE_URL_USER = "https://aace.ml/api/user/";
    let USER_ID = JSON.parse(localStorage.getItem("user")).id;
    // this.onAddExperience();
    // this.onAddEducation();
    // this.onAddSkill();
    this.user_data.sex = "Mashkull";
    this.user_data.profession = "Inxhinier Ndertimi";
    this.profession_id = 1;
    axios
      .get(AACE_URL_USER + USER_ID, {
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
      }
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
