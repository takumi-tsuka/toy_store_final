<template>
  <div class="row"></div>
  <form class="logform m-3 justify-content-center" @submit.prevent="register">
    <h3 class="text-success mb-4">Create an account</h3>
    <div class="row form-outline mb-1 d-flex">
      <label class="form-label col-6">First Name</label>
      <label class="form-label col-6">Last Name</label>
    </div>

    <div class="form-outline mb-4 d-flex justify-content-between">
      <div class="row col-6">
        <input type="text" class="form-control" name="fname" />
      </div>
      <div class="row col-6">
        <input type="text" class="form-control" name="lname" />
      </div>
    </div>

    <div class="row form-outline mb-4">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" name="email" />
    </div>

    <div class="row form-outline mb-4">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" name="pass" />
    </div>

    <div class="row d-flex">
      <div class="col-8"></div>
      <button type="submit" class="btn btn-success btn-block mb-4 col-4">
        Sign in
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
.form-control{
  font-family:Arial, Helvetica, sans-serif;
}
</style>
