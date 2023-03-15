<template>
    <div class="searchContainer">
        <form class="d-flex" style="column-gap: 0.5rem">
            <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                @input="tmpSearchToy"
            />
            <button type="submit" class="btn btn-success" @click.prevent="searchToy">Search</button>
        </form>
        <ul v-if="searchFlag" class="ul">
            <li v-for="toy in selectedToyData" :key="toy.id" :id="toy.id" @click="test" style="list-style-type: none">{{toy.name}}</li>
        </ul>
    </div>
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
                this.searchFlag = false;
            },
            test(e) {
                this.$router.push({name:"detail-page",query:{id:e.target.id}})
            },
            tmpSearchToy(e) {
                this.searchFlag = true;
                if(e.target.value == "") {
                    this.searchFlag = false;
                }
                let pickedDataArray = []; 
                for(let pickedData of this.originalToyData) { 
                    if(pickedData.name.toLowerCase().indexOf(e.target.value) != -1) { 
                        pickedDataArray.push(pickedData);
                    }
                }
                this.selectedToyData = pickedDataArray;
            }
        }
    })
</script>
<style scoped>
.searchContainer {
    position: relative;
}
ul {
    background-color: white;
    height: 20vh;
    overflow: scroll;
    padding: 0;
    width: 100%;
    position: absolute;
    z-index: 20;
    display: block;
}
li {
    padding: 2%;
}
li:hover {
    background-color: gray;
}
</style>
