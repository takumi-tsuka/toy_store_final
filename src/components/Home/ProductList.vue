<template>
  <div class="container d-flex justify-content-center">
    <div class="row d-flex justify-content-center">
      <div class="sf">
        <sort-compo @sort="sorted" class="m-2 col-10" />
        <filter-compo @filteredData="sorted" @pricefilter="sorted" class="m-2 col-10" />
      </div>

      <!-- CAROUSEL START -->
      <div class="container d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
          <div id="myCarousel" class="carousel slide col-11 m-2" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="saleOne"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="saleTwo"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="saleThree"
                  alt="third slide"
                />
              </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <!-- CAROUSEL END -->

      <div class="card col-2 m-2 p-2" v-for="(toy, idx) in toyData" :key="idx">
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
import FilterCompo from "./FilterCompo.vue";

export default {
  name: "ProductCompo",
  components: {
    SortCompo,
    FilterCompo,
  },
  data() {
    return {
      toyData: toyjson,
      //PICTURES TO CAROU
      saleOne: require('../../assets/sale1.png'),
      saleTwo: require('../../assets/sale2.png'),
      saleThree: require('../../assets/sale3.png')
    }
  },
  methods: {
    sorted(data) {
      this.toyData = data;
      console.log(this.toyData);
    },
  }     
};
</script>

<style>
.sf {
  display: flex;
  gap: 1vh;
}
</style>
