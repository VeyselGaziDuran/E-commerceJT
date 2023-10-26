import { thumbsActiveFunc } from "/src/js/single-product/thumbsActive.js";
import { singleThumbs } from "/src/js/glide.js";
import { zoomFunc } from "/src/js/single-product/zoom.js";
import { colorsFunc } from "/src/js/single-product/colors.js";
import { valuesFunc } from "/src/js/single-product/values.js";
import { tabsFunc } from '/src/js/single-product/tabs.js';
import  commentsFunc  from '/src/js/single-product/comments.js';



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
tabsFunc()


// Add to cart
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const btnAddToCart = document.getElementById('add-to-cart');
const quantityDOM = document.getElementById('product-quantity');
let cartItems = document.querySelector('.header-cart-count');

btnAddToCart.addEventListener('click', () => {
  const quantityToAdd = Number(quantityDOM.value);
  if (!isNaN(quantityToAdd) && quantityToAdd > 0) {
    for (let i = 0; i < quantityToAdd; i++) {
      addProductToCart();
    }
  }
});

function addProductToCart() {
  cart.push({ ...findProduct, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  cartItems.innerHTML = cart.length;

  updateTotalQuantity(1);
}

function updateTotalQuantity(quantityToAdd) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartItems.innerHTML = totalQuantity;
}

