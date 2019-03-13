<template>
  <div id="app">
    <div class="nav-on-header smart-nav" id="body">
      <app-navbar/>
      <router-view/>
      <app-footer/>
      <!-- Back to top button -->
      <a id="scroll-up" href="#">
        <i class="ti-angle-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar";
import AppFooter from "@/components/Footer";

export default {
  name: "app",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

<style>
@import "../public/static/css/app.min.css";
@import "../public/static/css/custom.css";
@import url("https://fonts.googleapis.com/css?family=Oswald:100,300,400,500,600,800%7COpen+Sans:300,400,500,600,700,800%7CMontserrat:400,700");
@import url();
.navbar .container {
  width: 100%;
}
</style>
