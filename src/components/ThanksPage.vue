<template>
    <div class="container-fluid">
        <img
            :src="thankYou"
        />
        <h1>expected delivery date: {{expDate.sdate}} to {{expDate.edate}}</h1>
    </div>
</template>
<script>
export default {
    name:"ThanksPage",
    data(){
        return {
            expDate:{sdate:null,edate:null},
            thankYou: require('../assets/thanks.png'),
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
<style>
    img{
        width: 60%;
    }
    .container-fluid{
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    h1{
        font-size: 32px;
    }

</style>