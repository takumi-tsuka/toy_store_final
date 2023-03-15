<template>
  <div name="divSortBy" class="col-2">
    <select v-model="sort" @change="sortBy" class="form-select">
      <option selected>Sort by:</option>
      <option value="priceAsc">Price (Low to High)</option>
      <option value="priceDesc">Price (High to Low)</option>
      <option value="ageAsc">Age (Young to Old)</option>
      <option value="ageDesc">Age (Old to Young)</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortCompo",
  props: ["toyData"],
  data() {
    return {
      sort: "Sort by:",
      sortedToyData: null,
    };
  },
  methods: {
    sortBy() {
      this.sortedToyData = this.toyData;
      switch (this.sort) {
        // case "default":
        //   this.sortedToyData.sort((a, b) => a.id - b.id);
        //   break;
        case "priceAsc":
          this.sortedToyData.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          this.sortedToyData.sort((a, b) => b.price - a.price);
          break;
        case "ageAsc":
          this.sortedToyData.sort((a, b) => a.age - b.age);
          break;
        case "ageDesc":
          this.sortedToyData.sort((a, b) => b.age - a.age);
          break;
      }
      this.$emit("sort", this.sortedToyData);
    },
  },
};
</script>
