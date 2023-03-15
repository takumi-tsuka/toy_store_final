<template>
  <div class="container" style="width:70%">
    <h1 style="width:100%;text-align:center;">Shopping Cart of <i>{{cart.user.fname}} {{cart.user.lname}}</i> </h1>
    <div class="table-responsive" v-if="(Scart==null)?false:true">
      <table  class="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle">
        <thead class="table-light">
          <tr style="text-align:center;">
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="table-primary" v-for="[idx,toy] in Scart.tCart" :key="idx">
              <td scope="row">{{toy.name}}</td>
              <td style="text-align:center">$ {{toy.price}}</td>
              <td>
                <div class="mb-3" style="display:flex;justify-content:center;align-items:center;margin-bottom: 0!important;">
                  <input type="number" v-model="toy.amount"  @input="saveAmount(toy,$event)" 
                      class="form-control form-control-sm"  min="1" name="amount"  aria-describedby="helpId" placeholder="put amount">
                </div>
              </td>
              <td style="text-align:center">$ {{toy.calTotal()}}</td>
              <td style="text-align:center"><button class="btn btn-danger" @click="deleteToy(toy)">X</button></td>
            </tr>
          </tbody>
      </table>
      <div class="row justify-content-center align-items-start g-2">
        <div class="col-6">
          <h1>Shop Total: $ {{Scart.shopTotal()}} </h1>
        </div>
        <div class="col-6">
          <checkout-compo :cart ="Scart"/>
        </div>
      </div>
    </div>
    <h1 v-else>No item in your cart</h1>
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
      let shoppingCart = new CartClass("user");
      sessionSt.forEach((toy)=> {
        let newToy = new Toy(toy[1].id,toy[1].name,toy[1].price,toy[1].amount);
        shoppingCart.tCart.set(toy[0],newToy);
      });
      this.Scart = shoppingCart;
    }
  }
};
</script>