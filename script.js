let cart = [];

function addToCart(name, price) {

// check if item already exists
let item = cart.find(p => p.name === name);

if (item) {
item.qty += 1;
} else {
cart.push({
name: name,
price: price,
qty: 1
});
}

updateCartCount();

alert(name + " added to cart!");
}

function updateCartCount() {

let count = 0;

cart.forEach(item => {
count += item.qty;
});

document.getElementById("cart-count").innerText = count;
}

function buyWhatsApp(productName) {

let phone = "919358500110";

let message = "Hi, I want to buy " + productName;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 3000);
