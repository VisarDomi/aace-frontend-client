<template>
  <div>
    <!-- Site header -->
    <header
      class="page-header bg-img size-lg overlay-light"
      style="background-image: url(static/img/publication1.jpg)"
    >
      <div class="container no-shadow">
        <h1 class="text-center">Evente</h1>
      </div>
    </header>
    <!-- END Site header -->
    <!-- Main container -->
    <main class="container blog-page">
      <div class="row">
        <div class="col-lg-6 mt-6" :key="event.id" v-for="event in events">
          <router-link :to="{ name: 'EventDetail', params: { id: event.id } }">
            <div class="card text-center">
              <img class="card-img-top" :src="event.src" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{{ event.title }}</h5>
              </div>
              <div class="card-footer text-muted">
                <h5 class="card-date">{{ event.date }}</h5>
                <div class="card-body-text">{{ event.description }}</div>
              </div>
            </div>
          </router-link>
          <p class="read-more">
            <router-link
              :to="{ name: 'EventDetail', params: { id: event.id } }"
              class="btn btn-primary btn-outline"
              >Vazhdo leximin</router-link
            >
          </p>
        </div>
      </div>
    </main>
    <!-- END Main container -->
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [
        {
          title: "Konferenca e pare per publikimin mbi rruget",
          description: "Pershkrim i eventit 1",
          id: 1,
          date: "2017-06-04",
          src: "static/img/publication1.jpg"
        },
        {
          title: "Konferenca e dyte per publikimin mbi rruget",
          description: "Pershkrim i eventit 2",
          id: 2,
          date: "2018-08-04",
          src: "static/img/newsletter_plc.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
*:hover {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

hr {
  border-top: 1px solid #007bff;
  width: 70%;
}

a {
  color: #000;
}

.card {
  background-color: #ffffff;
  padding: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

.card:hover {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
  color: black;
}

address {
  margin-bottom: 0px;
}

#author a {
  color: #fff;
  text-decoration: none;
}

.card-body {
  padding-left: 5px;
  padding-right: 5px;
}

.card-body-text {
  padding: 5px;
  padding-left: 17px;
  font-size: 13px;
  text-align: left;
  padding-bottom: 10px;
}

.card-title {
  color: #29aafe;
}

.card-date {
  color: black;
}
</style>
