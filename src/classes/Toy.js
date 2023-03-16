class Toy{
    constructor(id,name,price,amount=1){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    calTotal(){
        // return Math.round((this.price*this.amount)*100)/100;
        return (this.price*this.amount).toFixed(2);
    }
}
export default Toy;