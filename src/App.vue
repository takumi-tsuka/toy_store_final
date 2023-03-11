<template>
  <div class="container d-flex justify-content-center mb-4">
    <div class="row col-12 d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="col-1"></div>
        <router-link to="/" class="navbar-brand col-6">Toy Store</router-link>
        <div class="collapse navbar-collapse col-4" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">My Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
          <form class="d-flex" style="column-gap: 0.5rem">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" class="btn btn-success">Search</button>
          </form>
          <div class="col-1"></div>
        </div>
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
      cart:null
    }
  },
  mounted(){
    this.cart = new CartClass("user");
  }
};
</script>

<style>
main, nav {
  font-family: "Walter Turncoat", cursive;
}
</style>
