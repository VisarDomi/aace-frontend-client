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
              <div class="input-file-container">
                <input
                  type="file"
                  ref="profile"
                  class="input-file"
                  :id="getCurrentUser.id"
                  @change="handleFileUploadProfile()"
                >
                <label
                  tabindex="0"
                  :for="getCurrentUser.id"
                  class="input-file-trigger"
                >Zgjidhni nje foto profili...</label>
                <p
                  v-for="(file, index) in getAppProfile.files"
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
                    :value="getAppProfile.first_name"
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
                    :value="getAppProfile.last_name"
                    @change="updateProfileField('last_name', $event.target.value)"
                  >
                </div>
              </div>

              <!-- <div class="form-group col-sm-12">
                <label class="col-sm-3">Profesioni</label>
                <div class="col-sm-4">
                  <select class="form-control"
                    :value="getAppProfile.profession"
                    @change="updateProfileField('profession', $event.target.value)"
                  >
                    <option
                      v-for="option in profession_options"
                      :value="option.id"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
                </div>
                <div class="col-sm-5">
                  <input
                    type="text"
                    :disabled="!profession_other"
                    class="form-control"
                    :value="getAppProfile.profession"
                    @change="updateProfileField('profession', $event.target.value)"
                    :placeholder="profession_other"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Gjinia</label>
                <div class="col-sm-9">
                  <select
                    class="form-control"
                    :value="getAppProfile.sex"
                    @change="updateProfileField('sex', $event.target.value)"
                  >
                    <option
                      v-for="option in this.sex_options"
                      :value="option.text"
                      :key="option.id"
                    >{{ option.text }}</option>
                  </select>
                </div>
              </div> -->

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Profesioni</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Profesioni juaj"
                    :value="getAppProfile.profession"
                    @change="updateProfileField('profession', $event.target.value)"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Gjinia</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Gjinia juaj"
                    :value="getAppProfile.sex"
                    @change="updateProfileField('sex', $event.target.value)"
                  >
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
                      :value="getAppProfile.country"
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
                      :value="getAppProfile.birthday"
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
                      :value="getAppProfile.address"
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
                      :value="getAppProfile.website"
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
                      :value="getAppProfile.phone"
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
                      :value="getAppProfile.email"
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
                v-for="education in getAppEducations"
                :key="'education' + education.educationId"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteEducation(education.educationId)"
                      type="button"
                    >
                      <i class="ti-close"></i>
                    </button>

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
                              :value="education.school"
                              @change="updateEducationField(education.educationId, 'school', $event.target.value)"
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
                        </div>-->

                        <div class="form-group col-sm-12">
                          <label class="col-sm-3">Lloji i arsimimit</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              :value="education.education_type"
                              @change="updateEducationField(education.educationId, 'education_type', $event.target.value)"
                              placeholder="Lloji i arsimimit, psh Arsim i larte"
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
                              placeholder="Tipi i diplomes, psh Bachelor"
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
                  @click="onAddEducation"
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
                v-for="experience in getAppExperiences"
                :key="'experience' + experience.experienceId"
              >
                <div class="item-block">
                  <div class="item-form">
                    <button
                      class="btn btn-danger btn-float btn-remove"
                      @click="onDeleteExperience(experience.experienceId)"
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
              <div class="col-xs-12" v-for="skill in getAppSkills" :key="'skill' + skill.skillId">
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
                <p class="card-text">
                  Dokumentat po ngarkohen, ju lutem mos ikni nga faqja gjate ketij procesi.
                  Ne mbarim te procesit do te ridrejtoheni automatikisht ne faqen e suksesit.
                </p>
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
  UPLOAD,
  GET_PROFILE,
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
  START_UPLOAD,
  STOP_UPLOAD,
  SET_PROFILE_FILES,
  SET_APP_PROFILE,
  ADD_EDUCATION,
  REMOVE_EDUCATION,
  SET_EDUCATION_FILES,
  UPDATE_EDUCATION,
  ADD_EXPERIENCE,
  REMOVE_EXPERIENCE,
  SET_EXPERIENCE_FILES,
  UPDATE_EXPERIENCE,
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
      }
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
    // educationTypeChange(e, i) {
    //   this.educationInputs[i].degree = "";
    //   this.educationInputs[i].field_of_study = "";
    //   this.educationInputs[i].education_type = this.education_type_options[
    //     e.target.value - 1
    //   ].text;
    // },
    // educationDegreeChange(e, i) {
    //   let educationOptionId = e.target.value;
    //   if (educationOptionId == 7 || educationOptionId == 3) {
    //     this.education_degree_other[i] = true;
    //     this.educationInputs[i].degree = "Fut tipin e diplomes";
    //   } else {
    //     this.education_degree_other[i] = false;
    //     if (this.education_type_id[i] == 1)
    //       this.educationInputs[i].degree = this.education_degree_options[
    //         this.education_type_id[i]
    //       ][educationOptionId - 1].text;
    //     else
    //       this.educationInputs[i].degree = this.education_degree_options[
    //         this.education_type_id[i]
    //       ][educationOptionId - 4].text;
    //   }
    // },
    // educationMajorChange(e, i) {
    //   let educationOptionId = e.target.value;
    //   if (educationOptionId == 6 || educationOptionId == 3) {
    //     this.education_major_other[i] = true;
    //     this.educationInputs[i].field_of_study = "Fut degen";
    //   } else {
    //     this.education_major_other[i] = false;
    //     if (this.education_type_id[i] == 1)
    //       this.educationInputs[i].field_of_study = this.education_major_options[
    //         this.education_type_id[i]
    //       ][educationOptionId - 1].text;
    //     else
    //       this.educationInputs[i].field_of_study = this.education_major_options[
    //         this.education_type_id[i]
    //       ][educationOptionId - 4].text;
    //   }
    // },
    // ------- Profile picture -------
    handleFileUploadProfile() {
      let vm = this;
      this.$store.commit(SET_PROFILE_FILES, { vm });
    },
    updateProfileField(field, value) {
      // legacy code - changeProfession()
      // console.log("value is :", value)
      // if (value == 4) {
      //   console.log("this.profession_other :", this.profession_other)
      //   this.profession_other = true;
      //   console.log("this.profession_other :", this.profession_other)
      //   console.log("this.user_data.profession :", this.user_data.profession)
      //   this.user_data.profession = "Fut profesionin";
      //   console.log("this.user_data.profession :", this.user_data.profession)
      // } else {
      //   console.log("this.profession_other :", this.profession_other)
      //   this.profession_other = false;
      //   console.log("this.profession_other :", this.profession_other)
      //   console.log("this.user_data.profession :", this.user_data.profession)
      //   console.log("this.profession_options :", this.profession_options)
      //   console.log("this.profession_options[value - 1] :", this.profession_options[value - 1])
      //   console.log("this.profession_options[value - 1].text :", this.profession_options[value - 1].text)
      //   this.user_data.profession = this.profession_options[value - 1].text;
      //   console.log("this.profession_options :", this.profession_options)
      //   console.log("this.profession_options[value - 1] :", this.profession_options[value - 1])
      //   console.log("this.profession_options[value - 1].text :", this.profession_options[value - 1].text)
      //   console.log("this.user_data.profession :", this.user_data.profession)
      // }
      // new code
      let payload = { [field]: value };
      this.$store.commit(SET_APP_PROFILE, payload);
    },
    // ------- Education -------
    handleFileUploadEducation(educationId) {
      let vm = this;
      this.$store.commit(SET_EDUCATION_FILES, { vm, educationId });
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
      let vm = this;
      this.$store.commit(SET_EXPERIENCE_FILES, { vm, experienceId });
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
      let vm = this;
      this.$store.commit(SET_SKILL_FILES, { vm, skillId });
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
      this.$v.user_data.$touch();
      if (this.$v.user_data.$pending || this.$v.user_data.$error) {
        console.log("errors");
        return;
      }
      let vm = this;
      this.$store.dispatch(UPLOAD, { vm });
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
      country: { required },
      phone: { required },
      address: { required },
      birthday: { required },
      email: { required, email }
    }
  },
  mounted() {
    this.profession_id = 1;
    let vm = this;
    this.$store.dispatch(GET_PROFILE, { vm });
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
