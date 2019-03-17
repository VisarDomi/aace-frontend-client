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
            <h5>{{ communication.description }}</h5>
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
                          <i
                            :class="
                              'fa fa-file-' + iconType(document.filename) + '-o'
                            "
                          ></i>
                          Shkarko Dokumentin
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-12" :key="comment.id" v-for="comment in comments">
            <br />
            <div>{{ comment.body }}</div>
            <div>{{ comment.author_id }}</div>
            <!-- <div>{{ comment.author_name }}</div> -->
            <div>{{ getFormattedDate(comment.timestamp) }}</div>
            <br />
          </div>
          <div class="container" style="margin-top: 50px;">
            <form action>
              <h5>Komento:</h5>
              <textarea
                class="form-control"
                rows="5"
                v-model="comment_body"
                placeholder="Shkruaj nje koment..."
              ></textarea>
              <br />
              <a class="btn btn-primary" href="#" @click="sendComment"
                >Dergo koment</a
              >
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
import DateFilter from "@/common/date.filter";
const FileSaver = require("file-saver");
import { mapGetters } from "vuex";
import JwtService from "@/common/jwt.service";
import {
  FETCH_COMMUNICATION,
  FETCH_DOCS,
  FETCH_COMMENTS,
  MAKE_COMMENT
} from "@/store/actions.type";
import MemberService from "@/common/api.service";
import store from "@/store";
export default {
  name: "CommunicationDetail",
  mounted() {
    this.$store.dispatch(FETCH_COMMUNICATION, this.$route.params);
    this.$store.dispatch(FETCH_DOCS, this.$route.params);
    this.$store.dispatch(FETCH_COMMENTS, this.$route.params);
  },
  data() {
    return {
      comment_body: "",
      updated_comments: [
        // {
        //   id: 1,
        //   author_id: 2,
        //   body: "text bodyadfasdf",
        //   author_name: "name of author"
        // },
        // {
        //   id: 2,
        //   author_id: 3,
        //   body: "text bodyadfasdf3223",
        //   author_name: "name of author2"
        // }
      ],
      // commentId: "",
      word_extensions: ["doc", "docx"],
      excel_extensions: ["xls", "xlsx"],
      image_extensions: ["jpg", "png"],
      pdf_extensions: ["pdf"]

      // ket commentId e bejm computed
      //suppozohet ta kem available , po ta bej {{communication.id}} m'del ne html
    };
  },
  methods: {
    getFormattedDate(time) {
      let dateTime = time.split(".")[0];
      dateTime = dateTime.replace("T", " ") + " UTC";
      return dateTime;
    },
    getExtension(document_filename) {
      let extension = document_filename.split(".").pop();
      return extension.toLowerCase();
    },
    iconType(document_filename) {
      let extension = this.getExtension(document_filename);
      let iconType = "zip";
      if (this.word_extensions.includes(extension)) {
        iconType = "word";
      } else if (this.excel_extensions.includes(extension)) {
        iconType = "excel";
      } else if (this.image_extensions.includes(extension)) {
        iconType = "image";
      } else if (this.pdf_extensions.includes(extension)) {
        iconType = "pdf";
      }
      return iconType;
    },
    sendComment() {
      console.log("communication.id", this.communication.id);
      this.$store.dispatch(MAKE_COMMENT, {
        communicationId: this.communication.id,
        body: this.comment_body
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
    ...mapGetters(["comments", "communication", "communicationDocuments"])
  },

  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_COMMUNICATION, to.params);
      // this.$store.dispatch(FETCH_DOCS, this.$route.params);
      // this.$store.dispatch(FETCH_COMMENTS, this.$route.params);
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
