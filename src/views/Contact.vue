<template>
  <div>
    <header
      class="page-header bg-img size-lg"
      style="background-image: url(static/img/bg-banner2.jpg)"
    >
      <!-- <div class="container no-shadow">
        <h1 class="text-center">Na kontaktoni</h1>
        <p class="lead text-center">
          Thoni pershendetje, na shkruani nje leter, dhe ne do you kontaktojm sa
          me shpejt te jete e mundur.
        </p>
      </div>-->
    </header>

    <!-- Main container -->
    <main>
      <section>
        <div class="container">
          <div class="row">
            <!-- <div class="col-sm-12 col-md-8">
              <h4>Forma e kontaktit</h4>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input-lg"
                    placeholder="Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control input-lg"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Dergo</button>
              </form>
            </div>-->
            <div class="col-sm-24 col-md-12">
              <h4>Informacion</h4>
              <div class="highlighted-block">
                <p>
                  Te gjitha informacionet shtese mund te merren duke kontaktuar
                  me koordinatoren e kongresit.
                </p>

                <p>
                  Zj. Ira Kadare (Shqip, Anglisht, Italisht) nepermjet kontaktit
                  te meposhtem:
                </p>
                <dl class="icon-holder">
                  <dt>
                    <i class="fa fa-map-marker"></i>
                  </dt>
                  <dd>Rr. Qemal Stafa, P.132, Ap.21060 Tirane, Shqiperi</dd>

                  <dt>
                    <i class="fa fa-phone"></i>
                  </dt>
                  <dd>+355 4 22 25 650</dd>

                  <dt>
                    <i class="fa fa-envelope"></i>
                  </dt>
                  <dd>secretary@aace.al</dd>
                </dl>
              </div>

              <br />

              <!-- <ul class="social-icons size-sm text-center">
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
                  <a class="instagram" href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>-->
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.page-header {
  margin-bottom: 0px;
}
</style>
