import header from "/src/js/header.js";
// import slider from "/src/js/slider.js";

//?------------------------------- Add Product to LocalStorage Start

async function getData(){
    const photos = await fetch('/src/js/data.json')
    const data = await photos.json()

    data ? localStorage.setItem('products', JSON.stringify(data)) : [];
}

getData();

const products = JSON.parse(localStorage.getItem('products'));

console.log(products);

//?------------------------------- Add Product to LocalStorage End