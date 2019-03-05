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
                <input
                  type="file"
                  ref="profile_file"
                  class="dropify"
                  data-default-file="static/img/avatar.jpg"
                  @change="handleFileUploadProfile"
                >
                <span class="help-block">Please choose a 4:6 profile picture.</span>
              </div>
            </div>
            <!-- <br>
            <button
              class="btn btn-primary btn-duplicator"
              type="button"
              @click="submitFile"
            >Send Profile Picture</button>-->
            <div class="col-xs-12 col-sm-8">
              <!-- <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Comment from administrator"
                  v-model="comment_from_administrator"
                >
              </div>-->
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
                  class="form-control"
                  placeholder="Headline (e.g. Front-end developer)"
                  v-model="headline"
                >
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
                      placeholder="Country, e.g. Albania"
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
                      <i class="fa fa-usd"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Industry, e.g. Road Construction"
                      v-model="industry"
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
                      placeholder="Birthday"
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
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                      v-model="email"
                      disabled
                    >
                  </div>
                </div>
              </div>

              <hr class="hr-lg">

              <h6>Tags list</h6>
              <div class="form-group">
                <input
                  type="text"
                  value="HTML,CSS,Javascript"
                  data-role="tagsinput"
                  placeholder="Tag name"
                >
                <span class="help-block">Write tag name and press enter</span>
              </div>
            </div>
          </div>

          <div class="button-group">
            <div class="action-buttons">
              <div class="upload-button">
                <button class="btn btn-block btn-gray" type="button">Choose a resume file</button>
                <input type="file">
              </div>

              <div class="upload-button">
                <button class="btn btn-block btn-primary" type="button">Choose a cover image</button>
                <input id="cover_img_file" type="file">
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
              <span>Latest degrees</span>
              <h2>Education</h2>
            </header>

            <div class="row">
              <div class="col-xs-12" :key='index' v-for='(item, index) in this.educations'>
                <div class="item-block">
                  <div class="item-form">
                    <button class="btn btn-danger btn-float btn-remove" type="button">
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="form-group">
                          <input
                            type="file"
                            ref="education" 
                            
                            class="dropify"
                            data-default-file="static/img/logo-default.png"
                            @change="handleFileUploadEducation"
                          >
                          <span
                            class="help-block"
                          >Please choose a square logo of your educational institution</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="education_degree[index]"
                            placeholder="Degree, e.g. Bachelor"
                          >
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="education_major[index]"
                            placeholder="Major, e.g. Computer Science"
                          >
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model="education_school[index]"
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
                              v-model="education_startdate[index]"
                            >
                            
                            <span class="input-group-addon">Date to</span>
                            <input
                              type="date"
                              class="form-control"
                              placeholder="e.g. 2016"
                              v-model="education_enddate[index]"
                            >
                          </div>
                        </div>

                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="3"
                            placeholder="Short description"
                            v-model="education_description[index]"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br>
                <button class="btn btn-primary" type="button" @click='incrementEducation'>Add education</button>
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
              <div class="col-xs-12" :key='index' v-for='(item, index) in this.experiences'>
                <div class="item-block">
                  <div class="item-form">
                    <button class="btn btn-danger btn-float btn-remove" type="button">
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <div class="form-group">
                          <input
                            type="file"
                            ref='experience'

                            class="dropify"
                            data-default-file="static/img/logo-default.png"
                            @change='handleFileUploadExperience'
                          >
                          <span class="help-block">Please choose a square logo of the company</span>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-8">
                        <div class="form-group">
                          <input 
                            type="text" 
                            class="form-control" 
                            v-model='experience_company[index]'
                            placeholder="Company name">
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model='experience_position[index]'
                            placeholder="Position, e.g. UI/UX Researcher"
                          >
                        </div>

                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">Date from</span>
                            <input 
                              type="date" 
                              class="form-control"
                              v-model='experience_startdate[index]' 
                              placeholder="e.g. 2012">
                            <span class="input-group-addon">Date to</span>
                            <input 
                              type="date"
                              class="form-control" 
                              v-model='experience_enddate[index]'
                              placeholder="e.g. 2016">
                          </div>
                        </div>

                        <div class="form-group">
                          <textarea 
                            class="form-control" 
                            rows="3" 
                            v-model='experience_description[index]'
                            placeholder="Short description"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-xs-12 text-center">
                <br>
                <button class="btn btn-primary btn-duplicator" type="button" @click='incrementExperience'>Add experience</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END Work Experience -->
        <!-- Skills -->
        <section class="bg-alt">
          <div class="container">
            <header class="section-header">
              <span>Expertise Areas</span>
              <h2>Skills</h2>
            </header>

            <div class="row">
              <div class="col-xs-12">
                <div class="item-block">
                  <div class="item-form">
                    <button class="btn btn-danger btn-float btn-remove" type="button">
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Skill name, e.g. HTML"
                          >
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Skill proficiency, e.g. 90"
                            >
                            <span class="input-group-addon">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 duplicateable-content">
                <div class="item-block">
                  <div class="item-form">
                    <button class="btn btn-danger btn-float btn-remove" type="button">
                      <i class="ti-close"></i>
                    </button>

                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Skill name, e.g. HTML"
                          >
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Skill proficiency, e.g. 90"
                            >
                            <span class="input-group-addon">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 text-center">
                <br>
                <button class="btn btn-primary btn-duplicator" type="button">Add experience</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END Skills -->
        <!-- Submit -->
        <section class="bg-img" style="background-image: url(static/img/newsletter_plc.jpg);">
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


    <!-- Back to top button -->
    <a id="scroll-up" href="#">
      <i class="ti-angle-up"></i>
    </a>
    <!-- END Back to top button -->
    <!-- <input class="form-input" type="text" value="Filan" v-model="firstname">
    <input class="form-input" type="text" value="Fisteku" v-model="lastname">
    <input class="form-input" type="text" value="Inxhinier Elektrik" v-model="occupation">
    <input class="form-input" type="text" placeholder="" v-model="company">
    <input class="form-input" type="text" value="+3923394039" v-model="phone">
    <input class="form-input" type="text" value="Rr. 'Sheshi 3'" v-model="address">
    <div class="col-xs-12 col-sm-2 col-centered" @click="sendApplication">-->
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "ApplicationPage",
  data() {
    return {
      //--------------- User -------

      first_name: "",
      last_name: "",
      headline: "",
      summary: "",
      country: "",
      industry: "",
      phone: "",
      address: "",
      birthday: "",
      website: "",
      email: "",
      // comment_from_administrator: "",
      
      //--------------- Image Files -------
      profile_picture_file: "",
      education_institution_file: [],
      experience_company_file: [],

      //--------------- Education -------
      educations: 1,
      education_files_index: 0,
      education_degree: [],
      education_major: [],
      education_school: [],
      education_startdate: [],
      education_enddate: [],
      education_description: [],

      //---------------- Experience -------
      experiences: 1,
      experience_files_index: 0,
      experience_company: [],
      experience_position: [],
      experience_description: [],
      experience_startdate: [],
      experience_enddate: [],
      // experience_location: [],
      // experience_type: [],
      // experience_is_currently_work_here: [],
    };
  },
  methods: {
    handleFileUploadProfile(event) {
      this.profile_picture_file = this.$refs.profile_file.files[0];
    },
    // ------- Education -------
    handleFileUploadEducation(event) {
      this.education_institution_file.push(this.$refs.education[this.educations-1].files[0]);
    },
    incrementEducation(){
      this.educations += 1
      this.education_degree.push('')
      this.education_major.push('')
      this.education_school.push('')
      this.education_startdate.push('')
      this.education_enddate.push('')
      this.education_description.push('')
    },
    // ------- Experience -------
    handleFileUploadExperience(event) {
      this.experience_company_file.push(this.$refs.experience[this.experiences-1].files[0]);
    }, 
    incrementExperience(){
      this.experiences += 1
      this.experience_company.push('')
      this.experience_position.push('')
      this.experience_description.push('')
      this.experience_startdate.push('')
      this.experience_enddate.push('')
    },
    apply() {
      // ------- Basic 
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = JSON.parse(localStorage.getItem("token"));

      console.log(TOKEN)
      console.log(USER_ID)
      // ------- User -------
      let formDataUser = new FormData();
      formDataUser.append("file", this.profile_picture_file);
      let user_string = {
        first_name: this.first_name,
        last_name: this.last_name,
        headline: this.headline,
        summary: this.summary,
        country: this.country,
        industry: this.industry,
        phone: this.phone,
        address: this.address,
        birthday: this.birthday,
        website: this.website
        // // email: this.email,
      };

      // ------- Education file and post -------
      // for(var i=0; i<this.educations; i++){

      //   let education_string = {
      //     degree: this.education_degree[i],
      //     field_of_study: this.education_major[i],
      //     school: this.education_school[i],
      //     from_year: this.education_startdate[i],
      //     to_year: this.education_enddate[i],
      //     description: this.education_description[i]
      //   };

      //   axios.post(
      //     "https://aace.ml/api/user/" + USER_ID + "/education",
      //     education_string,
      //     {
      //       "Content-Type": "multipart/form-data",
      //       headers: {
      //         Authorization: "Bearer " + TOKEN
      //       }
      //     }
      //   ).then(res => {

      //     let EDUCATION_ID = res.data.id;
          
      //     let formDataEducation = new FormData();
      //     formDataEducation.append("file", this.education_institution_file[this.education_files_index]);
      //     this.education_files_index++
          
      //     axios.post(
      //       AACE_URL_USER +
      //         USER_ID +
      //         "/education/" +
      //         EDUCATION_ID +
      //         "/media",
      //       formDataEducation,
      //       {
      //         "Content-Type": "multipart/form-data",
      //         headers: {
      //           Authorization: "Bearer " + TOKEN
      //         }
      //       }
      //     ).then(res => {
      //       if (res.status == 200) {
      //         console.log("pdf updated sucessfully.");
      //         this.$router.push({
      //           name: "SuccessSentPage"
      //         });
      //       }
      //     }).catch(err => console.log(err));

      //   })


      // }
      // ------- Experience file and post -------
      for(var i=0; i<this.experiences; i++){

        let experience_string = {
          company: this.experience_company[i],
          title: this.experience_position[i],
          from_date: this.experience_startdate[i],
          to_date: this.experience_enddate[i],
          description: this.experience_description[i]
        };

        axios.post(
          "https://aace.ml/api/user/" + USER_ID + "/experience",
          experience_string,
          {
            "Content-Type": "multipart/form-data",
            headers: {
              Authorization: "Bearer " + TOKEN
            }
          }
        ).then(res => {

          let EXPERIENCE_ID = res.data.id;
          
          let formDataExperience = new FormData();
          formDataExperience.append("file", this.experience_company_file[this.experience_files_index]);
          this.experience_files_index++
          
          axios.post(
            AACE_URL_USER +
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
          ).then(res => {
            if (res.status == 200) {
              console.log("pdf updated sucessfully experience.");
              this.$router.push({
                name: "SuccessSentPage"
              });
            }
          }).catch(err => console.log(err));

        })


      }
      

      // axios.all(
      //   axios.post(
      //     "https://aace.ml/api/user/" + USER_ID + "/media",
      //       formDataUser,
      //       {
      //         "Content-Type": "multipart/form-data",
      //         headers: {
      //           Authorization: "Bearer " + TOKEN
      //       }
      //     }
      //   ), 
      //   axios.put("https://aace.ml/api/user/" + USER_ID, user_string, {
      //       headers: {
      //         Authorization: "Bearer " + TOKEN
      //       }
      //     })
      //   ).then(
      //     axios.spread((profileRes, stringRes) => {
      //       console.log(
      //         "res.statuses are: ",
      //         profileRes.status,
      //         stringRes.status
      //       );

      //       if (profileRes.status == 200) {
      //         console.log("Profile picture updated successfully.");
      //       } else {
      //         console.log("profile picture bad response")
      //       }

      //       if (stringRes.status == 200) {
      //         console.log("Strings sent successfully.");
      //         localStorage.setItem("user", JSON.stringify(stringRes.data));
      //       }  else {
      //         console.log("String sent unsuccessfuly")
      //       }

      //     })
      //   );
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
        console.log(res);
        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.headline = res.data.headline;
        this.summary = res.data.summary;
        this.country = res.data.country;
        this.industry = res.data.industry;
        this.email = res.data.email;
        this.phone = res.data.phone;
        this.address = res.data.address;
        this.birthday = res.data.birthday;
        this.website = res.data.website;
      })
  }
};
</script>

<style scoped>
.navbar .container {
  width: 100%;
}
</style>
