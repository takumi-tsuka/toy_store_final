<template>
  <div class="container d-flex justify-content-center">
    <div class="row d-flex justify-content-center">
      <sort-compo class="m-2 col-10" />
      <div class="card col-2 m-1 p-2" v-for="(toy, idx) in toyData" :key="idx">
        <img
          class="card-img-top"
          :src="require('../../assets/img/' + toy.img)"
          alt="Toy image"
        />
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">{{ toy.name }}</h5>
          <h4 class="card-subtitle">${{ toy.price }}</h4>
          <p class="card-text">Age: {{ toy.age }} or older</p>
          <a href="#" class="btn btn-warning">See more!</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toyjson from "../../assets/toys.json";
import SortCompo from "./SortCompo.vue";
export default {
  name: "ProductCompo",
  components: {
    SortCompo,
  },
  data() {
    return {
      toyData: toyjson,
    };
  },
};
</script>
