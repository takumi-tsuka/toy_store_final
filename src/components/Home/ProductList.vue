<template>
  <div class="container d-flex justify-content-center">
    <div class="row col-12 d-flex justify-content-center">
      <sort-compo @sort="sorted" :toyData="toyData" class="m-2 col-10" />
      <search-compo @sort="sorted" :toyData="toyData" :originalToyData="originalToyData" class="m-2 col-10" />
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
          <router-link @click="selectToy(toy)" class="btn btn-warning" to="/detail">Add to Cart</router-link>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import toyjson from "../../assets/toys.json";
import SearchCompo from "./SearchCompo.vue";
import SortCompo from "./SortCompo.vue";

export default {
  name: "ProductCompo",
  components: {
    SearchCompo,
    SortCompo,
  },
  data() {
    return {
      toyData: toyjson, //this will be changed depending on filter, sort, and search compo.
      originalToyData: toyjson
    }
  },
  methods:{
    selectToy(toy){
      this.$router.push({name:"detail-page",query:{id:toy.id}})
    },
    sorted(data){
      this.toyData = data;
      console.log(data)
      console.log(this.toyData);
    }
  }
};
</script>
