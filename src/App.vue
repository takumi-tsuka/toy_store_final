<template>
  <div class="container d-flex justify-content-center mb-4">
    <div class="row col-12 d-flex justify-content-center">
      <!-- <nav>
      <ul>
        <li>
          <router-link to="/">Main page</router-link>
        </li>
        <li>
          <router-link to="/cart">My Cart</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav> -->
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
          <form class="d-flex" style="column-gap: .5rem;">
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
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
main {
  font-family: "Walter Turncoat", cursive;
}
</style>
