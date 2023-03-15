<template>
  <div name="divSortBy" class="col-2">
    <select v-model="agefilter" @change="applyFilters" class="form-select">
      <option selected>Age Filter:</option>
      <option value="1to2">1mos - 2ys</option>
      <option value="3to5">3ys - 5ys</option>
      <option value="6to10">6ys - 9ys</option>
      <option value="10more">10ys - More</option>
    </select>
  </div>
  <div name="divSortBy" class="col-2">
    <select v-model="pricefilter" @change="applyFilters" class="form-select">
      <option selected>Price Filter:</option>
      <option value="1to30">CA$1 - CA$30</option>
      <option value="31to60">CA$31 - CA$60</option>
      <option value="61to90">CA$61 - CA$90</option>
      <option value="100more">CA$100...</option>
    </select>
  </div>
</template>

<script>
import toyjson from "../../assets/toys.json";
export default {
  name: "FilterCompo",
  props: ["toyData"],
  data() {
    return {
      originalData: toyjson,
      agefilter: "Ageby",
      pricefilter: "Priceby",
    };
  },
  methods: {
    applyFilters() {
      console.log(this.toyData)
      let filteredData = this.toyData;
      switch (this.agefilter) {
        case "1to2":
          filteredData = this.toyData.filter(toy => toy.age >= 0 && toy.age <= 2);
          break;
        case "3to5":
          filteredData = this.toyData.filter(toy => toy.age >= 3 && toy.age <= 5);
          break;
        case "6to10":
          filteredData = this.toyData.filter(toy => toy.age >= 6 && toy.age <= 9);
          break;
        case "10more":
          filteredData = this.toyData.filter(toy => toy.age >= 10);
          console.log(filteredData)
          break;
      }
      switch (this.pricefilter) {
        case "1to30":
          filteredData = this.toyData.filter(toy => toy.price >= 0 && toy.price <= 30);
          break;
        case "31to60":
          filteredData = this.toyData.filter(toy => toy.price >= 31 && toy.price <= 60);
          break;
        case "61to90":
          filteredData = this.toyData.filter(toy => toy.price >= 61 && toy.price <= 90);
          break;
        case "100more":
          filteredData = this.toyData.filter(toy => toy.price >= 100);
          break;
      }
      this.$emit("sort", filteredData);
    },
  },
};
</script>
