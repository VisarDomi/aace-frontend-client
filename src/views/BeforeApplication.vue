<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg)"
    >
      <div class="container">
        <div class="header-detail">
          <img class="logo" src="static/img/logo_partial.png" alt />
          <div class="hgroup">
            <h1>Kerkese per Anetaresi</h1>
            <h3>
              <router-link :to="{ name: 'About' }">SHOSHIK</router-link>
            </h3>
          </div>
          <!-- <time datetime="2016-03-03 20:00">2 days ago</time> -->
          <hr />
          <h4>
            Perpara se te aplikoni, duhet te krijoni nje llogari te re ose te
            futeni ne llogarine e juaj egzistuese
          </h4>
          <br />

          <div class="text-center">
            <hr />
            <div class="action-buttons">
              <router-link :to="{ name: 'Register' }" class="btn btn-success"
                >Krijoni nje llogari te re</router-link
              >
            </div>
            <hr />
            <div class="action-buttons">
              <router-link :to="{ name: 'Login' }" class="btn btn-success"
                >Futuni ne llogarine e juaj egzistuese</router-link
              >
            </div>
            <hr />
          </div>
        </div>
      </div>
    </header>
    <!-- END Page header -->
    <!-- Main container -->
    <main>
      <!-- Job detail -->
      <section>
        <div class="container">
          <p class="lead">Pershkrim per SHOSHIK</p>
          <p class="lead">Edhe ktu</p>

          <br />
          <h2>Perfitimet e te qenurit anetar</h2>
          <p>pershkrim</p>
          <ul :key="benefit.id" v-for="benefit in benefits">
            <li>
              <strong>{{ benefit.title }}</strong>
            </li>
            <p>{{ benefit.description }}</p>
          </ul>

          <br />
          <h4>Kualifikimet minimale</h4>
          <ul>
            <li>
              Diplome ne fushat teknike ose me pervoje praktike te
              barazvlefshme.
            </li>
          </ul>
        </div>
      </section>
      <!-- END Job detail -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "BeforeApplication",
  data() {
    return {
      benefits: [
        {
          id: 1,
          title: "pika 1",
          description: "pershkrim pika 1"
        },
        {
          id: 2,
          title: "pika 2",
          description: "pershkrim pika 2"
        },
        {
          id: 3,
          title: "pika 3",
          description: "pershkrim pika 3"
        }
      ]
    };
  }
};
</script>
