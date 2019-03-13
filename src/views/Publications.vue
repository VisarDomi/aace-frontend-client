<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg)"
    >
      <div class="container no-shadow">
        <h1 class="text-center">Publikime</h1>
        <p class="lead text-center">Lexoni publikimet tona</p>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <article
            class="post become-block"
            :key="publication.id"
            v-for="publication in publications"
          >
            <div class="col-md-5 col-lg-5">
              <div class="post-media">
                <router-link
                  :to="{
                    name: 'PublicationDetail',
                    params: { id: publication.id }
                  }"
                >
                  <img :src="publication.src" alt="Foto e publikimit" />
                </router-link>
              </div>
            </div>

            <div class="col-md-7 col-lg-7">
              <header style="display:inline;">
                <h2>
                  <router-link
                    :to="{
                      name: 'PublicationDetail',
                      params: { id: publication.id }
                    }"
                    >{{ publication.title }}</router-link
                  >
                </h2>
                <time datetime="2016-04-04 20:00">{{ publication.date }}</time>
                <br />
              </header>

              <div class="blog-content">
                <p class="text-justify">{{ publication.description }}</p>
              </div>
              <p class="read-more">
                <router-link
                  :to="{
                    name: 'PublicationDetail',
                    params: { id: publication.id }
                  }"
                  class="btn btn-primary btn-outline"
                  >Vazhdo leximin</router-link
                >
              </p>
            </div>
          </article>

          <nav>
            <ul class="pager">
              <li class="previous">
                <a href="#"> <i class="ti-arrow-left"></i> Older posts </a>
              </li>
              <li class="next">
                <a href="#">
                  Newer posts
                  <i class="ti-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
    <!-- END Main container -->
  </div>
</template>
<script>
export default {
  name: "Publications",
  data() {
    return {
      publications: [
        {
          title: "Libri i pare i kongresit",
          description: "Pershkrim i publikimit 1",
          id: 1,
          date: "2016-04-04",
          src: "static/img/event1.jpg"
        },
        {
          title: "Libri i dyte i kongresit",
          description: "Pershkrim i publikimit 2",
          id: 2,
          date: "2017-03-04",
          src: "static/img/event2.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
@media (min-width: 1200px) {
  .become-block {
    overflow: hidden;
  }
}
</style>
