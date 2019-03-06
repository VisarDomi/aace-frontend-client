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
            <span>Official Communications</span>
            <h2>Communications</h2>
          </header>

          <div class="category-grid" v-for="communication in communications" :key="communication.id">
            <router-link style="height: 295px;" :to="{name:'commdetail', params: { id: communication.id}}">
              
              <h6>{{communication.title}}</h6>
              <p>{{communication.description}}</p>
              <br>
              <p><strong>{{communication.date}}</strong> </p>
            </router-link>
          </div>
        </div>
      </section>
      <!-- END Company detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
      return {
          communications : [
              {
                  "id" : "1",
                  "title": "Asamble per Draft Ligjin",
                  "description" : "Disa shenime mbi mbledhjen e dyte qe do behet per diskutimin e neneve te draft ligjit per krijimin e urdherit te inxhinierit.",
                  "date" : "12 Mars, 2019"
              },
              {
                  "id" : "2",
                  "title": "Shenime mbi asamblen e dates 12 Mars",
                  "description" : "Ky komunikim diskuton disa nga pikat qe u hodhen ne diskutim gjate asambles, si dhe pergjigjet per keto pika.",
                  "date" : "27 Mars, 2019"
              }
          ]
      }
  }
};
</script>