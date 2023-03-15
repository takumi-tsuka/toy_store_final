<template>
  <div class="container">
    <div class="row col-12 d-flex justify-content-center">
      <!-- CAROUSEL START -->
          <div
            id="myCarousel"
            class="carousel slide col-11"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="saleOne" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="saleTwo" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="saleThree" alt="third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
      </div>
      <!-- CAROUSEL END -->

        <div class="row mt-5">
          <div class="d-flex justify-content-center m-3 col-12">
            <sort-compo @sort="sorted" :toyData="toyData" />
            <filter-compo
            @filteredData="sorted"
            @pricefilter="sorted"
            />
            <search-compo
              @sort="sorted"
              :toyData="toyData"
              :originalToyData="originalToyData"
            />
          </div>
        </div>

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
          <router-link
            @click="selectToy(toy)"
            class="btn btn-warning"
            to="/detail"
            >Add to Cart</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toyjson from "../../assets/toys.json";
import FilterCompo from "./FilterCompo.vue";
import SearchCompo from "./SearchCompo.vue";
import SortCompo from "./SortCompo.vue";

export default {
  name: "ProductCompo",
  components: {
    SearchCompo,
    SortCompo,
    FilterCompo,
  },
  data() {
    return {
      toyData: toyjson, //this will be changed depending on filter, sort, and search compo.
      originalToyData: toyjson,
      saleOne: require("../../assets/sale1.png"),
      saleTwo: require("../../assets/sale2.png"),
      saleThree: require("../../assets/sale3.png"),
    };
  },
  methods: {
    selectToy(toy) {
      this.$router.push({ name: "detail-page", query: { id: toy.id } });
    },
    sorted(data) {
      this.toyData = data;
      console.log(data);
      console.log(this.toyData);
    },
  },
};
</script>
