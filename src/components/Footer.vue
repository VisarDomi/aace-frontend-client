<template>
  <div>
    <!-- Site footer -->
    <footer class="site-footer">
      <!-- Topper section -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-7">
            <router-link :to="{ name: 'Home' }" class="logo">
              <img src="/static/img/logo_full.png" alt="logo" />
            </router-link>
          </div>
        </div>

        <hr />
      </div>
      <!-- END Topper section -->
      <!-- Top section -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Rreth nesh</h6>
            <p class="text-justify">SHOSHIK eshte qendra e te gjithe inxhiniereve qe operojne ne Shqiperi gjithashtu dhe qendra e mendimit shkencor shqiptar qe kontribuon ne zhvillimin e vendit.
            Inxhinieret konsulete lokal apo te huaj qe punojne ne Shqiperi jane te mirepritur t'i bashkohen Shoqates ne menyre qe t'japin kontributin e tyre.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>SHOSHIK</h6>
            <ul class="footer-links">
              <li>
                <router-link :to="{ name: 'About' }">Rreth nesh</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Directory' }"
                  >Kerko per anetare</router-link
                >
              </li>
              <!-- <li>
                <router-link :to="{ name: 'Events' }">Events</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Publications' }">Publications</router-link>
              </li>-->
              <li>
                <router-link :to="{ name: 'Contact' }"
                  >Na kontaktoni</router-link
                >
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Faqe te dobishme</h6>
            <ul class="footer-links">
              <li>
                <router-link :to="{ name: 'Membership' }"
                  >Si te behem anetar</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Login' }">Hyr</router-link>
              </li>
              <!-- <li>
                <router-link :to="{name: 'Board'}">Contact the board</router-link>
              </li>-->
              <!-- <li>
                <router-link :to="{ name: 'Privacy' }">Polica e privacise</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Terms' }">Kushtet e pranimit</router-link>
              </li>-->
            </ul>
          </div>
        </div>

        <hr />
      </div>
      <!-- END Top section -->
      <!-- Bottom section -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyrights &copy; 2019 All Rights Reserved by
              <a href="https://forcewing.com" target="_blank">FORCEWING</a>.
            </p>
          </div>

          <!-- <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a class="instagram" href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
      <!-- END Bottom section -->
    </footer>
    <!-- END Site footer -->
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>
