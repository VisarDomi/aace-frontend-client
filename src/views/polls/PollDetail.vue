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
          <!-- <header class="section-header"> -->
            <h2>{{ poll.name }}</h2>
            <hr>
            <h5>{{ poll.description }}</h5>
            <hr>
          <!-- </header> -->

          <div class="container" style=" white-space: pre-line;">
            <div class="row">
              <div class="col-md-9">
                <span v-html="poll.body"></span>
              </div>
              <div class="col-md-3" style="padding-top: 37px;">
                <ul class="pricing">
                  <li style="width: 100%; border: none;">
                    <h4 style="margin-bottom:0px;" v-if="pollDocuments.length != 0">Dokumenta</h4>

                    <div class="row">
                      <div class="item-block" v-for="document in pollDocuments" :key="document.id">
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
            <header class="section-header">
              <span>Voto</span>
              <h2>Dergo voten tende</h2>
            </header>

            <div v-if="!this.poll.has_voted" class="row item-blocks-connected" style="margin-bottom:170px; margin-top:120px; text-align:center;">
              <!-- Job item -->


                      <div class="col-xs-4" v-for="option in this.poll.options" :key="option.id">
                          <div class="radio">
                            <input type="radio" :id="option.id" :value="option.body" v-model="picked_vote"/>
                            <label :for="option.id"><h4>{{option.body}}</h4></label>
                          </div>
                      </div>
                      <div class="btn btn-primary" @click="sendVote" style="margin-top:50px;">Dergo voten</div>
                      
                    
              <!-- END Job item -->
            </div>

            <div v-else>
              You e keni derguar voten tuaj.

                          <GChart
                type="ColumnChart"
                :data="chartData"
                :options="chartOptions"
              />


            </div>
          </div>

          <div class="container">
            <header class="section-header" v-if="pollComments.length != 0">
              <span>Komente</span>
              <h4>Komentet e fundit</h4>
            </header>

            <div class="row item-blocks-connected">
              <!-- Job item -->
              <div class="col-xs-12" :key="comment.id" v-for="comment in pollComments">
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
                      <br />
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
              <br />
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
import { GChart } from 'vue-google-charts'
import axios from "axios";
import TimeAgo from "vue2-timeago";
import FileSaver from "file-saver";
import { mapGetters } from "vuex";
import { getToken } from "@/store/services/jwt";
import {
  FETCH_POLL,
  FETCH_POLL_DOCS,
  FETCH_POLL_COMMENTS,
  FETCH_POLL_OPTIONS,
  MAKE_POLL_COMMENT,
  MAKE_POLL_VOTE
} from "@/store/actions.type";
import store from "@/store";

export default {
  name: "PollDetail",
  components: {
    TimeAgo
  },
  mounted() {
    this.$store.dispatch(FETCH_POLL, this.$route.params);
    this.$store.dispatch(FETCH_POLL_DOCS, this.$route.params);
    this.$store.dispatch(FETCH_POLL_COMMENTS, this.$route.params);
  },
  data() {
    return {

            chartData: [

            ],
      chartOptions: {
        height: 700,
        chart: {
          height: 600,
          title: 'Rezultatet e votimit',
          subtitle: 'Rezultatet e tanishme',
        }
      },



      picked_vote: "",
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
      console.log("poll.id", this.poll.id);
      await this.$store
        .dispatch(MAKE_POLL_COMMENT, {
          pollId: this.poll.id,
          body: this.comment_body
        })
        .then(res => {
          console.log("res sendComment is", res);
        });
      await this.$store.dispatch(FETCH_POLL_COMMENTS, this.$route.params);
      this.comment_body = "";
    },
    sendVote(){
      console.log("voting: ", this.picked_vote);
      this.$store.dispatch(MAKE_POLL_VOTE, {
        pollId: this.poll.id, 
        options: [{body:this.picked_vote}]
      }).then(()=>{
       this.$store.dispatch(FETCH_POLL, this.$route.params).then(data => {
      

            var labels= ['Options']
        var results =['Results']


      var series = []
      for(var desc of this.poll.options){
        labels.push(desc.body);
        results.push(desc.votes);
      }
      console.log("results of poll-> ", results)
      this.chartData.push(labels);
      this.chartData.push(results)

    });
      })
    },
    downloadDoc(docID, docName) {
      axios
        .get("https://aace.ml/api/media/media_poll/" + docID, {
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
    ...mapGetters(["pollComments", "poll", "pollDocuments"])
  }
};
</script>

<style scoped>
.pricing li:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
