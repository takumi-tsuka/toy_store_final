<template>
    <div class="container-fluid">
        <h1>Thank you for your order</h1>
        <h1>expected delivery date: {{expDate.sdate}} to {{expDate.edate}}</h1>
    </div>
</template>
<script>
export default {
    name:"ThanksPage",
    data(){
        return {
           expDate:{sdate:null,edate:null}
        } 
    },
    mounted(){
        let sdateIns = new Date();
        let edateIns = new Date();
        sdateIns.setDate(sdateIns.getDate()+2);
        edateIns.setDate(sdateIns.getDate()+2);
        this.expDate.sdate = sdateIns.toLocaleDateString();
        this.expDate.edate = edateIns.toLocaleDateString();
        sessionStorage.removeItem("cart");
    }
}
</script>