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
            <h2>{{comm.name}}</h2>
          </header>

          <div class="container" style=" white-space: pre-line;">
            <div class="row">
              <div class="col-md-9">{{comm.body}}</div>
              <div class="col-md-3" style="padding-top: 37px;">
                <ul class="pricing">
                  <li style="width: 100%; border: none;">
                    <h4 style="margin-bottom:0px;">Dokumenta</h4>

                    <div class="row">

                      <div class="item-block" v-for="document in communicationDocuments" :key="document.id">
                        
                        <h6>{{document.filename}}</h6>
                        
                        
                        <a class="btn btn-primary" :key="document.id" @click="downloadDoc(document.url, document.filename)"><i class="fa fa-file-zip-o"></i>Download Document {{document.id}}</a>                    
                        <br>
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
              <textarea class="form-control" rows="5"></textarea>
              <br>
              <a class="btn btn-primary" href="#">Dergo koment</a>
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
const FileSaver = require('file-saver');
import { mapGetters } from "vuex";
import JwtService from "@/common/jwt.service";
import {
  FETCH_COMM,
  FETCH_DOCS
} from "@/store/actions.type";
import store from "@/store";
export default {
  name: "communicationdetail",
  mounted() {
    console.log("on mounted, fetching")
    this.$store.dispatch(FETCH_COMM, this.$route.params);
    this.$store.dispatch(FETCH_DOCS, this.$route.params);
  },
  methods: {
    downloadDoc(docURL, docName){
      console.log("inside downloads")
      console.log("tring to download doc with ID: " + docURL)


      axios
        .get(docURL, {
          responseType: 'arraybuffer',
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JwtService.getToken(),
            'Accept': 'application/pdf',
            "Secure-Api-Key":
        "asdfasdfetyeq"
          }
        })
        .then(res => {
            console.log("Media with id " + docURL + " downloaded successfully")
            console.log(res);
            // response.data is an empty object
            const blob = new Blob([res.data], {
              type: 'application/pdf',
            });
            FileSaver.saveAs(blob, docName);
        });
    
  }
  },

  computed: {
    ...mapGetters(["comm", "communicationDocuments"])
  },  
  watch: {
    $route(to) {
      console.log("on route(to), fetching")
      this.$store.dispatch(FETCH_COMM, to.params);
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
