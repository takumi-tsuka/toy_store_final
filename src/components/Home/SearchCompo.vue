<template>
    <div class="searchContainer">
    <!-- <div class="searchContainer">
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
    </div> -->
    <form class="d-flex col-6" style="column-gap: 0.5rem">
        <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            @input="tmpSearchToy"
        />
        <button type="submit" class="btn btn-success" @click.prevent="searchToy">Search</button>
    </form>
    <ul v-if="searchFlag">
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
                if(pickedDataArray.length == 0) {
                    this.searchFlag = false;
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
    top: 120%;
    left: 50%;
    width: 50%;
    background-color: white;
    height: 35vh;
    overflow: scroll;
    padding: 0;
    position: absolute;
    z-index: 20;
    display: block;
}
li {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 6vh;
    padding: 2%;
}
li:hover {
    background-color: gray;
}
</style>
