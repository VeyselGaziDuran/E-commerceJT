import { thumbsActiveFunc } from "/src/js/single-product/thumbsActive.js";
import { singleThumbs } from "/src/js/glide.js";
import { zoomFunc } from "/src/js/single-product/zoom.js";
import { colorsFunc } from "/src/js/single-product/colors.js";
import { valuesFunc } from "/src/js/single-product/values.js";


const productId = localStorage.getItem('productId')
? JSON.parse(localStorage.getItem('productId'))
: localStorage.setItem('productId', JSON.stringify(1));

const product = localStorage.getItem('products')
? JSON.parse(localStorage.getItem('products'))
: localStorage.setItem('products', JSON.stringify([]));

const findProduct = product.find((item) => item.id === Number( productId));

// Product Title
const productTitle = document.querySelector('.product-title');

productTitle.innerHTML = findProduct.name;

// Product Price
const newPriceDOM = document.querySelector('.new-price');
const oldPriceDOM = document.querySelector('.old-price');

newPriceDOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = findProduct.price.oldPrice.toFixed(2);

// Product Image
const singleImageDOM = document.querySelector('#single-image');

singleImageDOM.src = findProduct.img.singleImage;

// Product Thumbs

const galleryDOM = document.querySelector('.gallery-thumbs');
let result = '';
findProduct.img.thumbs.forEach((item) => {
    result += `
    <li class=" cursor-pointer glide__slide">
        <img class="img-fluid border border-transparent active:border-vege-red active:border hover:border hover:border-vege-black hover:animate-pulse duration-300 " src="${item}" alt="">
    </li>
    `;
});
galleryDOM.innerHTML = result;
singleThumbs() 
thumbsActiveFunc()
zoomFunc()
colorsFunc()
valuesFunc()