<template>
  <div>
    <header
      class="site-header size-md"
      style="background-image: url(static/img/home_banner_grayed_short.jpg); background-position: top left"
    >
      <div class="container">
        <div class="loader abs tl">
          <!-- Loading -->
        </div>
        <div class="container abs text-center">
          <h1>Sukses!</h1>
          <h3>Aplikimi juaj eshte derguar me sukses</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link :to="{name: 'Home'}">Shko ne faqen kryesore</router-link>
            </li>
            <li class="list-group-item">
              <router-link :to="{name: 'ApplicationStatus'}">Shiko statusin e aplikimit</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Success",
  mounted() {
    let USER_ID = JSON.parse(localStorage.getItem("user")).id;
    let TOKEN = localStorage.getItem("id_token");

    axios
      .put(
        "https://aace.ml/api/user/" + USER_ID,
        {
          register_status: "applying"
        },
        {
          headers: {
            Authorization: "Bearer " + TOKEN
          }
        }
      )
      .then(res => {
        console.log(res);
      });
  }
};
</script>
