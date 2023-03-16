<template>
  <form class="logform p-5" @submit.prevent="register">
    <h2 class="mb-4">Create an account</h2>
    
    <div class="form-outline mb-1 d-flex justify-content-between">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" name="fname" />
        </div>
        <div class="col">
          <input type="text" class="form-control" name="lname" />
        </div>
      </div>
    </div>
    <div class="row form-outline mb-4 d-flex">
      <label class="form-label col-6">First Name</label>
      <label class="form-label col-6">Last Name</label>
    </div>

    <div class="form-outline mb-4">
      <input type="email" class="form-control" name="email" />
      <label class="form-label">Email</label>
    </div>

    <div class="form-outline mb-4">
      <input type="password" class="form-control" name="pass" />
      <label class="form-label">Password</label>
    </div>

    <div class="d-flex">
      <div class="col-8"></div>
      <button type="submit" class="btn btn-success btn-block mb-4 col-4">
        Resister
      </button>
    </div>
  </form>
</template>
<script>
import CryptoJS from "crypto-js";

export default {
  name: "RegisterCompo",
  data() {
    return {
      key: "test",
    };
  },
  methods: {
    register(e) {
      let user = {};
      let Users;

      const formData = new FormData(e.target);
      if (localStorage.getItem("users") == null) {
        user.id = 1;
        Users = [];
      } else {
        Users = JSON.parse(this.decrypt(localStorage.getItem("users")));
        for (let user of Users) {
          if (user.email == e.target.email.value) {
            alert("Account already existed");
            return false;
          }
        }
        let newId = Users.length + 1;
        user.id = newId;
      }
      formData.forEach((value, key) => {
        user[key] = value;
      });
      Users.push(user);
      console.log(Users);
      localStorage.setItem("users",this.encrypt(JSON.stringify(Users)));
      e.target.fname.value = "";
      e.target.lname.value = "";
      e.target.email.value = "";
      e.target.pass.value = "";
      alert("You have registered!")
      this.$router.push({name:"login-page"});
    },
    encrypt(data) {
      return CryptoJS.AES.encrypt(data, this.key).toString();
    },
    decrypt(encData) {
      let decData = CryptoJS.AES.decrypt(encData, this.key);
      return decData.toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>
<style scoped>
  form {
    background:white;
    border-radius: 50px;
    width:400px;
    border: 5px double rgb(64, 171, 64);
    margin-top:5%;
    margin-bottom:10%
  }

  h2 {
    text-align: center;
    margin-bottom: 5%;
  }
  input {
    font-family: Arial, Helvetica, sans-serif;
  }



</style>
