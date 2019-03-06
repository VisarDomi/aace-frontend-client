<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-sm"
      style="background-image: url(static/img/bg-banner2.jpg); margin-bottom:0px;"
    ></header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Services</span>
            <h2>Member Services</h2>
            <p>Access your services as a registered user of AACE</p>
          </header>

          <div class="category-grid">
            <a href="job-list-1.html" style="height: 295px;">
              <i class="fa fa-laptop"></i>
              <h6>Application Form</h6>
              <p>Apply for membership in AACE</p>
            </a>
            
            <a href="job-list-3.html" style="height: 295px;">
              <i class="fa fa-institution"></i>
              <h6>Application Status</h6>
              <p>See the status of your application</p>
            </a>
            <a href="job-list-2.html" style="height: 295px;">
              <i class="fa fa-line-chart"></i>
              <h6>Communication</h6>
              <p>Access association wide and personal communications</p>
            </a>
            
            <a href="job-list-3.html" style="height: 295px;">
              <i class="fa fa-medkit"></i>
              <h6>Profile</h6>
              <p>See how your profile looks publicly</p>
            </a>
            
            <a href="job-list-1.html" style="height: 295px;">
              <i class="fa fa-cutlery"></i>
              <h6>Polls</h6>
              <p>Engage in polling</p>
            </a>
            
            <a href="job-list-2.html" style="height: 295px;">
              <i class="fa fa-newspaper-o"></i>
              <h6>Log-out</h6>
              <p>Log out of the platform</p>
            </a>
          </div>
        </div>
      </section>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "MemberArea"
};
</script>
