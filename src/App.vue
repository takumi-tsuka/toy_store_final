<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="row col-12 d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-between" style="position:fixed;z-index:100;">
        <div class="col-1"></div>
        <router-link to="/" class="navbar-brand col-5"><img src="./assets/logo.png" alt="logo" style="width: 200px; height: 50px;"></router-link>
        <div class="collapse navbar-collapse col-4" id="navbarSupportedContent" >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-show="logFlag">
              <router-link to="/cart" class="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
              </router-link>
            </li>
            <li class="nav-item" v-show="logFlag">
              <router-link class="nav-link" to="/login" @click="logout"><i class="fa-solid fa-right-from-bracket"></i></router-link>
            </li>
             <li class="nav-item" v-show="!logFlag">
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
    <router-view :cart="cart" @login="login" style="margin-top:5%"/>
  </main>
</template>

<script>
import CartClass from "./classes/CartClass.js";
import CryptoJS from "crypto-js";
export default {
  name: "App",
  components: {},
  data(){
    return {
      cart:null,
      logFlag:false,
      key:"test"
    }
  },
  methods:{
     encrypt(data) {
      return CryptoJS.AES.encrypt(data, this.key).toString();
    },
    decrypt(encData) {
      const decData = CryptoJS.AES.decrypt(encData, this.key);
      return decData.toString(CryptoJS.enc.Utf8);
    },
    login(user){
      this.logFlag = true;
      this.cart = new CartClass(user);
    },
    logout(){
      sessionStorage.clear();
      this.logFlag = false;
      alert("You have been Logged out");
    }
  },
  mounted(){
    if(sessionStorage.getItem("user") != null){
      let logUser = JSON.parse(this.decrypt(sessionStorage.getItem("user")));
      this.cart = new CartClass(logUser);
      this.logFlag = true;
    }else{
      this.logFlag = false;
    }
  }
};
</script>
<style scoped>
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
  font-family:Arial, Helvetica, sans-serif;
}

</style>
