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