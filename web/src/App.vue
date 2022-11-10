<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import $ from "jquery"

export default {
  components: {
    NavBar
  },
  setup() {
    $.ajax ({
      url: "http://127.0.0.1:3000/user/account/token/",
      type: "post",
      data: {
        username: 'hhhh',
        password: "12345",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      },
    });
    $.ajax ({
      url: "http://127.0.0.1:3000/user/account/info/",
      type: "get",
      headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNTFmNjc5OTdlYTI0NzQ2YTRiNjNjYjhmMWRhMzhmZiIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY2ODA3MjY2MCwiZXhwIjoxNjY5MjgyMjYwfQ.uHWvbYSe2CYEWo5LosMdXS8p9XOR2bR8U3dgKvZOYGk"
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    });
    $.ajax ({
      url: "http://127.0.0.1:3000/user/account/register/",
      type: "post",
      data: {
        username: "hhadf",
        password: "123",
        confirmedPassword: "123",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      }
    });

  }
}
</script>


<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
