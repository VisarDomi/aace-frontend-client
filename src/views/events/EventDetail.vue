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
            <h2>{{ event.name }}</h2>
            <h5>{{ event.description }}</h5>
          </header>

          <div class="container" style=" white-space: pre-line;">
            <div class="row">
              <div class="col-md-9"> <span v-html="event.body"></span></div>
              <div class="col-md-3" style="padding-top: 37px;">
                <ul class="pricing">
                  <li style="width: 100%; border: none;">
                    <h4
                      style="margin-bottom:0px;"
                      v-if="eventDocuments.length != 0"
                    >Dokumenta</h4>

                    <div class="row">
                      <div
                        class="item-block"
                        v-for="document in eventDocuments"
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

          <div class="container">
            <header class="section-header" v-if="eventComments.length != 0">
              <span>Komente</span>
              <h2>Komentet e fundit</h2>
            </header>

            <div class="row item-blocks-connected">
              <!-- Job item -->
              <div class="col-xs-12" :key="comment.id" v-for="comment in eventComments">
                <div class="item-block">
                  <header>
                    <div class="hgroup">
                      <router-link :to="{ name: 'Profile', params: comment.author }">
                        <h4>
                          {{ comment.author.first_name }}
                          {{ comment.author.last_name }}
                        </h4>
                      </router-link>
                      <span
                        :class="returnLabel(comment.author_organizationgroup)"
                      >{{ comment.author_organizationgroup }}</span>
                      <h5>{{ comment.body }}</h5>
                    </div>
                    <div class="header-meta">
                      <!-- <span class="clock timeago"  > {{comment.timestamp}}</span> -->
                      <br>
                      <time-ago :datetime="comment.timestamp" locale="en" class="time"></time-ago>
                    </div>
                  </header>
                </div>
              </div>
              <!-- END Job item -->
            </div>
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
              <br>
              <div class="btn btn-primary" @click="sendComment">Dergo koment</div>
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
import TimeAgo from "vue2-timeago";
import FileSaver from "file-saver";
import { mapGetters } from "vuex";
import { getToken } from "@/store/services/jwt";
import {
  FETCH_EVENT,
  FETCH_EVENT_DOCS,
  FETCH_EVENT_COMMENTS,
  MAKE_EVENT_COMMENT
} from "@/store/actions.type";
import store from "@/store";

export default {
  name: "EventDetail",
  components: {
    TimeAgo
  },
  mounted() {
    this.$store.dispatch(FETCH_EVENT, this.$route.params);
    this.$store.dispatch(FETCH_EVENT_DOCS, this.$route.params);
    this.$store.dispatch(FETCH_EVENT_COMMENTS, this.$route.params);
  },
  data() {
    return {
      comment_body: "",
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
    returnLabel(group) {
      if (group == "anetaret") {
        return "label label-success";
      } else if (group == "presidenti") {
        return "label label-primary";
      } else if (group == "sekretari") {
        return "label label-info";
      } else if (group == "koordinatori") {
        return "label label-warning";
      } else if (group == "kryesia") {
        return "label label-danger";
      } else if (group == "bordi") {
        return "label label-bordi";
      }
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
    async sendComment() {
      console.log("event.id", this.event.id);
      await this.$store
        .dispatch(MAKE_EVENT_COMMENT, {
          eventId: this.event.id,
          body: this.comment_body
        })
        .then(res => {
          console.log("res sendComment is", res);
        });
      await this.$store.dispatch(FETCH_EVENT_COMMENTS, this.$route.params);
      this.comment_body = "";
    },
    downloadDoc(docID, docName) {
      axios
        .get("https://aace.ml/api/media/media_event/" + docID, {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
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
    ...mapGetters(["eventComments", "event", "eventDocuments"])
  }
};
</script>

<style scoped>
.pricing li:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
