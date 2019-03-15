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
          <h4>Hapat per tu bere anetar:</h4>
          <p>Te jesh inxhinier i diplomuar.</p>
          <p>Te pranosh statutin e SHOSHIK.</p>
          <p>Te paguhet kuota vjetore e anetaresimit.</p>
          <p>Te mos kesh kufizime ligjore per ushtrimin e profesionit.</p>
          <br />
          <h5>Kerkesat:</h5>
          <ul class="details cols-3">
            <li>
              <i class="fa fa-briefcase"></i>
              <span>Kohezgjatja: 1 vit</span>
            </li>

            <li>
              <i class="fa fa-money"></i>
              <span>Pagesa vjetore:</span>
            </li>
            <li>
              <i class="fa fa-certificate"></i>
              <span>Profesioni: Inxhinier</span>
            </li>
          </ul>

          <div class="text-center">
            <div class="action-buttons">
              <router-link
                :to="{ name: 'Application' }"
                class="btn btn-success"
                v-if="currentUser.register_status == 'blank'"
                >Apliko tani</router-link
              >
              <router-link
                :to="{ name: 'ReApplication' }"
                class="btn btn-success"
                v-if="
                  currentUser.register_status == 'rebutted' ||
                    currentUser.register_status == 'accepted'
                "
                >Apliko tani</router-link
              >
            </div>
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
import { mapGetters } from "vuex";

export default {
  name: "Membership",
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
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
