<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-lg overlay-light"
      style="background-image: url(static/img/publication1.jpg)"
    >
      <div class="container no-shadow">
        <h1 class="text-center">Events</h1>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5 mt-5">
          <router-link to="/event_detail">
            <div class="card text-center">
              <img
                class="card-img-top"
                src="static/img/publication1.jpg"
                alt="Card image cap"
              />
              <div class="card-body" id="card">
                <h5 class="card-title">
                  The 1nd International Congress on Roads
                </h5>
              </div>
              <div class="card-footer text-muted">
                <h5 class="card-date">4 January, 2019</h5>
                <div class="card-body-text">
                  Efficiently predominate cross functional mindshare via
                  client-focused platforms. Collaboratively harness
                  multifunctional resources and multimedia based models.
                  Collaboratively build cost effective technologies through
                  fully tested human capital. Efficiently...
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-5 mt-5">
          <router-link to="/event_detail">
            <div class="card text-center">
              <img
                class="card-img-top"
                src="static/img/event2.jpg"
                alt="Card image cap"
              />
              <div class="card-body" id="card">
                <h5 class="card-title">
                  The 2nd International Congress on Roads
                </h5>
              </div>
              <div class="card-footer text-muted">
                <h5 class="card-date">18 August, 2018</h5>
                <div class="card-body-text">
                  Efficiently predominate cross functional mindshare via
                  client-focused platforms. Collaboratively harness
                  multifunctional resources and multimedia based models.
                  Collaboratively build cost effective technologies through
                  fully tested human capital. Efficiently...
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "Events"
};
</script>

<style scoped>
.navbar .logo img,
.navbar .logo-alt img {
  height: 70px;
}

*:hover {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

hr {
  border-top: 1px solid #007bff;
  width: 70%;
}

a {
  color: #000;
}

.card {
  background-color: #ffffff;
  padding: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

.card:hover {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
  color: black;
}

address {
  margin-bottom: 0px;
}

#author a {
  color: #fff;
  text-decoration: none;
}

.card-body {
  padding-left: 5px;
  padding-right: 5px;
}

.card-body-text {
  padding: 5px;
  padding-left: 17px;
  font-size: 13px;
  text-align: left;
  padding-bottom: 10px;
}

.card-title {
  color: #29aafe;
}

.card-date {
  color: black;
}
</style>
