<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="row col-12 d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-between">
        <div class="col-1"></div>
        <router-link to="/" class="navbar-brand col-5">Family Toys</router-link>
        <div class="collapse navbar-collapse col-4" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link"
                ><i class="fa-solid fa-cart-shopping"></i
              ></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"
                ><i class="fa-solid fa-user"></i
              ></router-link>
            </li>
          </ul>
        </div>
        <div class="col-1"></div>
        <div class="collapse navbar-collapse col-5 justify-content-end" id="navbarSupportedContent">
          <form class="d-flex" style="column-gap: 0.5rem">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" class="btn btn-success">Search</button>
          </form>
        </div>
        <div class="col-1"></div>
      </nav>
    </div>
  </div>
  <main>
    <router-view :cart="cart"/>
  </main>
</template>

<script>
import CartClass from "./classes/CartClass.js";
export default {
  name: "App",
  components: {},
  data(){
    return {
      cart:null,
      logFlag: false
    }
  },
  mounted(){
    this.cart = new CartClass("user");
  }
};
</script>

<style>
main,
nav {
  font-family: "Walter Turncoat", cursive;
}

main {
  display: flex;
  justify-content: center;
}

i {
  display: flex;
  font-size: 30px;
}

#navbarSupportedContent {
  gap: 3vh;
}

input {
    font-family:Arial, Helvetica, sans-serif;
  }
</style>
