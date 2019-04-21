<template>
  <div class="nav-on-header smart-nav">
    <form @submit.prevent="onApply">
      <!-- Page header -->
      <header class="page-header">
        <div class="container page-name">
          <h1 class="text-center">Rregullo aplikimin</h1>
          <p
            class="lead text-center"
          >Rregulloni aplikimin sipas udhezimit te komentit te administratorit.</p>
        </div>

        <div class="container">
          <header class="section-header">
            <h2>Udhezime nga administratori</h2>
            <p style="color: #dd4466">{{ getCurrentUser.comment_from_administrator }}</p>
          </header>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="input-file-container">
                <input
                  type="file"
                  ref="profile"
                  class="input-file"
                  :id="'profile' + getCurrentUser.id"
                  @change="handleFileUploadProfile()"
                >
                <label
                  tabindex="0"
                  :for="'profile' + getCurrentUser.id"
                  class="input-file-trigger"
                >Zgjidhni nje foto profili...</label>
                <p
                  v-for="(file, index) in getReappProfile.files"
                  :key="index"
                  class="file-return"
                >{{ file.name }}</p>
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
                    :value="getReappProfile.first_name"
                    @change="updateProfileField('first_name', $event.target.value)"
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
                    :value="getReappProfile.last_name"
                    @change="updateProfileField('last_name', $event.target.value)"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Profesioni</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    :value="professionSelectedValue()"
                    @change="changeProfessionSelectedValue('profession', $event.target.value, $event)"
                  >
                    <option
                      v-for="option in getReappProfile.professionDropdown.professionOptions"
                      :value="option.text"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
                </div>
                <div class="col-sm-5">
                  <input
                    type="text"
                    :disabled="!getReappProfile.professionDropdown.isProfessionInputEnabled"
                    class="form-control"
                    :value="getReappProfile.profession"
                    @change="updateProfileField('profession', $event.target.value)"
                    placeholder="Profesioni juaj, psh inxhinier ndertimi"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Gjinia</label>
                <div class="col-sm-9">
                  <select
                    class="form-control"
                    :value="getReappProfile.sex"
                    @change="updateProfileField('sex', $event.target.value)"
                  >
                    <option
                      v-for="option in getReappProfile.sexOptions"
                      :value="option.text"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
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
                      :value="getReappProfile.country"
                      @change="updateProfileField('country', $event.target.value)"
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
                      :value="getReappProfile.birthday"
                      @change="updateProfileField('birthday', $event.target.value)"
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
                      :value="getReappProfile.address"
                      @change="updateProfileField('address', $event.target.value)"
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
                      :value="getReappProfile.website"
                      @change="updateProfileField('website', $event.target.value)"
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
                      :value="getReappProfile.phone"
                      @change="updateProfileField('phone', $event.target.value)"
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
                    <input
                      type="text"
                      class="form-control"
                      :value="getReappProfile.email"
                      @change="updateProfileField('email', $event.target.value)"
                      disabled
                    >
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
        <section></section>
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
                v-for="education in getReappEducations"
                :key="'education' + education.educationId"
              >
                <div class="item-block">
                  <div class="item-form">
                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="educations"
                            class="input-file"
                            :id="'education' + education.educationId"
                            multiple
                            @change="handleFileUploadEducation(education.educationId)"
                          >
                          <label
                            tabindex="0"
                            :for="'education' + education.educationId"
                            class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label>
                          <p
                            v-for="(file, index) in education.files"
                            :key="index"
                            class="file-return"
                          >{{ file.name }}</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <!-- <div class="form-group col-sm-12">
                          <label class="col-sm-3">Lloji i arsimimit</label>
                          <div class="col-sm-9">
                            <select
                              class="form-control"
                              :value="education.education_type"
                              @change="updateEducationField(education.educationId, 'education_type', $event.target.value)"
                            >
                              <option
                                v-for="option in education.educationTypeOptions"
                                :value="option.text"
                                :key="option.id"
                              >{{ option.text }}</option>
                            </select>
                          </div>
                        </div>-->

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Lloji i arsimimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="education.education_type"
                              @change="updateEducationField(education.educationId, 'education_type', $event.target.value)"
                              placeholder="Lloji i arsimit, psh shkolle e mesme, ose shkolle e larte"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Tipi i diplomes</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="education.degree"
                              @change="updateEducationField(education.educationId, 'degree', $event.target.value)"
                              placeholder="Tipi i diplomes, psh Bachelor, ose e mesme e pergjithshme"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Dega</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="education.field_of_study"
                              @change="updateEducationField(education.educationId, 'field_of_study', $event.target.value)"
                              placeholder="Dega, psh inxhinieri ndertimi"
                            >
                          </div>
                        </div>

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Emri i shkolles</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="education.school"
                              @change="updateEducationField(education.educationId, 'school', $event.target.value)"
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
                              :value="education.from_date"
                              @change="updateEducationField(education.educationId, 'from_date', $event.target.value)"
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
                              :value="education.to_date"
                              @change="updateEducationField(education.educationId, 'to_date', $event.target.value)"
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
                              :value="education.description"
                              @change="updateEducationField(education.educationId, 'description', $event.target.value)"
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
                  @click="addEducation"
                  type="button"
                >Shto arsimim</button>
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
                v-for="experience in getReappExperiences"
                :key="'experience' + experience.experienceId"
              >
                <div class="item-block">
                  <div class="item-form">
                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="experiences"
                            class="input-file"
                            :id="'experience' + experience.experienceId"
                            multiple
                            @change="handleFileUploadExperience(experience.experienceId)"
                          >
                          <label
                            tabindex="0"
                            :for="'experience' + experience.experienceId"
                            class="input-file-trigger"
                          >Zgjidhni nje ose me shume dokumenta...</label>

                          <p
                            v-for="(file, index) in experience.files"
                            :key="index"
                            class="file-return"
                          >{{ file.name }}</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Titulli</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="experience.title"
                              @change="updateExperienceField(experience.experienceId, 'title', $event.target.value)"
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
                              :value="experience.employer"
                              @change="updateExperienceField(experience.experienceId, 'employer', $event.target.value)"
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
                              :value="experience.location"
                              @change="updateExperienceField(experience.experienceId, 'location', $event.target.value)"
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
                              :value="experience.from_date"
                              @change="updateExperienceField(experience.experienceId, 'from_date', $event.target.value)"
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
                              :value="experience.to_date"
                              @change="updateExperienceField(experience.experienceId, 'to_date', $event.target.value)"
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
                              :value="experience.description"
                              @change="updateExperienceField(experience.experienceId, 'description', $event.target.value)"
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
                  @click="addExperience"
                  type="button"
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
              <div class="col-xs-12" v-for="skill in getReappSkills" :key="'skill' + skill.skillId">
                <div class="item-block">
                  <div class="item-form">
                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="input-file-container">
                          <input
                            type="file"
                            ref="skills"
                            class="input-file"
                            :id="'skill' + skill.skillId"
                            multiple
                            @change="handleFileUploadSkill(skill.skillId)"
                          >
                          <label
                            tabindex="0"
                            :for="'skill' + skill.skillId"
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
                  @click="addSkill"
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
                meposhtem per te derguar aplikimin per rivleresim.
              </p>
            </header>

            <p class="text-center">
              <button
                class="btn btn-success btn-xl btn-round"
                type="submit"
                :disabled="isLoading"
              >Dergo aplikimin</button>
            </p>
            <!-- <form-summary :validator="$v.user_data">
              <div slot-scope="{ errorMessage }">{{ errorMessage }}</div>
            </form-summary>-->
            <div class="card border-info mb-3 become-centered" v-if="isLoading">
              <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="card-header">Ngarkim dokumentash</div>
              <div class="card-body text-info">
                <h5 class="card-title">Informacion</h5>
                <p
                  class="card-text"
                >Dokumentat po ngarkohen, ju lutem mos ikni nga faqja gjate ketij procesi.</p>
                <p
                  class="card-text"
                >Ne mbarim te procesit do te ridrejtoheni automatikisht ne faqen e suksesit.</p>
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
  RE_UPLOAD,
  RE_GET_PROFILE,
  RE_GET_EDUCATIONS,
  RE_GET_EXPERIENCES,
  RE_GET_SKILLS,
  SEND_EDUCATION,
  SEND_EXPERIENCE,
  SEND_SKILL
} from "@/store/actions.type";
import {
  RE_TOGGLE_PROFESSION_INPUT,
  RE_SET_PROFILE_FILES,
  RE_SET_APP_PROFILE,
  RE_SET_EDUCATION_FILES,
  RE_UPDATE_EDUCATION,
  RE_SET_EXPERIENCE_FILES,
  RE_UPDATE_EXPERIENCE,
  RE_SET_SKILL_FILES,
  RE_UPDATE_SKILL
} from "@/store/mutations.type";
import { mapGetters, mapState } from "vuex";
import {
  baseEducation,
  baseExperience,
  baseSkill
} from "@/store/modules/application/common";

