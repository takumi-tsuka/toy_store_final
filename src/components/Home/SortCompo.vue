<template>
  <div name="divSortBy">
    <select v-model="sort" @change="sortBy">
      <option value="Sortby">Sort by:</option>
      <option value="priceAsc">Price (Low to High)</option>
      <option value="priceDesc">Price (High to Low)</option>
      <option value="ageAsc">Age (Young to Old)</option>
      <option value="ageDesc">Age (Old to Young)</option>
    </select>
  </div>
</template>

<script>
import toyjson from "../../assets/toys.json";

export default {
  name: "SortCompo",
  data() {
    return {
      toyData: toyjson,
      sort: "Sort by:",
    };
  },
  methods: {
    sortBy() {
      switch (this.sort) {
        case "Sortby":
          this.toyData.sort((a, b) => a.id - b.id);
          break;
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
      }
      this.$emit("sort", this.toyData);
    },
  },
};
</script>
