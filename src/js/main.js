import headerFunc from "/src/js/header.js";
// import sliderFunc from "/src/js/slider.js";
import productsFunc from "/src/js/products.js";
import search from "/src/js/search.js";

//?------------------------------- Add Product to LocalStorage Start

(async function (){
    const photos = await fetch('/src/js/data.json')
    const data = await photos.json()

    data ? localStorage.setItem('products', JSON.stringify(data)) : [];
    productsFunc();
})()

//!------------------------------- Add Product to LocalStorage End


//?------------------------------- Add cartItems to LocalStorage Start

const cartItems = document.querySelector('.header-cart-count');

cartItems.innerHTML = localStorage.getItem('cart')
 ? JSON.parse(localStorage.getItem('cart')).length
 : 0;

//!------------------------------- Add cartItems to LocalStorage End