export default {
  name: "Reapplication",
  data() {
    return {
      //profile validation
      user_data: this.getReappProfile
    };
  },
  components: {
    formSummary: templates.multiErrorExtractor.foundation6
  },
  methods: {
    consoleLog(message, params) {
      console.log(`message is: `, message);
      for (let param of params) {
        console.log(`param is:   `, param);
      }
      console.log(`store is:   `, this.$store);
    },
    // common code
    isEnabled(event) {
      let enabled = false;
      if (
        event.srcElement.options.selectedIndex ==
        event.srcElement.options.length - 1
      ) {
        enabled = true;
      } else {
        enabled = false;
      }
      return enabled;
    },
    // ------- Profile picture -------
    handleFileUploadProfile() {
      let vm = this;
      this.$store.commit(RE_SET_PROFILE_FILES, { vm });
    },
    professionSelectedValue() {
      let first = this.getReappProfile.professionDropdown.professionOptions[0]
        .text;
      let second = this.getReappProfile.professionDropdown.professionOptions[1]
        .text;
      let third = this.getReappProfile.professionDropdown.professionOptions[2]
        .text;
      let last = this.getReappProfile.professionDropdown.professionOptions[3]
        .text;
      let profession = this.getReappProfile.profession;
      if (
        !(profession == first) &&
        !(profession == second) &&
        !(profession == third) &&
        !(profession == "")
      ) {
        profession = last;
      }
      return profession;
    },
    changeProfessionSelectedValue(field, value, event) {
      let enabled = this.isEnabled(event);
      this.$store.commit(RE_TOGGLE_PROFESSION_INPUT, { enabled });
      let payload = { [field]: value };
      this.$store.commit(RE_SET_APP_PROFILE, payload);
    },
    updateProfileField(field, value) {
      let payload = { [field]: value };
      this.$store.commit(RE_SET_APP_PROFILE, payload);
    },
    // ------- Education -------
    handleFileUploadEducation(educationId) {
      let vm = this;
      this.$store.commit(RE_SET_EDUCATION_FILES, { vm, educationId });
    },
    updateEducationField(educationId, field, value) {
      let payload = { educationId, [field]: value };
      this.$store.commit(RE_UPDATE_EDUCATION, payload);
      console.log("store is", this.$store);
    },
    async addEducation() {
      let education = { ...baseEducation };
      education.from_date = "1999-12-30";
      education.to_date = "1999-12-31";
      let userId = this.getCurrentUser.id;
      let payload = { userId, education };
      await this.$store.dispatch(SEND_EDUCATION, payload);
      let vm = this;
      await this.$store.dispatch(RE_GET_EDUCATIONS, { vm });
    },
    // ------- Experience -------
    handleFileUploadExperience(experienceId) {
      let vm = this;
      this.$store.commit(RE_SET_EXPERIENCE_FILES, { vm, experienceId });
    },
    updateExperienceField(experienceId, field, value) {
      let payload = { experienceId, [field]: value };
      this.$store.commit(RE_UPDATE_EXPERIENCE, payload);
    },
    async addExperience() {
      let experience = { ...baseExperience };
      experience.from_date = "1999-12-30";
      experience.to_date = "1999-12-31";
      let userId = this.getCurrentUser.id;
      let payload = { userId, experience };
      await this.$store.dispatch(SEND_EXPERIENCE, payload);
      let vm = this;
      await this.$store.dispatch(RE_GET_EXPERIENCES, { vm });
    },
    // ------- Skill -------
    handleFileUploadSkill(skillId) {
      let vm = this;
      this.$store.commit(RE_SET_SKILL_FILES, { vm, skillId });
    },
    updateSkillField(skillId, field, value) {
      let payload = { skillId, [field]: value };
      this.$store.commit(RE_UPDATE_SKILL, payload);
    },
    async addSkill() {
      let skill = { ...baseSkill };
      skill.from_date = "1999-12-30";
      skill.to_date = "1999-12-31";
      let userId = this.getCurrentUser.id;
      let payload = { userId, skill };
      await this.$store.dispatch(SEND_SKILL, payload);
      let vm = this;
      await this.$store.dispatch(RE_GET_SKILLS, { vm });
    },
    // ------- Application -------
    onApply() {
      // this.$v.user_data.$touch();
      // if (this.$v.user_data.$pending || this.$v.user_data.$error) {
      //   console.log("errors");
      //   return;
      // }
      let vm = this;
      this.$store.dispatch(RE_UPLOAD, { vm });
    }
  },
  computed: {
    ...mapGetters([
      "getCurrentUser",
      "getCurrentToken",
      "isLoading",
      "getReappProfile",
      "getReappEducations",
      "getReappExperiences",
      "getReappSkills"
    ])
  },
  validations: {
    user_data: {
      first_name: { required },
      last_name: { required },
      profession: { required },
      sex: { required },
      country: { required },
      phone: { required },
      address: { required },
      birthday: { required },
      email: { required, email }
    }
  },
  mounted() {
    // get user data from server
    let vm = this;
    this.$store.dispatch(RE_GET_PROFILE, { vm });
    this.$store.dispatch(RE_GET_EDUCATIONS, { vm });
    this.$store.dispatch(RE_GET_EXPERIENCES, { vm });
    this.$store.dispatch(RE_GET_SKILLS, { vm });
  }
};

document.querySelector("html").classList.add("js");
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
