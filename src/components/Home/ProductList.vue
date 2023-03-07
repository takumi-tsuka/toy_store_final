<template>
  <div class="container d-flex justify-content-center">
    <div class="row col-12 d-flex justify-content-center">
      <div
        class="card col-2 m-2 p-2"
        v-for="(toy, idx) in toyData"
        :key="idx"
      >
        <img
          class="card-img-top"
          :src="require('../../assets/img/' + toy.img)"
          alt="Toy image"
        />
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">{{ toy.name }}</h5>
          <h4 class="card-subtitle">${{ toy.price }}</h4>
          <p class="card-text">Age: {{ toy.age }} or older</p>
          <a href="#" class="btn btn-warning">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toyjson from "../../assets/toys.json";

export default {
  name: "ProductCompo",
  data() {
    return {
      toyData: toyjson,
    };
  },
};
</script>
