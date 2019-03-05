<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg)"
    >
      <div class="container no-shadow">
        <h1 class="text-center">Publications</h1>
        <p class="lead text-center">Read our publicly available publications</p>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <article class="post">
            <div class="col-md-5 col-lg-5">
              <div class="post-media">
                <router-link to="/publication_detail">
                  <img src="static/img/publication1.jpg" alt="...">
                </router-link>
              </div>
            </div>

            <div class="col-md-7 col-lg-7">
              <header style="display:inline;">
                <h2>
                  <router-link to="/publication_detail">First book of congress</router-link>
                </h2>
                <time datetime="2016-04-04 20:00">April 04, 2016</time>
                <br>
              </header>

              <div class="blog-content">
                <p class="text-justify">
                  One of the greatest benefits of a well-designed workspace and consequently, the option of privacy in the office is an increase in engagement and productivity among workers. Of the 11 percent of survey respondents who were highly
                  satisfied with their work environments, the majority said that their workplace allowed them to concentrate easily, work in teams without being interrupted, choose where to work based on their task, and feel a sense of belonging
                  to the company and its culture.
                </p>
              </div>
              <p class="read-more">
                <router-link
                  to="/publication_detail"
                  class="btn btn-primary btn-outline"
                >Continue reading</router-link>
              </p>
            </div>
          </article>

          <article class="post">
            <div class="col-md-5 col-lg-5">
              <div class="post-media">
                <router-link to="/publication_detail">
                  <img src="static/img/blog-3.jpg" alt="...">
                </router-link>
              </div>
            </div>

            <div class="col-md-7 col-lg-7">
              <header style="display:inline;">
                <h2>
                  <router-link href="/publication_detail">Second book of congress</router-link>
                </h2>
                <time datetime="2016-04-04 20:00">March 04, 2017</time>
                <br>
              </header>

              <div class="blog-content">
                <p
                  class="text-justify"
                >Professionally plagiarize mission-critical “outside the box” thinking vis-a-vis premium bandwidth. Interactively restore tactical opportunities after leveraged methods of empowerment. Continually leverage existing adaptive action items whereas emerging benefits. Dramatically underwhelm cooperative networks without backend “outside the box” thinking. Interactively deploy multifunctional ROI rather than interoperable convergence.</p>
              </div>
              <p class="read-more">
                <router-link
                  to="/publication_detail"
                  class="btn btn-primary btn-outline"
                >Continue reading</router-link>
              </p>
            </div>
          </article>

          <article class="post">
            <div class="col-md-5 col-lg-5">
              <div class="post-media">
                <router-link to="/publication_detail">
                  <img src="static/img/publication1.jpg" alt="...">
                </router-link>
              </div>
            </div>

            <div class="col-md-7 col-lg-7">
              <header style="display:inline;">
                <h2>
                  <router-link to="/publication_detail">First conference publication on roads</router-link>
                </h2>
                <time datetime="2016-04-04 20:00">July 04, 2017</time>
                <br>
              </header>

              <div class="blog-content">
                <p
                  class="text-justify"
                >Appropriately empower B2C communities without ubiquitous benefits. Interactively reinvent cross-unit action items without cross-platform e-commerce. Authoritatively plagiarize team building initiatives with economically sound core competencies. Professionally re-engineer high-payoff processes for extensible action items. Credibly cultivate viral innovation without high-payoff testing procedures.</p>
              </div>
              <p class="read-more">
                <router-link
                  to="/publication_detail"
                  class="btn btn-primary btn-outline"
                >Continue reading</router-link>
              </p>
            </div>
          </article>

          <nav>
            <ul class="pager">
              <li class="previous">
                <a href="#">
                  <i class="ti-arrow-left"></i> Older posts
                </a>
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
  name: "publications"
};
</script>
<style scoped>
.navbar .logo img,
.navbar .logo-alt img {
  height: 70px;
}

.post-media {
  padding-top: 29px;
}
</style>
