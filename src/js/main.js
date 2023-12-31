import headerFunc from "./header.js";
// import sliderFunc from "./slider.js";
import productsFunc from "./products.js";
import search from "./search.js";

//?------------------------------- Add Product to LocalStorage Start

(async function () {
    const photos = await fetch('js/data.json')
    const data = await photos.json()

    data ? localStorage.setItem('products', JSON.stringify(data)) : [];
    productsFunc(data);
})()

//!------------------------------- Add Product to LocalStorage End


//?------------------------------- Add cartItems to LocalStorage Start

const cartItems = document.querySelector('.header-cart-count');

cartItems.innerHTML = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')).length
    : 0;

//!------------------------------- Add cartItems to LocalStorage End