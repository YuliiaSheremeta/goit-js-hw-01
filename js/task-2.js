"use strict";
function getShippingMessage(country, price, deliveryFee) {
    country = String(country)
    price = Number(price);
    deliveryFee = Number(deliveryFee);
    const totalPrice = price + deliveryFee;
    const messageAfterOrder = `Shipping to ${country} will cost ${totalPrice} credits`;
    return messageAfterOrder;
}
console.log(getShippingMessage("Australia", 120, 50)); 
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20)); 