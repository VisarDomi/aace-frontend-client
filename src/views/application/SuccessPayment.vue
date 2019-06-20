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
          <h3>Mandat pagesa u dergua me sukses</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link :to="{ name: 'Home' }"
                >Shko ne faqen kryesore</router-link
              >
            </li>
            <li class="list-group-item">
              <router-link :to="{ name: 'ApplicationStatus' }"
                >Shiko statusin e aplikimit</router-link
              >
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
  name: "SuccessPayment",
  mounted() {
    let USER = JSON.parse(localStorage.getItem("user"));
    let TOKEN = localStorage.getItem("id_token");
    console.log("payment status, ", USER.payment_status);
    let date = new Date();
    console.log("date", date.toISOString())
    if (USER.payment_status == "blank") {
      axios
        .put(
          "https://aace.ml/api/user/" + USER.id,
          {
            payment_status: "sending_payment",
            send_payment_date: date.toISOString()
          },
          {
            headers: {
              Authorization: "Bearer " + TOKEN
            }
          }
        )
        .then(res => {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res);
        });
    } else {
      axios
        .put(
          "https://aace.ml/api/user/" + USER.id,
          {
            payment_status: "resending_payment",
            resend_payment_date: date.toISOString()
          },
          {
            headers: {
              Authorization: "Bearer " + TOKEN
            }
          }
        )
        .then(res => {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res);
        });
    }
  }
};
</script>
