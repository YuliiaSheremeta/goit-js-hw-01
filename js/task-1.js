"use strict";
function makeTransaction(quantity, pricePerDroid) {
    quantity = Number(quantity);
    pricePerDroid = Number(pricePerDroid);
    const totalPrice = quantity * pricePerDroid;
    const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`; 
    return message;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));