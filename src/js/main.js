import headerFunc from "/src/js/header.js";
// import sliderFunc from "/src/js/slider.js";
import productsFunc from "/src/js/products.js";

//?------------------------------- Add Product to LocalStorage Start

async function getData(){
    const photos = await fetch('/src/js/data.json')
    const data = await photos.json()

    data ? localStorage.setItem('products', JSON.stringify(data)) : [];
}

getData();

const products = JSON.parse(localStorage.getItem('products'));

const cartItems = document.querySelector('.header-cart-count');

cartItems.innerHTML = localStorage.getItem('cart')
 ? JSON.parse(localStorage.getItem('cart')).length
 : 0;
//?------------------------------- Add Product to LocalStorage End