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
        <div class="container text-center">
          <header class="section-header">
            <h2>Application Status</h2>
          </header>
            <h4>Name of applicant: </h4> <p>Erdal Domi</p>
            <br>
            <h4>Date of application: </h4> <p>12.12.2019</p>
            <br>
            <h4>Status: </h4> 
            <div class="alert alert-warning" role="alert" style="width:33%; margin:auto;">
            <strong>Rebutted</strong>.
            </div>
            <br>
            <h4>Comment from secretary: </h4>
            <p>The profile picture you submitted doesn't fulfill the terms of conduct criteria.</p>   
            <br>
            <button type="submit" class="btn btn-primary ">Fix application</button>
        </div>

      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>

export default {
  name: "applicationstatus"
};
</script>