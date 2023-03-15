<template>
  <form class="logform m-5">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" name="email" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" name="pass" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>

      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>

    <!-- SUBMIT BUTTON -->

    <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="login">Sign In</button>
    <!-- REGISTER BUTTON -->
    <div>
      <p>Not a member? <RouterLink to="/register">Register</RouterLink></p>
    </div>
  </form>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  name: "LoginPage",
  data() {
    return {
      key: "test",
      logFlag:false,
    };
  },
  methods: {
    
    login() {
      const email = document.getElementsByName("email")[0].value;
      const pass = document.getElementsByName("pass")[0].value;
      const Users = JSON.parse(this.decrypt(localStorage.getItem("users")));
      const user = Users.find(user => user.email === email && user.pass === pass);
      if (user) {
        alert("User logged in successfully");

        // encrypt user information
        const encUser = this.encrypt(JSON.stringify(user));
  
        // store encrypted user information in sessionStorage
        sessionStorage.setItem("user", encUser);  

        this.$router.push({name:'product-page'});
        this.$emit("login",user);   //added by takumi to use user info in app.vue when user login
      } else {
        alert("Invalid email or password");
      }
    },
    encrypt(data) {
      return CryptoJS.AES.encrypt(data, this.key).toString();
    },
    decrypt(encData) {
      const decData = CryptoJS.AES.decrypt(encData, this.key);
      return decData.toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>
