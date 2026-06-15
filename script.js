let count = 0;
let total = 0;

function addToCart(name, price){
count++;
total += price;

document.getElementById("count").innerText = count;
document.getElementById("total").innerText = total;
}

function orderWhatsApp(){

let msg = `Order from BIKANA BITES%0ATotal Items: ${count}%0ATotal: ₹${total}`;

window.open("https://wa.me/919358500110?text=" + msg, "_blank");
}
