// ======================
// CART STORAGE
// ======================

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

updateCartCount();


// ======================
// ADD TO CART
// ======================

function addToCart(name,price){

cart.push({
name,
price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(
name + " added to cart!"
);

}


// ======================
// CART COUNT
// ======================

function updateCartCount(){

const count =
document.getElementById(
"cart-count"
);

if(count){

count.innerText =
cart.length;

}

}


// ======================
// BUY WHATSAPP
// ======================

function buyWhatsApp(product){

const msg =

`Hello Bikana Bites,

I want to order:

${product}

Please share details.`;

window.open(

`https://wa.me/919358500110?text=${encodeURIComponent(msg)}`,

"_blank"

);

}


// ======================
// RENDER CART
// ======================

function renderCart(){

const cartContainer =
document.getElementById(
"cart-items"
);

const totalElement =
document.getElementById(
"total-price"
);

if(!cartContainer)
return;

cartContainer.innerHTML="";

let total=0;

cart.forEach(
(item,index)=>{

total += item.price;

cartContainer.innerHTML +=

`
<div class="cart-item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>
`;

}
);

if(totalElement){

totalElement.innerText=
"₹"+total;

}

}


// ======================
// REMOVE
// ======================

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

renderCart();

updateCartCount();

}


// ======================
// CLEAR CART
// ======================

function clearCart(){

cart=[];

localStorage.setItem(

"cart",

"[]"

);

renderCart();

updateCartCount();

}


// ======================
// CHECKOUT
// ======================

function checkoutWhatsApp(){

if(cart.length===0){

alert(
"Cart is empty!"
);

return;

}

let text=

"Hello Bikana Bites\n\nOrder:\n\n";

let total=0;

cart.forEach(item=>{

text +=
`${item.name} - ₹${item.price}\n`;

total+=item.price;

});

text +=
`\nTotal ₹${total}`;

window.open(

`https://wa.me/919358500110?text=${encodeURIComponent(text)}`,

"_blank"

);

}


// ======================
// GOOGLE LOGIN
// ======================

function updateLoginButton(){

const btn =
document.getElementById(
"loginBtn"
);

if(!btn)
return;

const logged =
localStorage.getItem(
"userLoggedIn"
);

if(logged==="true"){

btn.innerHTML=
"My Account";

}

}


function handleCredentialResponse(){

localStorage.setItem(
"userLoggedIn",
"true"
);

updateLoginButton();

}


window.addEventListener(

"load",

function(){

updateLoginButton();

renderCart();

}

);


// ======================
// LOGOUT
// ======================

function logout(){

localStorage.removeItem(
"userLoggedIn"
);

location.reload();

}
