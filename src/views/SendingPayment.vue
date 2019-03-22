<template>
  <div class="nav-on-header smart-nav">
    <!-- <form-summary :validator="$v.first_name"/> -->
    <form @submit.prevent="apply">
      <!-- Page header -->
      <header class="page-header">
        <div class="container page-name">
          <h1 class="text-center">Dergoni mandat pagesen</h1>
          <p class="lead text-center">Ngarkoni dhe dergoni mandat pagesen.</p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="form-group">
                <div class="input-file-container">
                  <input
                    class="input-file"
                    ref="payment_file"
                    id="my-file"
                    type="file"
                    @change="handleFileUploadPayment"
                  >
                  <label
                    tabindex="0"
                    for="my-file"
                    class="input-file-trigger"
                  >Zgjidhni nje dokument...</label>
                </div>
                <p class="file-return">{{ payment_file.name }}</p>
              </div>
            </div>

            <!-- <div class="col-xs-12 col-sm-8">
              <div class="form-group col-sm-12">
                <label class="col-sm-3">Titull</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Titull"
                    v-model="payment_data.title"
                  >
                </div>
              </div>

              <div class="form-group col-sm-12">
                <label class="col-sm-3">Pershkrim</label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Pershkrim i shkurter rreth pageses"
                    v-model="payment_data.description"
                  ></textarea>
                </div>
              </div>
            </div>-->
          </div>
        </div>
      </header>
      <!-- END Page header -->
      <!-- Main container -->
      <main>
        <!-- Submit -->
        <section>
          <!-- class="bg-img" style="background-image: url(static/img/newsletter_plc.jpg);" -->
          <div class="container">
            <header class="section-header">
              <span>Perfunduat?</span>
              <!-- <h2>Dergo mandatin</h2> -->
            </header>

            <p class="text-center">
              <button class="btn btn-success btn-xl btn-round" type="submit">Dergo mandat pagesen</button>
            </p>
            <!-- <form-summary :validator="$v.user_data">
              <div slot-scope="{ errorMessage }">{{ errorMessage }}</div>
            </form-summary>-->
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
// import { required, email } from "vuelidate/lib/validators";
// import { templates } from "vuelidate-error-extractor";
// import store from "@/store";

export default {
  data() {
    return {
      payment_data: {
        // title: "",
        description: ""
      },
      payment_file: ""
    };
  },
  // components: {
  //   formSummary: templates.multiErrorExtractor.foundation6
  // },
  methods: {
    handleFileUploadPayment(event) {
      this.payment_file = this.$refs.payment_file.files[0];
    },
    apply() {
      let AACE_URL_USER = "https://aace.ml/api/user/";
      let USER_ID = JSON.parse(localStorage.getItem("user")).id;
      let TOKEN = localStorage.getItem("id_token");

      axios.post(
          "https://aace.ml/api/user/" + USER_ID + "/payment",
          this.payment_data,
          {
            "Content-Type": "multipart/form-data",
            headers: {
              Authorization: "Bearer " + TOKEN
            }
          }
        )
        .then(res => {
          console.log("post payment");
          let PAYMENT_ID = res.data.id;

          let formDataPayment = new FormData();
          formDataPayment.append("file", this.payment_file);

          axios
            .post(
              "https://aace.ml/api/user/" + USER_ID + "/payment/" + PAYMENT_ID + "/media",
              formDataPayment,
              {
                "Content-Type": "multipart/form-data",
                headers: {
                  Authorization: "Bearer " + TOKEN
                }
              }
            )
            .then(res => {
              console.log("media payment");
              if (res.status == 200) {
              this.$router.push({
                name: "SuccessPayment"
              });

              }
            })
            .catch(err => console.log(err));
        });
    }
  }
};
document.querySelector("html").classList.add("js");
</script>

<style>
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
  content: "Dokumenti i zgjedhur: ";
  font-style: normal;
  font-weight: normal;
}
</style>
