<template>
  <div>
    <!-- Page header -->
    <header
      class="page-header bg-img size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg)"
    >
      <div class="container">
        <div class="header-detail">
          <img class="logo" src="static/img/logo_partial.png" alt>
          <div class="hgroup">
            <h1>Kerkese per Anetaresi</h1>
            <h3>
              <a href="#">SHOSHIK</a>
            </h3>
          </div>
          <!-- <time datetime="2016-03-03 20:00">2 days ago</time> -->
          <hr>
          <h4>Hapat per tu bere anetar:</h4>
          <p>Te jesh inxhinier i diplomuar.</p>
          <p>Te pranosh statutin e SHOSHIK.</p>
          <p>Te paguhet kuota vjetore e anetaresimit.</p>
          <p>Te mos kesh kufizime ligjore per ushtrimin e profesionit.</p>
          <br>
          <h5>Requirements:</h5>
          <ul class="details cols-3">
            <li>
              <i class="fa fa-briefcase"></i>
              <span>Duration: 1 year</span>
            </li>

            <li>
              <i class="fa fa-money"></i>
              <span>Cost: $200 / year</span>
            </li>
            <li>
              <i class="fa fa-certificate"></i>
              <a href="#">Profession: Certified Engineer</a>
            </li>
          </ul>

          <div class="text-center">
            <div class="action-buttons">
              <router-link
                :to="{name:'Application'}"
                class="btn btn-success"
                v-if="currentUser.register_status == 'blank'"
              >Apply now</router-link>
              <router-link :to="{name:'ReApplication'}" class="btn btn-success" v-else>Apply now</router-link>
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
          <p class="lead">
            AACE – Albanian Association of Consulting Engineers was established
            on May 10, 2000, through a decision of the Law Court of Tirana no.
            1428, date 10.05.2000, by a group of Albanian designers and
            consulting engineers.
          </p>
          <p class="lead">
            AACE is a non-governmental, non-profit organization, which
            represents consulting engineers and consulting firms across the
            country. In September 2001 with the unanimous decision of the
            General Assembly of FIDIC (International Federation of Consulting
            Engineer – Lausanne – Switzerland) AACE was admitted as a permanent
            member with full rights of this prestigious organization.
          </p>

          <br>
          <h2>Benefits of a membership</h2>
          <p>
            AACE plays an instrumental role in bringing industry and Government
            together. We also work closely and collaboratively to maintain and
            grow Albania as a world leader in our industries.
          </p>
          <ul>
            <li>
              <strong>Access our tailored events programme.</strong>
            </li>
            <p>
              We cater for the diversity of our sectors by offering you
              everything from large international trade show participation, at
              discounted rates, through to networking forums and specialist
              briefings to help you grow your business.
            </p>

            <li>
              <strong>Get valuable business development support.</strong>
            </li>
            <p>
              We offer you access to a unique business development centre saving
              you time and effort and have dedicated business development staff
              connecting you to the programmes and people that count.
            </p>

            <li>
              <strong>Be represented through one influential voice.</strong>
            </li>
            <p>
              We work across Industry and Government to identify and influence
              the issues that matter. We represent your ambitions and concerns
              to key stakeholders, Government and the media in both the UK and
              overseas.
            </p>

            <li>
              <strong>Take advantage of our expertise & knowledge.</strong>
            </li>
            <p>
              We offer you a host of industry initiatives, in house expertise,
              exporting and funding advice along with access to 30+ Special
              Interest Groups, allowing you to tap into specialised and current
              knowledge transfer networks.
            </p>

            <li>
              <strong>Increase your brand's exposure in relevant markets.</strong>
            </li>
            <p>
              We offer you valuable exposure via our stakeholder networks,
              promotions at our busy premises and digital PR & Marketing
              channels.
            </p>
          </ul>

          <br>
          <h4>Minimum qualifications</h4>
          <ul>
            <li>
              BA/BS degree in a technical field or equivalent practical
              experience.
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
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
