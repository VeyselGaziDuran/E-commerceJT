import  product1 from "/src/js/glide.js";

let products = []
let cart = []

cart = localStorage.getItem('cart') 
? JSON.parse(localStorage.getItem('cart')) 
: [];

function addToCart() {
    const cartItems = document.querySelector('.header-cart-count');
    const buttons = [...document.getElementsByClassName('add-to-cart')];
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            const id = e.target.dataset.id;
            const findProduct = products.find((product) => product.id === Number(id));
            const indCart = cart.find((item) => item.id === Number(id));
            if (indCart) {
                cart.push({ ...findProduct, quantity: 1 });
            } else {
                cart.push({ ...findProduct, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            cartItems.innerHTML = cart.length;
        });
    });
}

function productsFunc() {
    products =  localStorage.getItem('products')
     ? JSON.parse(localStorage.getItem('products'))
     : [];
    const productsContainer = document.getElementById('product-list');
   
    let results = '';

    products.forEach((item) => {
        results += `
        <li class="text-center glide__slide bg-vege-grey rounded-md relative group">
            <!-- product image -->
            <div class="">
                <a href="" class="p-4 block">
                    <img src=${item.img.singleImage} alt="" class="rounded-md group-hover:hidden">
                    <img src=${item.img.thumbs[1]} alt="" class="rounded-md hidden group-hover:block ">
                </a>
            </div>
            <!-- product info -->
            <div class="">
                <a href="" class="font-semibold text-sm mt-4">${item.name}</a>
                <!-- Product Star-->
                <ul class="flex text-center justify-center my-2 gap-[.125rem]">
                    <li>
                        <i class="text-vege-gold bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="text-vege-gold bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="text-vege-gold bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="text-vege-gold bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="text-vege-gold bi bi-star-half"></i>
                    </li>
                </ul>
                <!-- Product Price-->
                <div class="flex justify-center text-center gap-2 mb-3">
                    <strong class="text-vege-red font-medium">$${item.price.newPrice.toFixed(2)}</strong>
                    <s class="text-vege-blue text-md font-thin">$${item.price.oldPrice.toFixed(2)}</s>
                </div>
                
                <!-- discount -->
                <div class="absolute text-center justify-center flex top-2 right-6 w-10 h-10 translate-x-4">
                    <span class="absolute text-vege-white py-3 px-2 bg-vege-red text-xs rounded-full animate-pulse">-${item.discount}%</span>
                </div>
                <!-- Product Buttons -->
                <div class=" group-hover:translate-x-5 invisible  group-hover:visible opacity-0 group-hover:opacity-100  duration-300 inline-flex flex-col gap-1 absolute top-5 left-0">
                    <button data-id="${item.id}" class="add-to-cart bg-vege-black inline-block px-2 py-1 rounded-md hover:opacity-70 duration-300 ">
                        <i class="bi bi-basket2-fill pointer-events-none text-vege-white"></i>
                    </button>
                    <button class="bg-vege-black inline-block px-2 py-1 rounded-md hover:opacity-70 duration-300 ">
                        <i class="bi bi-heart text-vege-white"></i>
                    </button>
                    <button class="bg-vege-black inline-block px-2 py-1 rounded-md hover:opacity-70 duration-300 ">
                        <a href="">
                            <i class="bi bi-eye text-vege-white"></i>
                        </a>
                    </button>
                    <button class="bg-vege-black inline-block px-2 py-1 rounded-md hover:opacity-70 duration-300 "> 
                        <a href="">
                            <i class="bi bi-share text-vege-white"></i>
                        </a>
                    </button>
                </div>
            </div>
        </li>
        `;
        productsContainer.innerHTML = results;
        addToCart();
    });
    product1();
  }
 
    export default productsFunc();