<template>
  <div>
  <form class="logform p-5">
    <h2>LOGIN</h2>
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

    <!-- SUBMIT BUTTON -->

    <button type="submit" class="btn btn-success btn-block mb-4" @click.prevent="login">Sign In</button>
    <!-- REGISTER BUTTON -->
    <div>
      <p>Not a member? <RouterLink class="register" to="/register">Register</RouterLink></p>
    </div>
  </form>
</div>
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
         this.$router.push({name:'product-page'});
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
<style scoped>
  form {
    background:white;
    border-radius: 50px;
    border: 5px double rgb(64, 171, 64);
    margin-top:5%;
    margin-bottom:10%
  }

  h2 {
    text-align: center;
    margin-bottom: 5%;
  }

  .register {
    color: green;
  }

</style>
