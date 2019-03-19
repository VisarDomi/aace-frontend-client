<template>
  <div class="nav-on-header smart-nav">
    <!-- <form-summary :validator="$v.first_name"/> -->
    <form @submit.prevent="apply">
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
                <div class="col-sm-9">
                  <select class="form-control" v-model="profession_id" @change="changeProfession">
                    <option v-for="option in profession_options" v-bind:value="option.id" :key="option.id">
                      {{ option.text }}
                    </option>
                  </select>
                  <div class="form-group">
                    <input
                      type="text"
                      :disabled="!profession_other"
                      class="form-control"
                      v-model="user_data.profession"
                      :placeholder="profession_other"
                    />
                  </div>
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
                <label class="col-sm-3">Pershkrim</label>
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
                          >Zgjidhni nje foto...</label
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
                              @change="handleEducationTypeChange($event, index)"
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
                                handleEducationOptionDegreeChange($event, index)
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
                                handleEducationOptionMajorChange($event, index)
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
                          >Zgjidhni nje foto...</label
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
                :key="skillInput.id"
                v-for="(skillInput, index) in skillInputs"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteSkill(skillInput.id)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="skill"
                            class="input-file"
                            :id="skillInputs[index].id"
                            multiple
                            @change="
                              handleFileUploadSkill(skillInput.id, index)
                            "
                          />
                          <label tabindex="0" :for="skillInputs[index].id" class="input-file-trigger"
                          >Zgjidhni nje foto...</label
                        >
                        
                        <p :key='i' 
                        v-for='i in skillInputs[index].files.length'
                        class="file-return">{{ skillInputs[index].files[i-1].name }}</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Emri i kualifikimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="skillInput.name"
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
                              v-model="skillInput.releaser"
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
                              v-model="skillInput.from_date"
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
                              v-model="skillInput.to_date"
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
                              v-model="skillInput.description"
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
        // industry: "",
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

      //---------------- Skill -------
      skillInputs: [],
      skill_files_index: 0
    };
  },
  components: {
    formSummary: templates.multiErrorExtractor.foundation6
  },
  methods: {
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
    handleEducationTypeChange(e, i){
      this.educationInputs[i].degree = ''
      this.educationInputs[i].field_of_study = ''
      this.educationInputs[i].education_type = this.education_type_options[e.target.value-1].text
    },
    handleEducationOptionDegreeChange(e, i) {
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
    handleEducationOptionMajorChange(e, i) {
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
        id: Math.random() * Math.random() * 1000,
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
    // ------- Skill -------
    handleFileUploadSkill(id, index) {
      let files = [];
      for (let i = 0; i < this.$refs.skill[index].files.length; i++) {
        files.push(this.$refs.skill[index].files[i]);
      }
      this.skillInputs.filter(skill => skill.id === id)[0].files = files;
    },
    onAddSkill() {
      const newSkill = {
        id: Math.random() * Math.random() * 1000,
        releaser: "",
        name: "",
        from_date: "",
        to_date: "",
        description: "",
        files: []
      };
      this.skillInputs.push(newSkill);
    },
    onDeleteSkill(id) {
      this.skillInputs = this.skillInputs.filter(skill => skill.id !== id);
    },

    send_experiences() {
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");

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
            if (this.experienceInputs[this.experience_files_index].files.length) {
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

      let resSkillInputs = [];

      // removes unnecesary keys, like (id) and (user_id)
      for (var i = 0; i < this.skillInputs.length; i++) {
        resSkillInputs.push({});
        // list of education ids
        for (var j = 0; j < Object.keys(this.skillInputs[i]).length; j++) {
          if (
            Object.keys(this.skillInputs[i])[j] != "id"
          ) {
            resSkillInputs[i][
              Object.keys(this.skillInputs[i])[j]
            ] = this.skillInputs[i][
              Object.keys(this.skillInputs[i])[j]
            ];
          }
        }
      }
      this.skillInputs = resSkillInputs;

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
            if (this.skillInputs[this.skill_files_index].files.length) {
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
                  console.log('media skill')
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
        console.log(this.educationInputs[i])
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
            if (this.educationInputs[this.education_files_index].files.length) {
              for (let j = 0;
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
                  console.log('media education')
                  if (res.status == 200) {
                  }
                })
                .catch(err => console.log(err));
            }
          });
      }
    },
    apply() {
      this.$v.user_data.$touch();
      if (this.$v.user_data.$pending || this.$v.user_data.$error) {
        console.log("errors");
        return;
      }
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

      // ------- Experience file and post -------
      this.send_experiences();
      // ------- Skill file and post -------
      this.send_skills();
      // ------- Education file and post -------
      this.send_educations();
      // ------- User file and put -------
      console.log(user_string)
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
            console.log('user post')
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
  validations: {
    user_data: {
      first_name: { required },
      last_name: { required },
      profession: { required },
      sex: { required },
      // summary: { required },
      country: { required },
      // industry: { required },
      phone: { required },
      address: { required },
      birthday: { required },
      // website: { required },
      email: { required, email }
    }
  // },
  // validations: {
  //   user_data: {
  //     first_name: {  },
  //     last_name: {  },
  //     profession: {  },
  //     sex: {  },
  //     // summary: { required },
  //     country: {  },
  //     // industry: { required },
  //     phone: {  },
  //     address: {  },
  //     birthday: {  },
  //     // website: { required },
  //     email: { }
  //   }
  },
  mounted() {
    let AACE_URL_USER = "https://aace.ml/api/user/";
    let USER_ID = JSON.parse(localStorage.getItem("user")).id;
    this.onAddExperience();
    this.onAddEducation();
    this.onAddSkill();
    this.user_data.sex = "Mashkull";
    this.user_data.profession = "Inxhinier Ndertimi";
    this.profession_id = 1;
    axios
      .get(AACE_URL_USER + USER_ID, {
        responseType: "json"
      })
      .then(res => {
        this.user_data.email = res.data.email;
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
