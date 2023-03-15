<template>
<!-- Button trigger modal -->
<button type="button" @click="confirm" class="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" style="width:100%;">
  Go to Confirmation
</button>
<!-- Modal -->
<div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header bg-warning">
                <h5 class="modal-title " id="modalTitleId">Shopping Confirmation</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
                <h1 v-if="coFlag">please make sure number of items</h1>
                <table v-else class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(toy,idx) in cart.filterItem()" :key="idx">
                        <td scope="row">{{toy.name}}</td>
                        <td>$ {{toy.price}}</td>
                        <td>{{toy.amount}}</td>
                        <td>$ {{toy.calTotal()}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer d-flex justify-content-between bg-warning">
                <div>
                    <h5 >{{cart.totalAmount()}} Items in your cart</h5>
                    <h2 class="text-start">Shop Total: ${{cart.shopTotal()}}</h2>
                </div>
                <div style="display:flex; justify-content:space-between;width:32%;">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back to Cart</button>
                    <button :disabled="coFlag" @click="coHandler" type="button" class="btn btn-success" data-bs-dismiss="modal">Check Out</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"CheckoutCompo",
    props:["cart"],
    data(){
        return {
            coFlag:false
        }
    },
    methods:{
        confirm(){
            if(this.cart.totalAmount() == 0){
                this.coFlag = true;
            }else{
                this.coFlag = false;
            }
        },
        coHandler(){
            if(this.cart.totalAmount() != 0){
                this.$emit("boughtItem",this.cart.filterItem());
                this.cart.checkOut();
                this.$router.push({name:"thanks-page"});
            }else{
                this.$router.push({name:"cart-page"});
            }
        }
    }
}
</script>
<style>
</style>
