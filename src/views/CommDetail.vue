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

                      <div class="item-block">
                        <h6>Dokument1.pdf</h6>
                        <i class="fa fa-folder fa-2x"></i>
                        <br>
                      </div>
                      <div class="item-block">
                        <h6>Dokument2.pdf</h6>
                        <i class="fa fa-folder fa-2x"></i>
                      </div>
                      <div class="item-block">
                        <h6>Dokument3.pdf</h6>
                        <i class="fa fa-folder fa-2x"></i>
                      </div>
                      <div class="item-block">
                        <h6>Shenime.pdf</h6>
                        <i class="fa fa-folder fa-2x"></i>
                      </div>
                      
                    </div>

                    <br>
                    <a class="btn btn-primary btn-block" href="#">Shkarko dokumentat</a>
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
import { mapGetters } from "vuex";
import {
  FETCH_COMM
} from "@/store/actions.type";
import store from "@/store";
export default {
  name: "communicationdetail",
  mounted() {
    this.$store.dispatch(FETCH_COMM, this.$route.params);
  },
  computed: {
    ...mapGetters(["comm"])
  },  
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_COMM, to.params);
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
