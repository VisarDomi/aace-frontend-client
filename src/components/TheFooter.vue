<template>
  <div>
    <!-- Site footer -->
    <footer class="site-footer">
      <!-- Top section -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p
              class="text-justify"
            >Since 15 years the Albanian Association of Consulting Engineers has represented the voice of the sector locally and internationally. While the international events have helped us to get in touch with the recent developments in science and technology, the local meetings, seminars and conferences have given a significant contribution in bringing such experiences home to the Albanian engineers.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>AACE</h6>
            <ul class="footer-links">
              <li>
                <router-link to="/about">About us</router-link>
              </li>
              <li>
                <router-link to="/browse">Directory</router-link>
              </li>
              <li>
                <router-link to="/events">Events</router-link>
              </li>
              <li>
                <router-link to="/publications">Publications</router-link>
              </li>
              <li>
                <router-link to="/membership">Membership</router-link>
              </li>
              <li>
                <router-link to="/login">Login in</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact us</router-link>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Useful links</h6>
            <ul class="footer-links">
              <li>
                <router-link to="/membership">How to become a member</router-link>
              </li>
              <li>
                <router-link to="/subscribe">Subscribe to our newsletter</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact the board</router-link>
              </li>
              <li>
                <router-link to="/login">Access the platform</router-link>
              </li>
              <li>
                <router-link to="/privacy">Privacy Policy</router-link>
              </li>
              <li>
                <router-link to="/terms">Terms and Agreement</router-link>
              </li>
            </ul>
          </div>
        </div>

        <hr>
      </div>
      <!-- END Top section -->
      <!-- Bottom section -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyrights &copy; 2019 All Rights Reserved by
              <a
                href="https://forcewing.com"
                target="_blank"
              >FORCEWING</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
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
          </div>
        </div>
      </div>
      <!-- END Bottom section -->
    </footer>
    <!-- END Site footer -->
  </div>
</template>

<script>
export default {
  name: "CompFooter"
};
</script>