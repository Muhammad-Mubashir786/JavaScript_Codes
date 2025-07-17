var purchase1 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log("Total Price:", calculation)
    }
}
purchase1.totalPrice();

var shoes = 100;
var stateTax = 1.2;
function totalPrice(shoes, stateTax){
    return shoes * stateTax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay);