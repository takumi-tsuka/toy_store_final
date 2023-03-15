<template>
  <div class="container" style=" padding-top: 5vh; margin-top:20%">
    <div class="row justify-content-center align-items-start g-2" style="padding-top:5vh; background-color:lightBlue" >
      <div class="col-5">
        <img style="height:300px; width:450px; align-itens: center padding-top:5vh" :src="require('../assets/img/'+selectedToy.img)" :alt="selectedToy.img">
      </div>
      <div class="col-7" style="padding:1%;display:flex; flex-direction:column;row-gap:3vh;">
        <h1>{{selectedToy.name}}</h1>
        <details style="font-size:20px;">
          <summary >show all detail <br>{{selectedToy.des.slice(0,500)}}</summary>
          <p class="lead">{{selectedToy.des.slice(500)}}</p>
        </details>
        <h2>$ {{selectedToy.price}}</h2>
        <p class="lead">
          Age: {{selectedToy.age}} or older
        </p>
        <form @submit.prevent="addCart" class="form-floating mb-3" style="display:flex; flex-direction:column; row-gap:2vh;">
          <input
            type="number"
            class="form-control" min="1" id="amount" placeholder="Put amount" v-model="amount">
          <label for="amount">Amount</label>
          <button class="btn btn-warning btn-clonse" type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import toys from "../assets/toys.json";
import Toys from "../classes/Toy.js";

export default {
  name: "DetailCompo",
  props:["id","cart"],
  data(){
    return {
      amount:1,
      selectedToy:this.showToy(),
    }
  },
  methods:{
    showToy(){
      let selectedToy;
      for(let toy of toys){
          if(this.$route.query.id == toy.id){
              selectedToy = toy;
          }
      }
      return selectedToy;
    },
    addCart(){
      let toy = new Toys(this.selectedToy.id,this.selectedToy.name,this.selectedToy.price,this.amount);
      this.cart.addCart(toy.id,toy);
      this.$router.push({name:"product-page"});
      this.alertFlag = true;
      alert(toy.amount+" item added to your cart");
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
};
</script>
<style scoped>
  h1,
  h2 {
    color: #0496FF;
  }
  p {
    font-size: 16px
  }
  button {
    font-weight: 400;
    font-size: 18px;
  }
</style>
