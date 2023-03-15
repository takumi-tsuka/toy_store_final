<template>
    <div class="row col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-around" style="position: fixed; z-index: 100">
        <div class="col-1"></div>
        <router-link to="/" class="navbar-brand col-9">
          <img class="logo" src="./assets/logo.png" alt="toy family"/>
        </router-link>
        <div class="collapse navbar-collapse col-2" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto d-flex">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <i class="fa-solid fa-user"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  <main>
    <router-view :cart="cart" style="margin-top: 8%" />
  </main>
</template>

<script>
import CartClass from "./classes/CartClass.js";
export default {
  name: "App",
  components: {},
  data() {
    return {
      cart: null,
      logFlag: false,
    };
  },
  mounted() {
    this.cart = new CartClass("user");
  },
};
</script>

<style>
main,
nav {
  font-family: "Walter Turncoat", cursive;
}

main {
  display: flex;
  padding: 7% 0;
  justify-content: center;
  background-image: url("./assets/bg.jpg");
  background-size: 500px 500px;
  background-position: center;
  background-repeat: repeat;
}

i {
  display: flex;
  font-size: 30px;
}

#navbarSupportedContent {
  gap: 10vh;
  justify-content: flex-end;
}
ul {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 3vh;
}

input {
  font-family: Arial, Helvetica, sans-serif;
}

.logo {
  height: 70px;
}
</style>
