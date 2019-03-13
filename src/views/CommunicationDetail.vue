<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-sm"
      style="background-image: url(static/img/bg-banner2.jpg)"
    ></header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <!-- Company detail -->
      <section style="padding-top:0px; padding-bottom:50px;">
        <div class="container">
          <header class="section-header">
            <h2>{{ communication.name }}</h2>
          </header>

          <div class="container" style=" white-space: pre-line;">
            <div class="row">
              <div class="col-md-9">{{ communication.body }}</div>
              <div class="col-md-3" style="padding-top: 37px;">
                <ul class="pricing">
                  <li style="width: 100%; border: none;">
                    <h4 style="margin-bottom:0px;">Dokumenta</h4>

                    <div class="row">
                      <div
                        class="item-block"
                        v-for="document in communicationDocuments"
                        :key="document.id"
                      >
                        <p>{{ document.filename }}</p>

                        <a
                          style="margin-bottom:10px;"
                          class="btn btn-primary"
                          :key="document.id"
                          @click="downloadDoc(document.id, document.filename)"
                        >
                          <i class="fa fa-file-zip-o"></i>Download Document
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container" style="margin-top: 50px;">
            <form action>
              <h5>Komento:</h5>
              <textarea class="form-control" rows="5" v-model="comment"></textarea>
              <br>
              <a class="btn btn-primary" href="#" @click="sendComment">Dergo koment</a>
            </form>
          </div>
        </div>
      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
import axios from "axios";
const FileSaver = require("file-saver");
import { mapGetters } from "vuex";
import JwtService from "@/common/jwt.service";
import {
  FETCH_COMMUNICATION,
  FETCH_DOCS,
  ADD_COMMENT
} from "@/store/actions.type";
import store from "@/store";
export default {
  name: "CommunicationDetail",
  mounted() {
    this.$store.dispatch(FETCH_COMM, this.$route.params);
    this.$store.dispatch(FETCH_DOCS, this.$route.params);
  },
  data() {
    return {
      comment: "",
      commentId: "",
      extension: ".jpg",
      document_filename: "iphone5s.jpg"
      // ket commentId e bejm computed
      //suppozohet ta kem available , po ta bej {{communication.id}} m'del ne html
    };
  },
  methods: {
    getExtension(document_filename) {
      this.extension = document_filename.split(".")[1];
      console.log(this.extension);
      return this.extension;
    },
    sendComment() {
      this.$store.dispatch(ADD_COMMENT, {
        id: this.communication.id,
        comment: this.comment
      });
    },
    downloadDoc(docID, docName) {
      axios
        .get("https://aace.ml/api/media/media_officialcommunication/" + docID, {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JwtService.getToken(),
            // 'Accept': 'application/pdf',
            "Secure-Api-Key": "asdfasdfetyeq"
          }
        })
        .then(res => {
          // response.data is an empty object
          const blob = new Blob([res.data], {
            type: "application/pdf"
          });
          FileSaver.saveAs(blob, docName);
        });
    }
  },

  computed: {
    ...mapGetters(["communication", "communicationDocuments"])
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_COMMUNICATION, to.params);
      this.$store.dispatch(FETCH_DOCS, this.$route.params);
    }
  }
};
</script>

<style scoped>
.pricing li:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
