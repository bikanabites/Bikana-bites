setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);

let cart=[];
let total=0;

function changeQty(btn,value){

let qtyElement=btn.parentElement.querySelector("span");

let qty=parseInt(qtyElement.innerText);

qty+=value;

if(qty<1) qty=1;

qtyElement.innerText=qty;
}

function addToCart(name,price,btn){

let qty=parseInt(
btn.parentElement.querySelector(".qty-box span").innerText
);

cart.push({
name:name,
price:price,
qty:qty
});

total+=price*qty;

document.getElementById("cartCount").innerText=cart.length;

document.getElementById("cartTotal").innerText=total;

alert(name+" Added To Cart");
}

function checkoutWhatsapp(){

if(cart.length===0){

alert("Cart Empty");

return;
}

let message="🛒 BIKANA BITES Order%0A%0A";

cart.forEach(item=>{

message +=
item.name+
" x "+
item.qty+
" = ₹"+
(item.price*item.qty)+
"%0A";

});

message += "%0A Total = ₹"+total;

window.open(
"https://wa.me/919358500110?text="+message,
"_blank"
);
}

function searchProducts(){

let input=document.getElementById("searchInput");

let filter=input.value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(filter))
card.style.display="block";
else
card.style.display="none";

});
}
