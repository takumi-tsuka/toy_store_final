<template>
  <form class="logform m-3 justify-content-center">
    <h3 class="text-success mb-4" >Create an account</h3>
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
      <RouterLink to="/login"><button type="button" class="btn btn-success btn-block mb-4 col-4">
      Sign in
      </button></RouterLink>
    </div>
  </form>
</template>
<script>
export default {
  name: "RegisterCompo",
};
</script>
