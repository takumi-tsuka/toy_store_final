<template>
  <div class="container d-flex justify-content-center">
    <div class="row col-12 d-flex justify-content-center">
      <div name="divSortBy">
        <span>
          Sort by:
        </span>
        <select v-model="sort" name="selectSortBy" @change="sortBy">
          <option
            v-for="item in sortedList"
            :key="item.id"
            name="selectOptionsSortBy"
            :value="item"
            @click="sortBy"
            v-text="item.title"
          ></option>
        </select>
      </div>
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
      sortOptions: [
        { text: 'Price (Low to High)', value: 'priceAsc' },
        { text: 'Price (High to Low)', value: 'priceDesc' },
        { text: 'Age (Young to Old)', value: 'ageAsc' },
        { text: 'Age (Old to Young)', value: 'ageDesc' }
      ],
      selectedSortOption: 'priceAsc'
    };
  },
  methods:{
    sortBy() {
    switch (this.sort) {
      case "priceAsc":
        this.toyData.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        this.toyData.sort((a, b) => b.price - a.price);
        break;
      case "ageAsc":
        this.toyData.sort((a, b) => a.age - b.age);
        break;
      case "ageDesc":
        this.toyData.sort((a, b) => b.age - a.age);
        break;
      default:
        break;
      }
    }
  },
  computed:{
    sortedList() {
      return this.sortOptions.map((option) => {
        return {
          id:option.value,
          title:option.text,
        };
      });
    },
    sort() {
      return this.selectedSortOption;
    }
  }
};
</script>
