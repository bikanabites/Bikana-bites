// =====================
// CART
// =====================

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

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

updateCartCount();


// =====================
// ADD
// =====================

function addToCart(
name,
price
){

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
name +
" added to cart"
);

}


// =====================
// WHATSAPP BUY
// =====================

function buyWhatsApp(
product
){

const text =

`Hello Bikana Bites

I want to order:

${product}`;

window.open(

`https://wa.me/919358500110?text=${encodeURIComponent(text)}`,

"_blank"

);

}


// =====================
// CART PAGE
// =====================

function renderCart(){

const box =
document.getElementById(
"cart-items"
);

const total =
document.getElementById(
"total-price"
);

if(!box)
return;

box.innerHTML="";

let amount=0;

cart.forEach(
(item,index)=>{

amount+=
item.price;

box.innerHTML +=

`
<div class="cart-item">

<h3>
${item.name}
</h3>

<p>
₹${item.price}
</p>

<button
onclick=
"removeItem(${index})">

Remove

</button>

</div>
`;

}
);

if(total){

total.innerText=
"₹"+amount;

}

}


// =====================
// REMOVE
// =====================

function removeItem(
index
){

cart.splice(
index,
1
);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

updateCartCount();

}


// =====================
// CLEAR
// =====================

function clearCart(){

cart=[];

localStorage.setItem(
"cart",
"[]"
);

renderCart();

updateCartCount();

}


// =====================
// CHECKOUT
// =====================

function checkoutWhatsApp(){

if(
cart.length===0
){

alert(
"Cart empty"
);

return;

}

let msg =

"Hello Bikana Bites\n\n";

let total=0;

cart.forEach(
item=>{

msg +=
`${item.name}
₹${item.price}\n`;

total+=
item.price;

}
);

msg +=
`\nTotal ₹${total}`;

window.open(

`https://wa.me/919358500110?text=${encodeURIComponent(msg)}`,

"_blank"

);

}


// =====================
// LOGIN BUTTON
// =====================

function updateLogin(){

const btn =
document.getElementById(
"loginBtn"
);

if(
!btn
)
return;

if(
localStorage.getItem(
"userLoggedIn"
)==="true"
){

btn.innerHTML=
"My Account";

}

}

function handleCredentialResponse(){

localStorage.setItem(
"userLoggedIn",
"true"
);

updateLogin();

}

window.addEventListener(
"DOMContentLoaded",
()=>{

updateCartCount();

renderCart();

updateLogin();

}
);
