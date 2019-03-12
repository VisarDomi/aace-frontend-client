<template>
  <div>
    <!-- Site header -->
    <header
      class="site-header size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg); background-position: top left"
    >
      <div class="container">
        <div class="col-md-5">
          <br />
          <br />
          <h4>Welcome to the Albanian Association of Consulting Engineers.</h4>
          <br />
          <h6 class="font-alt">
            This is the home of all engineers operating in Albania, the home for
            the Albanian scientific thought contributing in the development of
            the country. Local or foreign consulting engineers based in Albania
            are welcome to join the Association in order to give their
            contribution.
          </h6>
          <br />
          <br />
          <router-link :to="{ name: 'Membership' }">
            <button class="btn btn-primary" type="submit">Get involved</button>
          </router-link>
        </div>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main>
      <!-- How it works -->
      <section>
        <div class="container">
          <div class="col-sm-12 col-md-6">
            <header class="section-header text-left">
              <span>About us</span>
              <h2>Who we are</h2>
            </header>

            <p class="lead">
              This is the home of all engineers operating in Albania, the home
              for the Albanian scientific thought contributing in the
              development of the country. Local or foreign consulting engineers
              based in Albania are welcome to join the Association in order to
              give their contribution.
            </p>
            <p>
              Since 15 years the Albanian Association of Consulting Engineers
              has represented the voice of the sector locally and
              internationally. While the international events have helped us to
              get in touch with the recent developments in science and
              technology, the local meetings, seminars and conferences have
              given a significant contribution in bringing such experiences home
              to the Albanian engineers.
            </p>
            <p>
              Our mission is to maintain a level of professionalism and
              standards in design and construction works in Albania by providing
              scientific backup and sustainable solutions.
            </p>

            <br />
            <br />
            <router-link :to="{ name: 'About' }" class="btn btn-primary"
              >Learn more</router-link
            >
          </div>

          <div class="col-sm-12 col-md-6 hidden-xs hidden-sm">
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              class="center-block"
              src="/static/img/aboutus_plc.png"
              alt="how it works"
            />
          </div>
        </div>
      </section>
      <!-- END How it works -->
      <!-- Facts -->
      <section
        class="bg-img bg-repeat no-overlay section-sm"
        style="background-image: url(/static/img/bg-pattern.png)"
      >
        <div class="container">
          <div class="row">
            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="68"></span>+</p>
              <h6>Publications</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="1200"></span>+</p>
              <h6>Members</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="36"></span>+</p>
              <h6>Events</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="15"></span>+</p>
              <h6>Partners</h6>
            </div>
          </div>
        </div>
      </section>
      <!-- END Facts -->
      <!-- Categories -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Explore</span>
            <h2>Learn more about AACE</h2>
            <p>Here's the most popular categories</p>
          </header>

          <div class="category-grid">
            <router-link :to="{ name: 'Events' }" style="height: 295px;">
              <i class="fa fa-calendar"></i>
              <h6>Events</h6>
              <p>Attend events organized by members and directors</p>
            </router-link>

            <router-link :to="{ name: 'Directory' }" style="height: 295px;">
              <i class="fa fa-clipboard"></i>
              <h6>Engineer Directory</h6>
              <p>Find all member engineers in the platform</p>
            </router-link>

            <router-link :to="{ name: 'Publications' }" style="height: 295px;">
              <i class="fa fa-newspaper-o"></i>
              <h6>Publications</h6>
              <p>Read about our latest developments</p>
            </router-link>

            <router-link :to="{ name: 'Membership' }" style="height: 295px;">
              <i class="fa fa-users"></i>
              <h6>Membership</h6>
              <p>Learn the rules and how to become a member</p>
            </router-link>

            <router-link :to="{ name: 'Board' }" style="height: 295px;">
              <i class="fa fa-sitemap"></i>
              <h6>Board of directors</h6>
              <p>Get to know our board of directors</p>
            </router-link>

            <router-link :to="{ name: 'Login' }" style="height: 295px;">
              <i class="fa fa-sign-in"></i>
              <h6>Member platform</h6>
              <p>The social network platform for our members</p>
            </router-link>
          </div>
        </div>
      </section>
      <!-- END Categories -->
      <!-- Newsletter -->
      <!-- <section
        class="bg-img text-center"
        style="background-image: url(/static/img/newsletter_plc.jpg)"
      >
        <div class="container">
          <h2>
            <strong>Subscribe to our newsletter</strong>
          </h2>
          <h6 class="font-alt">Get weekly news and updates to your inbox</h6>
          <br>
          <br>
          <form class="form-subscribe" action="#">
            <div class="input-group">
              <input type="text" class="form-control input-lg" placeholder="Your eamil address">
              <span class="input-group-btn">
                <button class="btn btn-success btn-lg" type="submit">Subscribe</button>
              </span>
            </div>
          </form>
        </div>
      </section>-->
      <!-- END Newsletter -->
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
