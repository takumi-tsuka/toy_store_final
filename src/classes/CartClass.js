import CryptoJS from 'crypto-js';
import Toy from './Toy';
class CartClass{
    tCart = new Map();
    key = "hotdog"
    constructor(user){
        this.user = user;
    }
    addCart(id,toy){
        if(sessionStorage.getItem("cart")!=null){
            let tmpArray = JSON.parse(this.decrypt(sessionStorage.getItem("cart")));
            for(let toy of tmpArray){
                let newToy = new Toy(toy[1].id,toy[1].name,toy[1].price,toy[1].amount);
                this.tCart.set(toy[0],newToy);
            }
        }
        this.tCart.set(id,toy);
        sessionStorage.setItem("cart",this.encrypt(JSON.stringify(this.tCartArray())));
    }
    deleteToy(id){
        this.tCart.delete(id);
        sessionStorage.setItem("cart",this.encrypt(JSON.stringify(this.tCartArray())))
    }
    tCartArray(){
        let toyCart =[];
        for(let toy of this.tCart){
            toyCart.push(toy);
        }
        return toyCart;
    }
    totalAmount(){
        let totalAmo = 0;
        for(let toy of this.tCart){
            if(toy[1].amount != ""){
                totalAmo += parseInt(toy[1].amount); 
            }
        }
        return totalAmo;
    }
    filterItem(){
        let tmpArray =[];
        this.tCart.forEach(toy=>{
            if(toy.amount !="" || toy.amount != 0){
                tmpArray.push(toy);
            }
        })
        return tmpArray
    }
    shopTotal(){
        let sum = 0;
        this.tCart.forEach(toy=>{
            sum += parseFloat(toy.calTotal());
        })
        return sum.toFixed(2);
    }
    checkOut(){
        sessionStorage.removeItem("cart");
        this.tCart.clear();
    }
    encrypt(data){
        return CryptoJS.AES.encrypt(data,this.key).toString();
    }  
    decrypt(encData){
        let decData = CryptoJS.AES.decrypt(encData,this.key);
        return decData.toString(CryptoJS.enc.Utf8);
    } 
}
export default CartClass;