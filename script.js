// CART STORAGE

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

// ADD TO CART

function addToCart(name, price) {

cart.push({
name: name,
price: price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(name + " added to cart!");

}

// UPDATE CART COUNT

function updateCartCount() {

let count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

// WHATSAPP BUY

function buyWhatsApp(product) {

let message =
`Hello Bikana Bites,%0A%0AI want to order:%0A${product}%0A%0APlease share details.`;

window.open(
`https://wa.me/919358500110?text=${message}`,
"_blank"
);

}

// VIEW CART

function renderCart() {

let cartContainer =
document.getElementById("cart-items");

let totalElement =
document.getElementById("total-price");

if(!cartContainer) return;

cartContainer.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartContainer.innerHTML += `
<div class="cart-item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

if(totalElement){

totalElement.innerText =
"₹" + total;

}

}

// REMOVE ITEM

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

updateCartCount();

}

// CLEAR CART

function clearCart(){

cart = [];

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

updateCartCount();

}

// WHATSAPP CHECKOUT

function checkoutWhatsApp(){

if(cart.length===0){

alert("Cart is empty!");

return;

}

let orderText =
"Hello Bikana Bites,%0A%0AI want to place an order:%0A%0A";

let total = 0;

cart.forEach(item=>{

orderText +=
`${item.name} - ₹${item.price}%0A`;

total += item.price;

});

orderText +=
`%0AOrder Total: ₹${total}`;

window.open(
`https://wa.me/919358500110?text=${orderText}`,
"_blank"
);

}

// LOAD CART PAGE

document.addEventListener(
"DOMContentLoaded",
function(){

renderCart();

}
);
