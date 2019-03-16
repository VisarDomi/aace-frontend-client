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
          <h4>Mireseerdhet ne Shoqaten Shqiptare te Inxhiniereve Konsulente.</h4>
          <br />
          <h6 class="font-alt">
            SHOSHIK eshte qendra e te gjithe inxhiniereve qe operojne ne Shqiperi gjithashtu dhe qendra e mendimit shkencor shqiptar qe kontribuon ne zhvillimin e vendit.
            Inxhinieret konsulete lokal apo te huaj qe punojne ne Shqiperi jane te mirepritur t'i bashkohen Shoqates ne menyre qe t'japin kontributin e tyre.
          </h6>
          <br />
          <br />
          <router-link :to="{ name: 'Membership' }">
            <button class="btn btn-primary" type="submit">
              Behu pjese e shoqates
            </button>
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
              <span>Rreth nesh</span>
              <h2>Kush jemi</h2>
            </header>

            <p class="lead">
              Per 15 vite, Shoqata Shqipetare e Inxhinereve Konsulete ka perfaqesuar zerin e sektorin ne nivel lokal dhe nderkombetar. Gjate kesaj kohe, evenimente internacionale na kane ndihmuar te krijojme kontakt me zhvillimet me t'fundit te shkences dhe teknologjise, nderkohe ne mbledhjet lokale, seminaret, dhe konferencat na kane dhene nje kontribut te sjellim keto eksperienca te fituara te inxhinieret shqiptare.

              

</p>
            <p>Misioni yne eshte te mbajme nje nivel standarti dhe profesionalizmi ne projektim dhe zbatimin e projekteve ne Shqiperi duke dhene mbeshtetje shkencore mbi zgjidhje te qendrueshme.</p>

            <br />
            <br />
            <router-link :to="{ name: 'About' }" class="btn btn-primary"
              >Lexo me shume rreth shoqates</router-link
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
            <div class="counter col-md-4 col-sm-8">
              <p><span data-from="0" data-to="2"></span>+</p>
              <h6>Publikime</h6>
            </div>

            <div class="counter col-md-4 col-sm-8">
              <p><span data-from="0" data-to="50"></span>+</p>
              <h6>Anetare</h6>
            </div>

            <div class="counter col-md-4 col-sm-8">
              <p><span data-from="0" data-to="2"></span>+</p>
              <h6>Evente</h6>
            </div>

            <!-- <div class="counter col-md-3 col-sm-6">
              <p>
                <span data-from="0" data-to="15"></span>+
              </p>
            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="68"></span>+</p>
              <h6>Publikime</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="1200"></span>+</p>
              <h6>Anetare</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="36"></span>+</p>
              <h6>Evente</h6>
            </div>

            <div class="counter col-md-3 col-sm-6">
              <p><span data-from="0" data-to="15"></span>+</p>
              <h6>Partnere</h6>
            </div>-->
          </div>
        </div>
      </section>
      <!-- END Facts -->
      <!-- Categories -->
      <section class="bg-alt">
        <div class="container">
          <header class="section-header">
            <span>Zbulo</span>
            <h2>Sherbimet e ofruara</h2>
            <p>Ketu jane sherbimet e platformes</p>
          </header>

          <div class="category-grid">
            <!-- <router-link :to="{ name: 'Events' }" style="height: 295px;">
              <i class="fa fa-calendar"></i>
              <h6>Events</h6>
              <p>Attend events organized by members and directors</p>
            </router-link>-->
            <router-link :to="{ name: 'Directory' }" style="height: 295px;">
              <i class="fa fa-clipboard"></i>
              <h6>Kerko</h6>
              <p>Kerko indeksin e antareve sipas emrit</p>
            </router-link>

            <!-- <router-link :to="{ name: 'Publications' }" style="height: 295px;">
              <i class="fa fa-newspaper-o"></i>
              <h6>Publications</h6>
              <p>Read about our latest developments</p>
            </router-link>-->
            <router-link :to="{ name: 'Membership' }" style="height: 295px;">
              <i class="fa fa-users"></i>
              <h6>Apliko</h6>
              <p>Meso mbi procesin e aplikimit te antarsise ne SHOSHIK</p>
            </router-link>

            <!-- <router-link :to="{ name: 'Board' }" style="height: 295px;">
              <i class="fa fa-sitemap"></i>
              <h6>Board of directors</h6>
              <p>Get to know our board of directors</p>
            </router-link>-->
            <router-link :to="{ name: 'Login' }" style="height: 295px;">
              <i class="fa fa-sign-in"></i>
              <h6>Zona e anetareve</h6>
              <p>Sherbimet e platformes te rezervuara per anetaret</p>
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
