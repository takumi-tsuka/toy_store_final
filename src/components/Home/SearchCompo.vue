<template>
    <form class="d-flex" style="column-gap: 0.5rem">
        <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            @:input="tmpSearchToy"
            v-model="input"
        />
        <button type="submit" class="btn btn-success" @click.prevent="searchToy">Search</button>
    </form>
    <ul v-if="searchFlag">
        <li v-for="toy in selectedToyData" :key="toy.id" :id="toy.id" @click="test" style="list-style-type: none">{{toy.name}}</li>
    </ul>
</template>

<script>
    export default ({
        name: "SearchCompo",
        props: ["toyData", "originalToyData"],
        data() {
            return {
                selectedToyData: this.toyData,
                searchFlag: false,
            }
        },
        methods: {
            searchToy() {
                this.$emit("sort", this.selectedToyData);
                this.selectedToyData = null;
            },
            test(e) {
                this.$router.push({name:"detail-page",query:{id:e.target.id}})
            },
            tmpSearchToy(e) {
                this.searchFlag = true;
                if(this.input == "") {
                    this.searchFlag = false;
                }
                let pickedDataArray = []; 
                for(let pickedData of this.originalToyData) { 
                    if(pickedData.name.toLowerCase().indexOf(e.target.value) != -1) { 
                        pickedDataArray.push(pickedData);
                    }
                }
                this.selectedToyData = pickedDataArray;
                // this.$emit("sort", pickedDataArray);
            }
        }
    })
</script>
