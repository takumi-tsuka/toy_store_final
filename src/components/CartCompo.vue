<template>
  <div class="cart-container container bg-white col-6 p-4">
    <h1 class="text-center mb-3">Shopping Cart of <i>{{cart.user.fname}} {{cart.user.lname}}</i> </h1>
    <div class="table-responsive" v-if="(Scart==null)?false:true">
      <table  class="table">
        <thead>
          <tr style="text-align:center;">
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="[idx,toy] in Scart.tCart" :key="idx">
              <td scope="row" class="col-5">{{toy.name}}</td>
              <td class="col-2">$ {{toy.price}}</td>
              <td class="col-2">
                <div class="mb-3">
                  <input type="number" v-model="toy.amount"  @input="saveAmount(toy,$event)" 
                      class="form-control form-control-sm"  min="1" name="amount"  aria-describedby="helpId" placeholder="put amount">
                </div>
              </td>
              <td class="col-2">$ {{toy.calTotal()}}</td>
              <td class="col-1 text-center"><button class="btn btn-danger" @click="deleteToy(toy)">X</button></td>
            </tr>
          </tbody>
      </table>
      <div class="row justify-content-center align-items-start g-2">
        <div class="col-6 bg-white">
          <h5 class="text-center">Shop Total:</h5><h2  class="text-center"> $ {{Scart.shopTotal()}} </h2>
        </div>
        <div class="col-6 p-4">
          <checkout-compo :cart ="Scart"/>
        </div>
      </div>
    </div>
      <h1 v-else class="text-center">No item in your cart</h1>
  </div>
</template>
<script>
import CryptoJS from 'crypto-js';
import CartClass from '../classes/CartClass';
import Toy from '../classes/Toy';
import CheckoutCompo from './CheckoutCompo.vue';
export default {
  name: "CartCompo",
  props:["cart"],
  components:{
    CheckoutCompo
  },
  data(){
    return {
      key:"hotdog",
      Scart:null
    }
  },
  methods:{
    decrypt(encData){
        let decData = CryptoJS.AES.decrypt(encData,this.key);
        return decData.toString(CryptoJS.enc.Utf8);
    },
    deleteToy(toy){
      this.Scart.deleteToy(toy.id,toy);
    },
    saveAmount(toy,e){
      console.log(e.target.value);
      e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      this.Scart.addCart(toy.id,toy);
    }
  },
  mounted(){
    if(sessionStorage.getItem("cart")!=null){
      let decData = CryptoJS.AES.decrypt(sessionStorage.getItem("cart"),this.key);
      let sessionSt = JSON.parse(decData.toString(CryptoJS.enc.Utf8));
      let user = JSON.parse(CryptoJS.AES.decrypt(sessionStorage.getItem("user"),"test").toString(CryptoJS.enc.Utf8))
      let shoppingCart = new CartClass(user);
      console.log(shoppingCart);
      sessionSt.forEach((toy)=> {
        let newToy = new Toy(toy[1].id,toy[1].name,toy[1].price,toy[1].amount);
        shoppingCart.tCart.set(toy[0],newToy);
      });
      this.Scart = shoppingCart;
    }
  }
};
</script>
<style scope>
  .cart-container {
    border-radius: 50px;
    border: 5px double rgb(64, 171, 64);
    margin-top:5%;
    margin-bottom:10%
  }
</style>