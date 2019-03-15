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
      <section>
        <div class="container">
          <header class="section-header">
            <span>Struktura</span>
            <h2>Struktura e qeverisjes</h2>
          </header>

          <p>pershkrim</p>
          <br />
          <br />
          <div class="row">
            <div class="col text-center">
              <!-- <img src="static/img/non-profit-chart.png" alt /> -->
            </div>
          </div>

          <br />
          <br />
          <header class="section-header">
            <span>Bordi</span>
            <h2>Bordi i drejtoreve</h2>
          </header>
          <p>pershkrim</p>

          <p>edhe ktu</p>
          <br />
          <br />
          <div class="row">
            <div class="col-sm-4">
              <div class="team-members">
                <div class="team-avatar">
                  <!-- <img
                    class="img-responsive"
                    src="https://keenthemes.com/assets/bootsnipp/member1.png"
                    alt
                  />-->
                </div>
                <div class="team-desc">
                  <h4>John Doe</h4>
                  <span>Marketing</span>
                </div>
              </div>
            </div>
            <!-- <div class="col-sm-4">
              <div class="team-members">
                <div class="team-avatar">
                  <img
                    class="img-responsive"
                    src="https://keenthemes.com/assets/bootsnipp/member2.png"
                    alt
                  />
                </div>
                <div class="team-desc">
                  <h4>Melisa Doe</h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-members">
                <div class="team-avatar">
                  <img
                    class="img-responsive"
                    src="https://keenthemes.com/assets/bootsnipp/member3.png"
                    alt
                  />
                </div>
                <div class="team-desc">
                  <h4>Alex Atkinson</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>-->
          </div>
          <!-- //end row -->
        </div>
      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "Board"
};
</script>

<style scoped>
.page-header {
  margin-bottom: 0px;
}

/* Team Members */
.team-members {
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-bottom: 35px;
}

.team-members .team-avatar {
  position: relative;
}

.team-members .team-avatar:after {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: " ";
  position: absolute;
  background: rgba(129, 129, 129, 0.1);
  transition-duration: 300ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
}

.team-members .team-avatar img {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.team-members .team-desc {
  left: auto;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  position: absolute;
  opacity: 0;
  color: #fff;
  -webkit-transform: translate3d(0, 10%, 0);
  transform: translate3d(0, 10%, 0);
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -ms-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.team-members .team-desc h4 {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 10px;
  color: #fff;
}

.team-members .team-desc span {
  display: block;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
}

.team-members:hover .team-avatar:after {
  background: rgba(47, 60, 72, 0.5);
  transition-duration: 300ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
}

.team-members:hover .team-desc {
  -webkit-transform: translate3d(0, -5%, 0);
  transform: translate3d(0, -5%, 0);
  -webkit-transform: translate3d(0, -10%, 0);
  transform: translate3d(0, -10%, 0);
}

.team-members:hover .team-desc {
  opacity: 1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}
</style>
