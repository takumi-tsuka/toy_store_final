<template>
 <div name="divSortBy">
    <h6>Filter:</h6>
  </div>
  <div name="divSortBy">
    <select v-model="agefilter" @change="applyFilters">
      <option value="Ageby" selected>Age:</option>
      <option value="1to2">1mos - 2ys </option>
      <option value="3to5">3ys - 5ys</option>
      <option value="6to10">6ys - 9ys</option>
      <option value="10more">10ys - More</option>
    </select>
  </div>
  <div name="divSortBy">
    <select v-model="pricefilter" @change="applyFilters">
      <option value="Priceby" selected>Price:</option>
      <option value="1to30">CA$1-CA$30</option>
      <option value="31to60">CA$31-CA$60</option>
      <option value="61to90">CA$61-CA$90</option>
      <option value="100more">CA$100...</option>
    </select>
  </div>
</template>
<script>
import toyjson from "../../assets/toys.json";

export default {
  name: "FilterCompo",
  data() {
    return {
      toyData: toyjson,
    //   agefilter: "Ageby",
    //   pricefilter: "Priceby",
    };
  },
  methods: {
    applyFilters() {
      let filteredData = this.toyData;
      switch (this.agefilter) {
        case "1to2":
          filteredData = filteredData.filter(toy => toy.age >= 0 && toy.age <= 2);
          break;
        case "3to5":
          filteredData = filteredData.filter(toy => toy.age >= 3 && toy.age <= 5);
          break;
        case "6to10":
          filteredData = filteredData.filter(toy => toy.age >= 6 && toy.age <= 9);
          break;
        case "10more":
          filteredData = filteredData.filter(toy => toy.age >= 10);
          break;
      }
      switch (this.pricefilter) {
        case "1to30":
          filteredData = filteredData.filter(toy => toy.price >= 0 && toy.price <= 30);
          break;
        case "31to60":
          filteredData = filteredData.filter(toy => toy.price >= 31 && toy.price <= 60);
          break;
        case "61to90":
          filteredData = filteredData.filter(toy => toy.price >= 61 && toy.price <= 90);
          break;
        case "100more":
          filteredData = filteredData.filter(toy => toy.price >= 100);
          break;
      }
      this.$emit("filteredData", filteredData);
    },
  },
};
</script>